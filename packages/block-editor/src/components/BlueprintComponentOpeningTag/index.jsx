import { useLayoutEffect, useMemo, useRef } from "react";

import {
	isArray,
	componentAllowsChildren,
	getUniqueClientId,
} from "../../functions";
import { useBlockClassName, useBlueprint } from "../../hooks";

import BlueprintComponentAttribute from "../BlueprintComponentAttribute";
import BlueprintComponentInsert from "../BlueprintComponentInsert";
import BlueprintDebugRect from "../BlueprintDebugRect";

const BlueprintComponentOpeningTag = ({
	children = [],
	clientId,
	disabled = false,
}) => {
	const ref = useRef(null);

	const blockClassName = useBlockClassName();
	const { getComponentAttributes, getComponentTagName, getComponentType } =
		useBlueprint();

	const componentAttributes = getComponentAttributes(clientId);
	const type = getComponentType(clientId);
	const tagName = getComponentTagName(clientId);

	const _componentAttributes = useMemo(() => {
		const _componentAttributes = [];

		if (process.env.NODE_ENV === "development" && env.DEBUG_CLIENT_ID) {
			_componentAttributes.push({
				clientId: getUniqueClientId(),
				name: "clientId",
				value: clientId,
			});
		}

		componentAttributes.forEach(({ clientId, name, value }) => {
			if (
				name === "className" &&
				value &&
				isArray(value) &&
				"{{ block._className }}" in value
			) {
				let classNameValue = { ...value };
				delete classNameValue["{{ block._className }}"];
				classNameValue[blockClassName] = true;
				_componentAttributes.push({
					clientId,
					name,
					value: classNameValue,
				});
			} else {
				_componentAttributes.push({
					clientId,
					name,
					value,
				});
			}
		});

		return _componentAttributes;
	}, [blockClassName, clientId, componentAttributes]);

	const allowsChildren = useMemo(
		() => componentAllowsChildren(type, tagName),
		[tagName, type],
	);

	const hasAttributes = useMemo(
		() => _componentAttributes.length > 0,
		[_componentAttributes],
	);

	const hasEmptyAttribute = useMemo(
		() =>
			_componentAttributes.reduce(
				(hasEmptyAttribute, attribute) =>
					hasEmptyAttribute || attribute.name === "",
				false,
			),
		[_componentAttributes],
	);

	const hasMultipleAttributes = useMemo(
		() => _componentAttributes.length > 1,
		[_componentAttributes],
	);

	const isMultiLine = useMemo(
		() => type !== "html" || hasMultipleAttributes,
		[hasMultipleAttributes, type],
	);

	return (
		<div ref={ref} className="BlueprintComponent-open">
			<div
				className={`BlueprintComponent-markup ${(isMultiLine && "is-multi-line") || ""}`}
			>
				<div className="BlueprintComponent-line">
					<span>{`<`}</span>
					<span className="BlueprintComponent-tagName">
						{tagName}
					</span>
				</div>
				{_componentAttributes.map((attribute, index) => (
					<BlueprintComponentAttribute
						key={attribute.clientId}
						clientId={attribute.clientId}
						componentClientId={clientId}
						disabled={disabled}
						attributeName={attribute.name}
						attributeValue={attribute.value}
					>
						{!isMultiLine &&
							index === _componentAttributes.length - 1 && (
								<>
									{!allowsChildren && <span>{`/`}</span>}
									<span>{`>`}</span>
								</>
							)}
					</BlueprintComponentAttribute>
				))}
				{!hasEmptyAttribute && (
					<BlueprintComponentInsert clientId={clientId} />
				)}
				{isMultiLine && (
					<div className="BlueprintComponent-line">
						{!allowsChildren && <span>{`/`}</span>}
						<span>{`>`}</span>
					</div>
				)}
				{!hasAttributes && (
					<div className="BlueprintComponent-line">
						<span>{`>`}</span>
					</div>
				)}
			</div>

			{children}

			{process.env.NODE_ENV === "development" && ref && (
				<BlueprintDebugRect debugRef={ref} />
			)}
		</div>
	);
};

export default BlueprintComponentOpeningTag;
