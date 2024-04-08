import { memo, useMemo, useRef } from "react";

import { attributeProperties } from "../../data";
import { useBlockJson, useEditorFocus } from "../../hooks";

import "./style.css";

const BlueprintContextualAttributeHelp = memo(() => {
	const ref = useRef(null);

	const { currentFocus } = useEditorFocus();
	const { clientId = null } = currentFocus;

	const { editAttribute, getAttributeById, renameAttribute } = useBlockJson();
	const { name: attributeName } = getAttributeById(clientId) || {};

	const onClickSuggestedValue = ({ propertyName, propertyValue }) => {
		if (propertyName === "name") {
			renameAttribute(attributeName, propertyValue);
		} else {
			editAttribute(attributeName, {
				[propertyName]: propertyValue,
			});
		}
	};

	return (
		<div ref={ref} className="BlueprintContextualAttributeHelp">
			<div className="BlueprintContextualAttributeHelp-heading">
				<h3>Block Attributes</h3>
				<p>
					Block attributes store information about the block. For
					example, a title, metadata about an image, or attributes of
					a link. When connected to a component, data from the
					connected component will be stored in the attribute.
				</p>
			</div>

			{attributeProperties.map(
				(
					{ propertyName, label, description, suggestedValues = [] },
					index,
				) => (
					<div key={index}>
						<h4>{label}</h4>
						<p>{description}</p>

						{suggestedValues.length > 0 && (
							<>
								<h5>{"Suggested Values"}</h5>
								<div className="BlueprintContextualAttributeHelp-suggestedValues">
									{suggestedValues.map(
										(propertyValue, index) => (
											<div
												key={index}
												onClick={() =>
													onClickSuggestedValue({
														propertyName,
														propertyValue,
													})
												}
											>
												<span>{propertyValue}</span>
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

export default BlueprintContextualAttributeHelp;
