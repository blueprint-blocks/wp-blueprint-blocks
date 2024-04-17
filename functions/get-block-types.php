<?php
/**
 * Returns all block types saved to the database.
 */
function blueprint_blocks_get_block_types()
{
	static $block_types = null;

	if ( $block_types === null ) {
		$block_types = [];

		$query = new \WP_Query( [
			'post_type' => blueprint_blocks()::OBJECT_PREFIX . 'block',
			'post_status' => 'publish',
			'posts_per_page' => -1,
		] );

		foreach ( $query->posts as $post ) {
			$block_json = (array)get_post_meta( $post->ID, 'blueprint_blocks_block_json', true );
			$block_blueprint = (array)get_post_meta( $post->ID, 'blueprint_blocks_blueprint_json', true );
			$block_editor_css = (string)get_post_meta( $post->ID, 'blueprint_blocks_editor_css', true );
			$block_view_css = (string)get_post_meta( $post->ID, 'blueprint_blocks_view_css', true );

			if ( $block_json && isset( $block_json[ 'name' ] ) && $block_json[ 'name' ] ) {
				$block_types[] = [
					'blockName' => $block_json[ 'name' ],
					'blockJson' => $block_json,
					'blockBlueprint' => $block_blueprint ?: null,
					'editorCss' => $block_editor_css,
					'viewCss' => $block_view_css,
				];
			}
		}
	}

	return $block_types;
}
