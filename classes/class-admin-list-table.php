<?php

namespace BlueprintBlocks;

class AdminListTable
{
    /**
     * @access public
     * @return void
     */
    public function __construct()
    {
        add_filter( 'admin_body_class', array( &$this, 'admin_body_class' ) );
		add_action( 'admin_enqueue_scripts', array( &$this, 'admin_enqueue_scripts' ) );
		add_action( 'admin_notices', array( &$this, 'admin_notices' ) );
        add_filter( 'manage_edit-blueprint-block_columns', array( &$this, 'manage_columns' ) );
		add_action( 'manage_posts_custom_column', array( &$this, 'manage_posts_custom_column' ), 10, 2 );
    }

    /**
     * Adds "blueprint_blocks" to the body class for styles.
     * @access public
     * @return void
     */
    public function admin_body_class( $classes )
    {
        $current_screen = get_current_screen();

		if ( ! (
			$current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' &&
			$current_screen->base === 'edit'
		) ) {
            return $classes;
        }

		$block_types = blueprint_blocks_get_block_types();

		if ( count( $block_types ) === 0 && get_query_var( 'post_status' ) === '' ) {
			$classes .= ' blueprint-blocks-no-block-types ';
		}

		return $classes;
    }

	/**
     * Enqueues scripts and styles for the plugin.
     * @access public
     * @return void
     */
    public function admin_enqueue_scripts()
    {
		$current_screen = get_current_screen();

		if ( ! (
			$current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' &&
			$current_screen->base === 'edit'
		) ) {
            return;
        }

		$this->load_editor();

        wp_enqueue_style( 'blueprint-blocks-block-preview' );
        wp_enqueue_script( 'blueprint-blocks-block-preview' );
    }

	/**
     * Output a hidden div for the editor.
     * @access public
     * @return void
     */
    public function admin_notices()
    {
		$current_screen = get_current_screen();

		if ( ! (
			$current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' &&
			$current_screen->base === 'edit'
		) ) {
            return;
        }

		echo '<div id="editor" style="display: none;"></div>';
    }

	/**
     * Loads the editor in the background.
     * @access public
     * @return void
     */
    public function load_editor()
    {
		ob_start();
		include ABSPATH . 'wp-admin/edit-form-blocks.php';
		ob_get_clean();

		wp_dequeue_style( 'wp-edit-post' );
    }

	/**
     * Add a column for block preview.
     * @access public
     * @return void
     */
	public function manage_columns( array $columns = array() ) {
		return array_merge(
			array( 'block_preview' => 'Preview' ),
			$columns
		);
	}

	/**
     * Add a column for block preview.
     * @access public
     * @return void
     */
	public function manage_posts_custom_column( string $column_name, int $post_id ) {
		if ( $column_name === 'block_preview' && ( $block_type = blueprint_blocks_get_block_type( $post_id ) ) ) {
			printf( '<div class="blueprint-blocks-block-preview" data-block-name="%s"></div>', $block_type[ 'blockName' ] );
		}
	}
}
