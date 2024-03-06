import { forwardRef, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { componentAllowsChildren, pascalize } from "../../functions";
import { useBlockClassName } from "../../hooks";
import { getBlockComponent } from "../../store/block-blueprint";

import BlueprintComponentAttribute from "../BlueprintComponentAttribute";
import BlueprintComponentInsert from "../BlueprintComponentInsert";
import BlueprintDebugRect from "../BlueprintDebugRect";

const BlueprintComponentOpeningTag = forwardRef(
	({ children = [], clientId, disabled = false, editorRef = null }, ref) => {
		const blockClassName = useBlockClassName();

		let { type = "html", ...component } = useSelector((state) =>
			getBlockComponent(state.blockBlueprint, clientId),
		);

		let tagName = component?.tagName || "div";

		if (type !== "html") {
			tagName = pascalize(type);
		} else if (component?.tagName) {
			delete component.tagName;
		}

		const componentAttributes = [];

		Object.entries(component).forEach(([name, value]) => {
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

		const allowsChildren = componentAllowsChildren(type, tagName);
		const hasAttributes = componentAttributes.length > 0;
		const hasEmptyAttribute = "" in component;
		const hasMultipleAttributes = componentAttributes.length > 1;
		const isMultiLine = type !== "html" || hasMultipleAttributes;

		return (
			<div className="BlueprintComponent-open" ref={ref}>
				<div
					className={`BlueprintComponent-markup ${(isMultiLine && "is-multi-line") || ""}`}
				>
					<div className="BlueprintComponent-line">
						<span>{`<`}</span>
						<span className="BlueprintComponent-tagName">
							{tagName}
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
	},
);

export default BlueprintComponentOpeningTag;
