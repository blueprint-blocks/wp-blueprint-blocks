function BlueprintColumn( {
	label,
	children,
} ) {

	return (
		<div className="BlueprintEditor-column">
			<div className="BlueprintEditor-label">
				{ label }
			</div>
			{ children }
		</div>
	)

}

export default BlueprintColumn
