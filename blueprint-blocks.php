<?php
/*
Plugin Name: Blueprint Blocks
Plugin URI: http://www.blueprint-blocks.com/
Description: Construct blocks
Version: 24.1.0
Author: Flickerbox
Author URI: http://www.flickerbox.com
Text Domain: blueprint-blocks
*/

require __DIR__ . '/classes/class-admin.php';
require __DIR__ . '/classes/class-block-types.php';
require __DIR__ . '/classes/class-core.php';
require __DIR__ . '/classes/class-post-types.php';
require __DIR__ . '/classes/class-stylesheet-loader.php';

require __DIR__ . '/functions/activate.php';
require __DIR__ . '/functions/blueprint-blocks.php';
require __DIR__ . '/functions/deactivate.php';
require __DIR__ . '/functions/get-block-type.php';
require __DIR__ . '/functions/get-block-types.php';
require __DIR__ . '/functions/get-css-variables.php';
require __DIR__ . '/functions/get-global-settings-value.php';
require __DIR__ . '/functions/get-json.php';
require __DIR__ . '/functions/get-registered-block-names.php';

register_activation_hook( __FILE__, 'blueprint_blocks_activate' );
register_deactivation_hook( __FILE__, 'blueprint_blocks_deactivate' );

blueprint_blocks();
