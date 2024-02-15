<?php
/**
 * Returns json from a file path.
 */
function blueprint_blocks_get_json( $path )
{
	$path = blueprint_blocks()->path . $path;

    if ( file_exists( $path ) && ( $content = file_get_contents( $path ) ) ) {
        try {
            $json = json_decode( $content );
            return $json;
        } catch ( \Exception $e ) {
            return null;
        }
    }

    return null;
}
