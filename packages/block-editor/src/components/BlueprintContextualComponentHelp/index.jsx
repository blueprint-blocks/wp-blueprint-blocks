import clsx from "clsx";
import { memo, useMemo, useRef } from "react";

import { getComponentProperties, parseMarkdown } from "../../functions";
import { useBlueprint, useEditorFocus, useTutorial } from "../../hooks";

import Tooltip from "../Tooltip";

import "./style.css";

const BlueprintContextualComponentHelp = memo(() => {
	const ref = useRef(null);

	const tutorial = useTutorial();

	const { getComponentType, setComponentAttribute, unsetComponentAttribute } =
		useBlueprint();

	const { currentFocus } = useEditorFocus();
	const { clientId = null, context, attributeName = "" } = currentFocus;

	const componentType = getComponentType(clientId);

	const componentProperties = useMemo(
		() => getComponentProperties(componentType),
		[componentType],
	);

	const componentAttributes = Object.entries(
		componentProperties?.attributes || {},
	).filter(
		([key, _]) => attributeName === "" || key.indexOf(attributeName) !== -1,
	);

	const onClickSuggestedValue = ({ attributeName, attributeValue }) => {
		if (
			tutorial.isActive &&
			attributeName !== "tagName" &&
			attributeValue !== "h3"
		) {
			return;
		}

		if (attributeName.indexOf(currentFocus?.attributeName) !== -1) {
			unsetComponentAttribute(clientId, currentFocus?.attributeName);
		}

		setComponentAttribute(clientId, attributeName, attributeValue);
	};

	return (
		<div ref={ref} className="BlueprintContextualComponentHelp">
			<div className="BlueprintContextualComponentHelp-heading">
				<h3>{componentProperties?.label || ""}</h3>

				{componentProperties?.description && (
					<p>{componentProperties?.description || ""}</p>
				)}
			</div>

			{componentAttributes.map(
				(
					[attributeName, { description, suggestedValues = [], url }],
					index,
				) => (
					<div key={index}>
						<h4>
							<span>{attributeName}</span>
							{url && <Tooltip url={url} />}
						</h4>

						{description && (
							<p
								dangerouslySetInnerHTML={{
									__html: parseMarkdown(description),
								}}
							/>
						)}

						{suggestedValues.length > 0 && (
							<>
								<h5>{"Suggested Values"}</h5>
								<div className="BlueprintContextualComponentHelp-suggestedValues">
									{suggestedValues.map(
										(attributeValue, index) => (
											<div
												key={index}
												className={clsx({
													"is-disabled":
														tutorial.isActive &&
														(attributeName !==
															"tagName" ||
															attributeValue !==
																"h3"),
												})}
												onClick={() =>
													onClickSuggestedValue({
														attributeName,
														attributeValue,
													})
												}
											>
												<span>{attributeValue}</span>
											</div>
										),
									)}
								</div>
							</>
						)}
					</div>
				),
			)}
		</div>
	);
});

export default BlueprintContextualComponentHelp;
