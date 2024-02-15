const getAtPosition = ( { componentList = [], position = [] } ) => {

	let index = ( Array.isArray( position ) && position || [ position ] )?.[ 0 ]

	if ( componentList?.length > 0 && componentList?.length < index ) {
		return null
	}

	if ( position.length > 1 ) {
		return getAtPosition( {
			componentList: ( componentList[ index ][ 1 ] || [] ),
			position: position.slice( 1 ),
		} )
	}

	return componentList[ index ]

}

export default getAtPosition
