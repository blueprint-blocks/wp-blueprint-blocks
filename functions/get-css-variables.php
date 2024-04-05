<?php
/**
 * Returns all css variables defined by theme.json.
 */
function blueprint_blocks_get_css_variables()
{
	static $css_variables = null;

	if ( $css_variables === null ) {
		$css_variables = [
			'colors' => [],
			'fontFamilies' => [],
			'fontSizes' => [],
			'gradients' => [],
			'shadows' => [],
			'spacing' => [],
		];

		$theme_json = \WP_Theme_JSON_Resolver::get_merged_data( 'theme' );
		$theme_css = $theme_json->get_stylesheet( [ 'variables' ] );

		foreach ( blueprint_blocks_get_global_settings_value( [ 'color', 'palette' ] ) as $origin => $palette ) {
			if ( $origin === 'default' && blueprint_blocks_get_global_settings_value( [ 'color', 'defaultPalette' ] ) === false ) {
				continue;
			}

			foreach ( $palette as $color ) {
				preg_match( sprintf( '/(--wp--preset--color--%s): (.*?);/', $color[ 'slug' ] ), $theme_css, $match );

				$css_variables[ 'colors' ][ $color[ 'slug' ] ] = [
					'name' => $color[ 'name' ] ?? $color[ 'slug' ],
					'slug' => $color[ 'slug' ],
					'value' => !empty( $match ) ? $match[ 2 ] : $color[ 'color' ],
					'variable' => sprintf( '--wp--preset--color--%s', $color[ 'slug' ] ),
				];
			}
		}

		foreach ( blueprint_blocks_get_global_settings_value( [ 'typography', 'fontFamilies' ] ) as $origin => $fontFamilies ) {
			foreach ( $fontFamilies as $fontFamily ) {
				preg_match( sprintf( '/(--wp--preset--font-family--%s): (.*?);/', $fontFamily[ 'slug' ] ), $theme_css, $match );

				$css_variables[ 'fontFamilies' ][ $fontFamily[ 'slug' ] ] = [
					'name' => $fontFamily[ 'name' ] ?? $fontFamily[ 'slug' ],
					'slug' => $fontFamily[ 'slug' ],
					'value' => !empty( $match ) ? $match[ 2 ] : $fontFamily[ 'fontFamily' ],
					'variable' => sprintf( '--wp--preset--font-family--%s', $fontFamily[ 'slug' ] ),
				];
			}
		}

		foreach ( blueprint_blocks_get_global_settings_value( [ 'typography', 'fontSizes' ] ) as $origin => $fontSizes ) {
			foreach ( $fontSizes as $fontSize ) {
				preg_match( sprintf( '/(--wp--preset--font-size--%s): (.*?);/', $fontSize[ 'slug' ] ), $theme_css, $match );

				$css_variables[ 'fontSizes' ][ $fontSize[ 'slug' ] ] = [
					'name' => $fontSize[ 'name' ] ?? $fontSize[ 'slug' ],
					'slug' => $fontSize[ 'slug' ],
					'value' => !empty( $match ) ? $match[ 2 ] : $fontSize[ 'size' ],
					'variable' => sprintf( '--wp--preset--font-size--%s', $fontSize[ 'slug' ] ),
				];
			}
		}

		foreach ( blueprint_blocks_get_global_settings_value( [ 'color', 'gradients' ] ) as $origin => $gradients ) {
			if ( $origin === 'default' && blueprint_blocks_get_global_settings_value( [ 'color', 'defaultGradients' ] ) === false ) {
				continue;
			}

			foreach ( $gradients as $gradient ) {
				preg_match( sprintf( '/(--wp--preset--gradient--%s): (.*?);/', $gradient[ 'slug' ] ), $theme_css, $match );

				$css_variables[ 'gradients' ][ $gradient[ 'slug' ] ] = [
					'name' => $gradient[ 'name' ] ?? $gradient[ 'slug' ],
					'slug' => $gradient[ 'slug' ],
					'value' => !empty( $match ) ? $match[ 2 ] : $gradient[ 'gradient' ],
					'variable' => sprintf( '--wp--preset--gradient--%s', $gradient[ 'slug' ] ),
				];
			}
		}

		foreach ( blueprint_blocks_get_global_settings_value( [ 'shadow', 'presets' ] ) as $origin => $shadows ) {
			if ( $origin === 'default' && blueprint_blocks_get_global_settings_value( [ 'shadow', 'defaultPresets' ] ) === false ) {
				continue;
			}

			foreach ( $shadows as $shadow ) {
				preg_match( sprintf( '/(--wp--preset--shadow--%s): (.*?);/', $shadow[ 'slug' ] ), $theme_css, $match );

				$css_variables[ 'shadows' ][ $shadow[ 'slug' ] ] = [
					'name' => $shadow[ 'name' ] ?? $shadow[ 'slug' ],
					'slug' => $shadow[ 'slug' ],
					'value' => !empty( $match ) ? $match[ 2 ] : $shadow[ 'shadow' ],
					'variable' => sprintf( '--wp--preset--shadow--%s', $shadow[ 'slug' ] ),
				];
			}
		}

		foreach ( blueprint_blocks_get_global_settings_value( [ 'spacing', 'spacingSizes' ] ) as $origin => $spacingSizes ) {
			foreach ( $spacingSizes as $spacingSize ) {
				preg_match( sprintf( '/(--wp--preset--spacing--%s): (.*?);/', $spacingSize[ 'slug' ] ), $theme_css, $match );

				$css_variables[ 'spacing' ][ $spacingSize[ 'slug' ] ] = [
					'name' => $spacingSize[ 'name' ] ?? $spacingSize[ 'slug' ],
					'slug' => $spacingSize[ 'slug' ],
					'value' => !empty( $match ) ? $match[ 2 ] : $spacingSize[ 'size' ],
					'variable' => sprintf( '--wp--preset--spacing--%s', $spacingSize[ 'slug' ] ),
				];
			}
		}

		$css_variables[ 'colors' ] = array_values( $css_variables[ 'colors' ] );
		$css_variables[ 'fontFamilies' ] = array_values( $css_variables[ 'fontFamilies' ] );
		$css_variables[ 'fontSizes' ] = array_values( $css_variables[ 'fontSizes' ] );
		$css_variables[ 'gradients' ] = array_values( $css_variables[ 'gradients' ] );
		$css_variables[ 'shadows' ] = array_values( $css_variables[ 'shadows' ] );
		$css_variables[ 'spacing' ] = array_values( $css_variables[ 'spacing' ] );
	}

	return $css_variables;
}
