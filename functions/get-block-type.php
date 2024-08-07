<?php
/**
 * Returns a single block type saved to the database.
 */
function blueprint_blocks_get_block_type( $block_identifier )
{
	$block_types = blueprint_blocks_get_block_types();

	foreach ( $block_types as $block_type ) {
		if ( $block_type[ 'postId' ] === $block_identifier || $block_type[ 'blockName' ] === $block_identifier ) {
			return $block_type;
		}
	}

	return null;
}
