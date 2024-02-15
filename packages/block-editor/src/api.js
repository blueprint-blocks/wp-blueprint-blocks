import apiFetch from '@wordpress/api-fetch'

function saveNewBlock( {
	postType,
	blockJson,
	blockBlueprint,
	blockEditorCss,
	blockViewCss,
} ) {
	return new Promise( ( resolve, reject ) => {
		apiFetch( {
			path: `/wp/v2/${ postType.restBase }`,
			method: 'POST',
			data: {
				title: blockJson.title,
				status: 'publish',
				meta: {
					'blueprint_blocks_block_json': blockJson,
					'blueprint_blocks_blueprint_json': blockBlueprint,
					'blueprint_blocks_editor_css': blockEditorCss,
					'blueprint_blocks_view_css': blockViewCss,
				}
			},
		} ).then( ( { id, ...post } ) => {
			resolve( { id } );
		} )
	} )
}

function updateBlock( {
	postId,
	postType,
	blockJson,
	blockBlueprint,
	blockEditorCss,
	blockViewCss,
} ) {
	return new Promise( ( resolve, reject ) => {
		apiFetch( {
			path: `/wp/v2/${ postType.restBase }/${ postId }`,
			method: 'POST',
			data: {
				title: blockJson.title,
				status: 'publish',
				meta: {
					'blueprint_blocks_block_json': blockJson,
					'blueprint_blocks_blueprint_json': blockBlueprint,
					'blueprint_blocks_editor_css': blockEditorCss,
					'blueprint_blocks_view_css': blockViewCss,
				}
			},
		} ).then( ( { id, ...post } ) => {
			resolve( { id } );
		} )
	} )
}

export {
	saveNewBlock,
	updateBlock,
}
