import { memo, useMemo, useRef } from "react";

import { getComponentProperties } from "../../functions";
import { useBlueprint, useEditorFocus } from "../../hooks";

import "./style.css";

const BlueprintContextualComponentHelp = memo(() => {
	const ref = useRef(null);

	const { getComponentType, setComponentAttribute, unsetComponentAttribute } =
		useBlueprint();

	const { currentFocus } = useEditorFocus();
	const { clientId = null, context, attributeName } = currentFocus;

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
					[
						attributeName,
						{ type, description, suggestedValues = [] },
					],
					index,
				) => (
					<div key={index}>
						<h4>{attributeName}</h4>
						<p>{description}</p>

						{suggestedValues.length > 0 && (
							<>
								<h5>{"Suggested Values"}</h5>
								<div className="BlueprintContextualComponentHelp-suggestedValues">
									{suggestedValues.map(
										(attributeValue, index) => (
											<div
												key={index}
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
