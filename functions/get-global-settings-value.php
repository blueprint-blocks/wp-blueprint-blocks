<?php
/**
 * Returns a value from the global settings.
 */
function blueprint_blocks_get_global_settings_value( array $path = null )
{
	if ( $path === null ) {
		return;
	}

	$settings = wp_get_global_settings();

	foreach ( $path as $key ) {
		if ( !isset( $settings[ $key ] ) ) {
			return;
		}

		$settings = $settings[ $key ];
	}

	return $settings;
}
