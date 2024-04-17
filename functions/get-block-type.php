<?php
/**
 * Returns a single block type saved to the database.
 */
function blueprint_blocks_get_block_type( $block_name )
{
	$block_types = blueprint_blocks_get_block_types();

	foreach ( $block_types as $block_type ) {
		if ( $block_type[ 'blockName' ] === $block_name ) {
			return $block_type;
		}
	}

	return null;
}
