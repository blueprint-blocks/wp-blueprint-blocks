<?php
/**
 * Returns all css variables defined by theme.json.
 */
function blueprint_blocks_get_css_variables()
{
	static $css_variables = null;

	if ( $css_variables === null ) {
		$css_variables = [];

		$theme_json = \WP_Theme_JSON_Resolver::get_merged_data();
		$theme_css = $theme_json->get_stylesheet( [ 'variables' ] );

		preg_match_all( '/(--wp--preset--(.+?)--(.+?)): (.*?);/', $theme_css, $theme_css_variable_matches );

		foreach ( $theme_css_variable_matches[ 1 ] as $index => $variable_name ) {
			$variable_type = $theme_css_variable_matches[ 2 ][ $index ];
			$variable_key = $theme_css_variable_matches[ 3 ][ $index ];
			$variable_value = $theme_css_variable_matches[ 4 ][ $index ];

			if ( !isset( $css_variables[ $variable_type ] ) ) {
				$css_variables[ $variable_type ] = [];
			}

			$css_variables[ $variable_type ][ $variable_key ] = [
				'name' => $variable_name,
				'value' => $variable_value,
			];
		}
	}

	return $css_variables;
}
