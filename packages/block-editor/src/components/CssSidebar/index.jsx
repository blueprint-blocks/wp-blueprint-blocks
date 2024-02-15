const {
	cssVariables = {},
} = ( blueprintBlocksEditorSettings?.themeMetadata || {} )

const VARIABLE_GROUPS = [
	{
		key: 'color',
		label: 'Colors',
	},
	{
		key: 'gradient',
		label: 'Gradients',
	},
	{
		key: 'font-size',
		label: 'Font Sizes',
	},
	{
		key: 'font-family',
		label: 'Font Families',
	},
	{
		key: 'spacing',
		label: 'Spacing',
	},
	{
		key: 'shadow',
		label: 'Shadows',
	},
]

import './style.css'

function CssSidebar( {
	...props
} ) {

	return (
		<div className="CssSidebar">
			<div>

				<div className="CssSidebar-heading">
					<h3>{ 'CSS Variables' }</h3>
					<p>{ 'These CSS variables are available to use via the active theme.' }</p>
				</div>

				{ VARIABLE_GROUPS.map( ( group, index ) => (
					<div key={ index }>
						<div className="CssSidebar-label">
							<h4>{ group.label }</h4>
						</div>
						<div className="CssSidebar-propertyList">
							{ Object.entries( cssVariables?.[ group.key ] || {} ).map( ( [ key, { name, value } ] ) => (
								<div
									key={ key }
									className={ [
										'CssSidebar-property',
										[ 'color', 'gradient' ].includes( group.key ) && 'has-preview' || ''
									].join( ' ' ) }
									onClick={ () => props?.onInsertVariable( name ) }
								>
									<div className="CssSidebar-propertyName">{ key }</div>
									<div className="CssSidebar-propertyValue">{ value }</div>
									{ [ 'color', 'gradient' ].includes( group.key ) && (
										<div
											className="CssSidebar-propertyPreview"
											style={ ( value && {
												'--property-value': value,
											} ) }
										/>
									) }
								</div>
							) ) }
						</div>
					</div>
				) ) }

			</div>
		</div>
	)

}

export default CssSidebar
