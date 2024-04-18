<?php
/**
 * Returns all registered block names.
 */
function blueprint_blocks_get_registered_block_names()
{
	if ( !did_action( 'init' ) ) {
		return null;
	}

	static $registered_block_names = null;

	if ( $registered_block_names === null ) {
		$registered_block_names = array_keys( \WP_Block_Type_Registry::get_instance()->get_all_registered() );

		$block_names = [];
		$block_types = blueprint_blocks_get_block_types();

		foreach ( $block_types as $block_type ) {
			$block_names[] = $block_type[ 'blockName' ];

			if ( false !== ( $index = array_search($block_type[ 'blockName' ], $registered_block_names ) ) ) {
				unset( $registered_block_names[ $index ] );
			}
		}

		$registered_block_names = [ ...$registered_block_names, ...$block_names ];
	}

	return $registered_block_names;
}
