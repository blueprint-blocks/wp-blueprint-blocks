<?php
/**
 * Returns a single block type saved to the database.
 */
function blueprint_blocks_get_block_type( $block_name )
{
	$block_types = blueprint_blocks_get_block_types();

	if ( isset( $block_types[ $block_name ] ) ) {
		return $block_types[ $block_name ];
	}

	return null;
}
