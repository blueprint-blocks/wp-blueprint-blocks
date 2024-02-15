const removeAtPosition = ( { componentList = [], position = [] } ) => {

	let index = ( Array.isArray( position ) && position || [ position ] )?.[ 0 ]

	if ( componentList?.length > 0 && componentList?.length < index ) {
		return componentList
	}

	if ( position.length > 1 ) {
		componentList[ index ][ 1 ] = removeAtPosition( {
			componentList: ( componentList[ index ][ 1 ] || [] ),
			position: position.slice( 1 ),
		} )

		return componentList
	}

	return [
		...componentList.slice( 0, index ),
		...componentList.slice( index + 1 )
	]

}

export default removeAtPosition
