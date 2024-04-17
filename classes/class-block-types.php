<?php
namespace BlueprintBlocks;

class BlockTypes
{
    /**
     * @access public
     * @return void
     */
    public function __construct()
    {
		add_action( 'admin_enqueue_scripts', array( &$this, 'admin_enqueue_scripts' ) );
		add_action( 'enqueue_block_editor_assets', array( &$this, 'enqueue_block_editor_assets' ) );
		add_action( 'init', array( &$this, 'register_block_types' ) );
	}

	/**
	 * Register post types for editing blocks and patterns.
     * @access public
     * @return void
     */
    public function admin_enqueue_scripts()
    {
		$current_screen = get_current_screen();

		if ( ! ( $current_screen->base === 'post' || in_array( $current_screen->action, [ 'add', 'edit' ] ) ) ) {
			return;
		}

		wp_enqueue_script(
			'blueprint-blocks-loader',
			blueprint_blocks()->url . '/dist/block-loader.js',
			array(
				'wp-blocks',
				'wp-block-editor',
				'wp-components',
				'wp-element',
				'wp-hooks',
				'wp-i18n',
			),
			blueprint_blocks()::VERSION,
			true
		);

		wp_localize_script( 'blueprint-blocks-loader', 'blueprintBlocksLoaderSettings', [
			'blockTypes' => blueprint_blocks_get_block_types(),
		] );
	}

	/**
	 * Register block types for use in the editor.
     * @access public
     * @return void
     */
	public function register_block_types()
	{
		foreach ( blueprint_blocks_get_block_types() as $block_type ) {

			$block_handle = str_replace( '/', '-', $block_type[ 'blockName' ] );

			wp_register_style(
				$block_handle . '-style',
				blueprint_blocks()->url . '/block-styles/' . $block_type[ 'blockName' ] . '/main.css/',
				[],
				$block_type[ 'blockJson' ]['version'] ?? null
			);

			register_block_type( $block_type[ 'blockName' ], array_merge( $block_type[ 'blockJson' ] ?? [], [
				'style' => $block_handle . '-style',
				'editor_style' => $block_handle . '-editor-style',
			] ) );

		}
	}

	/**
	 * Enqueue block styles for the editor.
     * @access public
     * @return void
     */
	public function enqueue_block_editor_assets()
	{
		foreach ( blueprint_blocks_get_block_types() as $block_type ) {

			$block_handle = str_replace( '/', '-', $block_type[ 'blockName' ] );
			wp_add_inline_style( $block_handle . '-style', $block_type[ 'editorCss' ] );

		}
	}
}
