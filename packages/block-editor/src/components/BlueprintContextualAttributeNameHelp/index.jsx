import { useRef } from 'react'

import { getComponentProperties } from '../../functions'

import './style.css'

function BlueprintContextualAttributeNameHelp( {
	componentType = 'html',
	attributeName,
	onClickSuggestedValue,
} ) {

	const ref = useRef( null )

	const componentProperties = getComponentProperties( componentType )

	const componentAttributes = Object.entries( componentProperties?.attributes || {} ).filter( ( [ key, _ ] ) => (
		key.indexOf( attributeName ) !== -1
	) )

	return (
		<div ref={ ref } className="BlueprintContextualAttributeNameHelp">

			<div className="BlueprintContextualAttributeNameHelp-heading">
				<h3>{ componentProperties?.label || '' }</h3>

				{ componentProperties?.description && (
					<p>{ componentProperties?.description || '' }</p>
				) }
			</div>

			{ componentAttributes.map( ( [ attributeName, { type, description, suggestedValues = [] } ], index ) => (
				<div key={ index }>
					<h4>{ attributeName }</h4>
					<p>{ description }</p>

					{ suggestedValues.length > 0 && (
						<>
							<h5>{ 'Suggested Values' }</h5>
							<div className="BlueprintContextualAttributeNameHelp-suggestedValues">
								{ suggestedValues.map( ( value, index ) => (
									<div
										key={ index }
										onClick={ () => onClickSuggestedValue && onClickSuggestedValue( {
											attribute: attributeName,
											value
										} ) }
									>
										<span>{ value }</span>
									</div>
								) ) }
							</div>
						</>
					) }
				</div>
			) ) }

		</div>
	)

}

export default BlueprintContextualAttributeNameHelp
