<?php
namespace BlueprintBlocks;

class StylesheetLoader
{
    /**
     * @access public
     * @return void
     */
    public function __construct()
    {
		add_action('init', array( &$this, 'init' ) );
		add_filter('query_vars', array( &$this, 'query_vars' ) );
		add_filter('template_include', array( &$this, 'template_include' ) );
	}

	/**
	 * Adds rewrite rules for style enqueue paths.
     * @access public
     * @return void
     */
    public function init()
    {
		add_rewrite_rule(
			blueprint_blocks()->public_path . '/block-styles/([a-z0-9-]+)/([a-z0-9-]+)/main\.css?$',
			'index.php?blueprint_blocks_block_stylesheet=main.css&blueprint_blocks_block_namespace=$matches[1]&blueprint_blocks_block_name=$matches[2]',
			'top'
		);

		add_rewrite_rule(
			blueprint_blocks()->public_path . '/block-styles/([a-z0-9-]+)/([a-z0-9-]+)/editor\.css?$',
			'index.php?blueprint_blocks_block_stylesheet=editor.css&blueprint_blocks_block_namespace=$matches[1]&blueprint_blocks_block_name=$matches[2]',
			'top'
		);
	}

	/**
	 * Adds query vars for use in the rewrite rules.
     * @access public
     * @return void
     */
    public function query_vars( $query_vars )
    {
		$query_vars[] = 'blueprint_blocks_block_name';
		$query_vars[] = 'blueprint_blocks_block_namespace';
		$query_vars[] = 'blueprint_blocks_block_stylesheet';
		return $query_vars;
	}

	function template_include( $template ) {
		if ( get_query_var( 'blueprint_blocks_block_stylesheet' ) === 'main.css' ) {
			$block_name = get_query_var( 'blueprint_blocks_block_namespace' ) . '/' . get_query_var( 'blueprint_blocks_block_name' );
			$block_type = blueprint_blocks_get_block_type( $block_name );

			if ( $block_type !== null ) {
				header( 'Content-type: text/css; charset: UTF-8' );
				echo $block_type[ 'viewCss' ];
				exit;
			}
		}

		if ( get_query_var( 'blueprint_blocks_block_stylesheet' ) === 'editor.css' ) {
			$block_name = get_query_var( 'blueprint_blocks_block_namespace' ) . '/' . get_query_var( 'blueprint_blocks_block_name' );
			$block_type = blueprint_blocks_get_block_type( $block_name );

			if ( $block_type !== null ) {
				header( 'Content-type: text/css; charset: UTF-8' );
				echo $block_type[ 'editorCss' ];
				exit;
			}
		}

		return $template;
	}
}
