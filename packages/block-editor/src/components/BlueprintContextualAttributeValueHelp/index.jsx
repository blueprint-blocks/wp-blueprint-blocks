import { useRef } from 'react'

import { getComponentProperties } from '../../functions'

import './style.css'

function BlueprintContextualAttributeValueHelp( {
	componentType = 'html',
	attributeName,
	attributeValue,
} ) {

	const ref = useRef( null )

	const componentProperties = getComponentProperties( componentType )

	return (
		<div ref={ ref } className="BlueprintContextualAttributeValueHelp">

		</div>
	)

}

export default BlueprintContextualAttributeValueHelp
