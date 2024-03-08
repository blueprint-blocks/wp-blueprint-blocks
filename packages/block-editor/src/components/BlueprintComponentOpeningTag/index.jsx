import { useLayoutEffect, useMemo, useRef } from "react";

import { componentAllowsChildren, pascalize } from "../../functions";
import { useBlockClassName, useBlueprint } from "../../hooks";

import BlueprintComponentAttribute from "../BlueprintComponentAttribute";
import BlueprintComponentInsert from "../BlueprintComponentInsert";
import BlueprintDebugRect from "../BlueprintDebugRect";

const BlueprintComponentOpeningTag = ({
	children = [],
	clientId,
	disabled = false,
	editorRef = null,
}) => {
	const ref = useRef(null);

	const blockClassName = useBlockClassName();
	const { getComponentById } = useBlueprint();

	const {
		tagName = null,
		type = "html",
		...component
	} = getComponentById(clientId);

	const _component = useMemo(() => {
		const _component = { ...component };
		if (type !== "html" && tagName !== null) {
			_component.tagName = tagName;
		}
		return _component;
	}, [component, tagName, type]);

	const _tagName = useMemo(
		() => (type === "html" && (tagName || "div")) || pascalize(type),
		[tagName, type],
	);

	const componentAttributes = useMemo(() => {
		const componentAttributes = [];

		if (process.env.NODE_ENV === "development") {
			componentAttributes.push(["clientId", clientId]);
		}

		Object.entries(_component).forEach(([name, value]) => {
			if (
				name === "className" &&
				value.hasOwnProperty("{{ block._className }}")
			) {
				let classNameValue = { ...value };
				delete classNameValue["{{ block._className }}"];
				classNameValue[blockClassName] = true;
				componentAttributes.push([name, classNameValue]);
			} else {
				componentAttributes.push([name, value]);
			}
		});

		return componentAttributes;
	}, [blockClassName, clientId, component]);

	const allowsChildren = useMemo(
		() => componentAllowsChildren(type, tagName),
		[tagName, type],
	);

	const hasAttributes = useMemo(
		() => componentAttributes.length > 0,
		[componentAttributes],
	);

	const hasEmptyAttribute = useMemo(
		() => "" in componentAttributes,
		[componentAttributes],
	);

	const hasMultipleAttributes = useMemo(
		() => componentAttributes.length > 1,
		[componentAttributes],
	);

	const isMultiLine = useMemo(
		() => type !== "html" || hasMultipleAttributes,
		[hasMultipleAttributes, type],
	);

	return (
		<div className="BlueprintComponent-open">
			<div
				className={`BlueprintComponent-markup ${(isMultiLine && "is-multi-line") || ""}`}
			>
				<div className="BlueprintComponent-line">
					<span>{`<`}</span>
					<span className="BlueprintComponent-tagName">
						{_tagName}
					</span>
				</div>
				{componentAttributes.map(([name, value], index) => (
					<BlueprintComponentAttribute
						key={index}
						clientId={clientId}
						disabled={disabled}
						attributeName={name}
						attributeValue={value}
					>
						{!isMultiLine &&
							index === componentAttributes.length - 1 && (
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

			{process.env.NODE_ENV === "development" && ref && editorRef && (
				<BlueprintDebugRect debugRef={ref} parentRef={editorRef} />
			)}
		</div>
	);
};

export default BlueprintComponentOpeningTag;
