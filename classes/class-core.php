<?php
namespace BlueprintBlocks;

class Core
{
	const VERSION = '23.2.0';
	const TEXT_DOMAIN = 'blueprint-blocks';
    const REST_NAMESPACE = 'blueprint-blocks/v2';
    const OBJECT_PREFIX = 'blueprint_';

	public $path;
	public $public_path;
	public $url;

    /**
     * @access public
     * @return void
     */
    public function __construct()
    {
		$this->path = plugin_dir_path( dirname( __FILE__ ) );
		$this->url = rtrim(plugin_dir_url( dirname( __FILE__ ) ), '/' );

		$base_url = rtrim( site_url(), '/' )  . '/';
		$this->public_path = substr( rtrim( $this->url, '/' ), strlen( $base_url ) );

		new \BlueprintBlocks\Admin();
		new \BlueprintBlocks\BlockTypes();
		new \BlueprintBlocks\PostTypes();
		new \BlueprintBlocks\StylesheetLoader();
	}
}
