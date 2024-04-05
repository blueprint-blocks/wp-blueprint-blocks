const { cssVariables = {} } =
	blueprintBlocksEditorSettings?.themeMetadata || {};

const VARIABLE_GROUPS = [
	{
		key: "colors",
		label: "Colors",
	},
	{
		key: "gradients",
		label: "Gradients",
	},
	{
		key: "fontSizes",
		label: "Font Sizes",
	},
	{
		key: "fontFamilies",
		label: "Font Families",
	},
	{
		key: "spacing",
		label: "Spacing",
	},
	{
		key: "shadows",
		label: "Shadows",
	},
];

console.log(cssVariables);

import "./style.css";

function CssSidebar({ ...props }) {
	return (
		<div className="CssSidebar">
			<div>
				<div className="CssSidebar-heading">
					<h3>{"CSS Variables"}</h3>
					<p>
						{
							"These CSS variables are available to use via the active theme."
						}
					</p>
				</div>

				{VARIABLE_GROUPS.map(
					(group, index) =>
						(cssVariables?.[group.key] || []).length > 0 && (
							<div key={index}>
								<div className="CssSidebar-label">
									<h4>{group.label}</h4>
								</div>
								<div className="CssSidebar-propertyList">
									{(cssVariables?.[group.key] || []).map(
										(
											{ name, slug, value, variable },
											index,
										) => (
											<div
												key={index}
												className={[
													"CssSidebar-property",
													([
														"colors",
														"gradients",
													].includes(group.key) &&
														"has-preview") ||
														"",
												].join(" ")}
												onClick={() =>
													props?.onInsertVariable(
														name,
													)
												}
											>
												<div className="CssSidebar-propertyName">
													{name}
												</div>
												<div className="CssSidebar-propertyValue">
													{value}
												</div>
												{[
													"colors",
													"gradients",
												].includes(group.key) && (
													<div
														className="CssSidebar-propertyPreview"
														style={
															value && {
																"--property-value":
																	value,
															}
														}
													/>
												)}
											</div>
										),
									)}
								</div>
							</div>
						),
				)}
			</div>
		</div>
	);
}

export default CssSidebar;
