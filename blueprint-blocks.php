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

require __DIR__ . '/functions/blueprint-blocks.php';
require __DIR__ . '/functions/get-block-types.php';
require __DIR__ . '/functions/get-css-variables.php';
require __DIR__ . '/functions/get-global-settings-value.php';
require __DIR__ . '/functions/get-json.php';

blueprint_blocks();
