<?php

namespace BlueprintBlocks;

class Admin
{
    /**
     * @access public
     * @return void
     */
    public function __construct()
    {
        add_filter( 'admin_body_class', array( &$this, 'admin_body_class' ) );
		add_action( 'admin_enqueue_scripts', array( &$this, 'admin_enqueue_scripts' ) );
        add_action( 'admin_enqueue_scripts', array( &$this, 'admin_enqueue_scripts_edit' ) );
        add_action( 'admin_enqueue_scripts', array( &$this, 'admin_enqueue_scripts_editor' ) );
		add_action( 'admin_menu', array( &$this, 'admin_menu' ) );
		add_action( 'admin_notices', array( &$this, 'admin_notices' ) );
        add_action( 'load-post.php', array( &$this, 'display_editor' ) );
        add_action( 'load-post-new.php', array( &$this, 'display_editor' ) );
        add_filter( 'manage_edit-blueprint-block_columns', array( &$this, 'manage_columns' ) );
		add_action( 'manage_posts_custom_column', array( &$this, 'manage_posts_custom_column' ), 10, 2 );
        add_filter( 'replace_editor', array( &$this, 'replace_editor' ), 10, 2 );
    }

    /**
     * Adds "blueprint_blocks" to the body class for styles.
     * @access public
     * @return void
     */
    public function admin_body_class( $classes )
    {
        $current_screen = get_current_screen();

		if (
			!( $current_screen->base === 'toplevel_page_blueprint-blocks-start' ) &&
			!( $current_screen->base === 'blocks_page_blueprint-blocks-settings' ) &&
			!( $current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' && ( $current_screen->base === 'edit' || $current_screen->base === 'post' || in_array( $current_screen->action, [ 'add', 'edit' ] ) ) )
		) {
            return;
        }

		$classes .= ' blueprint-blocks ';

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

        if (
			!( $current_screen->base === 'toplevel_page_blueprint-blocks-start' ) &&
			!( $current_screen->base === 'blocks_page_blueprint-blocks-settings' ) &&
			!( $current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' && ( $current_screen->base === 'edit' || $current_screen->base === 'post' || in_array( $current_screen->action, [ 'add', 'edit' ] ) ) )
		) {
            return;
        }

        wp_enqueue_style(
            'blueprint-blocks-main',
            blueprint_blocks()->url . '/dist/main.css',
            array(),
            blueprint_blocks()::VERSION
        );

        wp_enqueue_script(
            'blueprint-blocks-main',
            blueprint_blocks()->url . '/dist/main.js',
            array(),
            blueprint_blocks()::VERSION,
            true
        );
    }

	/**
     * Enqueues scripts and styles for the plugin.
     * @access public
     * @return void
     */
    public function admin_enqueue_scripts_edit()
    {
        $current_screen = get_current_screen();

        if ( !(
			$current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' &&
			$current_screen->base === 'edit'
		) ) {
            return;
        }

        wp_enqueue_style(
            'blueprint-blocks-block-preview',
            blueprint_blocks()->url . '/dist/block-preview.css',
            array(),
            blueprint_blocks()::VERSION
        );

        wp_enqueue_script(
            'blueprint-blocks-block-preview',
            blueprint_blocks()->url . '/dist/block-preview.js',
            array(
                'react',
                'react-dom',
                'wp-block-editor',
			),
            blueprint_blocks()::VERSION,
            true
        );
    }

    /**
     * Enqueues scripts and styles for the block editor.
     * @access public
     * @return void
     */
    public function admin_enqueue_scripts_editor()
    {
        $current_screen = get_current_screen();

        if ( !( $current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' && ( $current_screen->base === 'post' || in_array( $current_screen->action, [ 'add', 'edit' ] ) ) ) ) {
            return;
        }

        wp_enqueue_style(
            'blueprint-blocks-editor',
            blueprint_blocks()->url . '/dist/block-editor.css',
            array(),
            blueprint_blocks()::VERSION
        );

        wp_enqueue_script(
            'blueprint-blocks-editor',
            blueprint_blocks()->url . '/dist/block-editor.js',
            array(
                'lodash',
                'react',
                'react-dom',
                'wp-a11y',
                'wp-api-fetch',
                'wp-hooks',
                'wp-i18n',
            ),
            blueprint_blocks()::VERSION,
            true
        );

        $current_theme = wp_get_theme();

        $post_id = null;

        $block_blueprint = blueprint_blocks_get_json( 'data/blueprint.json' );
        $block_json = blueprint_blocks_get_json( 'data/block.json' );
        $block_editor_css = '';
        $block_view_css = '';

		$registered_block_names = blueprint_blocks_get_registered_block_names();

        if ( $current_screen->base === 'post' && $current_screen->action !== 'add' ) {
            $post_id = get_the_ID();
        }

        if ( $post_id !== null ) {
            if ( $meta_value = get_post_meta( $post_id, 'blueprint_blocks_blueprint_json', true ) ) {
                $block_blueprint = (object)$meta_value;
            }

            if ( $meta_value = get_post_meta( $post_id, 'blueprint_blocks_block_json', true ) ) {
                $block_json = (object)$meta_value;
            }

            if ( $meta_value = get_post_meta( $post_id, 'blueprint_blocks_editor_css', true ) ) {
                $block_editor_css = $meta_value;
            }

            if ( $meta_value = get_post_meta( $post_id, 'blueprint_blocks_view_css', true ) ) {
                $block_view_css = $meta_value;
            }

			// Remove the current block from the registered blocks list
			if ( false !== ( $index = array_search( $block_json->name, $registered_block_names ) ) ) {
				unset( $registered_block_names[ $index ] );
				$registered_block_names = array_values( $registered_block_names );
			}
        }

		$post_type = get_post_type_object( blueprint_blocks()::OBJECT_PREFIX . 'block' );

		$screen_title  = sprintf(
			__( '%1$s "{{ block.title }}"' ),
			$post_type->labels->edit_item
		);

		$admin_title = get_bloginfo( 'name' );
		$admin_title = sprintf( __( '%1$s ‹ %2$s — WordPress' ), $screen_title, $admin_title );

        wp_localize_script('blueprint-blocks-editor', 'blueprintBlocksEditorSettings', [
            'blockMetadata' => [
                'blockNamespace' => 'blueprint-blocks',
                'blockBlueprint' => $block_blueprint,
                'blockJson' => $block_json,
                'editorCss' => $block_editor_css,
                'viewCss' => $block_view_css,
            ],
			'editorMetadata' => [
				'blockCategories' => get_block_categories(null),
				'documentTitle' => $admin_title,
				'registeredBlocks' => $registered_block_names,
				'showUpsell' => true,
			],
            'postMetadata' => [
                'postId' => $post_id,
				'isNew' => ( $current_screen->action === 'add' ),
            ],
            'postType' => [
                'name' => blueprint_blocks()::OBJECT_PREFIX . 'block',
                'restBase' => blueprint_blocks()::OBJECT_PREFIX . 'blocks',
            ],
            'pluginMetadata' => [
                'url' => blueprint_blocks()->url,
            ],
            'themeMetadata' => [
                'themeName' => $current_theme ? $current_theme->get_stylesheet() : null,
                'cssVariables' => blueprint_blocks_get_css_variables(),
            ],
			'tutorialMetadata' => [
				'isActive' => ( $current_screen->action === 'add' ),
			],
        ]);
    }

    /**
     * Register post types for editing blocks and patterns.
     * @access public
     * @return void
     */
    public function admin_menu()
    {
        global $submenu;

        $slug = add_menu_page(
            __( 'Blueprint Blocks', blueprint_blocks()::TEXT_DOMAIN ),
            __( 'Blocks', blueprint_blocks()::TEXT_DOMAIN ),
            'manage_options',
            'blueprint-blocks-start',
            array(&$this, 'display_home_page'),
            'dashicons-editor-code',
            81
        );

        add_submenu_page(
            'blueprint-blocks-start',
            __( 'Blueprint Blocks', blueprint_blocks()::TEXT_DOMAIN ),
            __( 'Getting Started', blueprint_blocks()::TEXT_DOMAIN ),
            'manage_options',
            'blueprint-blocks-start',
            array( &$this, 'display_home_page' )
        );

        add_submenu_page(
            'blueprint-blocks-start',
            __( 'All Blocks', blueprint_blocks()::TEXT_DOMAIN ),
            __( 'All Blocks', blueprint_blocks()::TEXT_DOMAIN ),
            'manage_options',
            'edit.php?post_type=' . blueprint_blocks()::OBJECT_PREFIX . 'block'
        );

        add_submenu_page(
            'blueprint-blocks-start',
            __( 'Add New Block', blueprint_blocks()::TEXT_DOMAIN ),
            __( 'Add New Block', blueprint_blocks()::TEXT_DOMAIN ),
            'manage_options',
            'post-new.php?post_type=' . blueprint_blocks()::OBJECT_PREFIX . 'block'
        );

        add_submenu_page(
            'blueprint-blocks-start',
            __( 'Blueprint Blocks', blueprint_blocks()::TEXT_DOMAIN ),
            __( 'Settings', blueprint_blocks()::TEXT_DOMAIN ),
            'manage_options',
            'blueprint-blocks-settings',
            array( &$this, 'display_settings' )
        );
    }

	/**
     * Displays the nav menu.
     * @access public
     * @return void
     */
	public function admin_notices()
	{
		$current_screen = get_current_screen();

		if (
			!( $current_screen->base === 'toplevel_page_blueprint-blocks-start' ) &&
			!( $current_screen->base === 'blocks_page_blueprint-blocks-settings' ) &&
			!( $current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' && ( $current_screen->base === 'edit' || $current_screen->base === 'post' || in_array( $current_screen->action, [ 'add', 'edit' ] ) ) )
		) {
            return;
        }

		require_once blueprint_blocks()->path . '/templates/nav-menu.php';
	}

	/**
     * Displays the editor for blocks.
     * @access public
     * @return void
     */
    public function display_editor()
    {
		global $post_ID, $post_id, $post_type, $post_type_object, $post;

        $current_screen = get_current_screen();

        if (
			!($current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' && ($current_screen->base === 'post' || in_array($current_screen->action, ['add', 'edit'])))
		) {
            return;
        }

		$post = get_post( $_REQUEST[ 'post' ] ?? null );

		if ( isset( $_GET['post'] ) && isset( $_POST['post_ID'] ) && (int) $_GET['post'] !== (int) $_POST['post_ID'] ) {
			wp_die( __( 'A post ID mismatch has been detected.' ), __( 'Sorry, you are not allowed to edit this item.' ), 400 );
		} elseif ( isset( $_GET['post'] ) ) {
			$post_id = (int) $_GET['post'];
		} elseif ( isset( $_POST['post_ID'] ) ) {
			$post_id = (int) $_POST['post_ID'];
		} else {
			$post_id = 0;
		}
		$post_ID = $post_id;

		if ( $post_id ) {
			$post = get_post( $post_id );
		} else {
			$post    = get_default_post_to_edit( $current_screen->post_type ?: 'post', true );
			$post_id = $post->ID;
			$post_ID = $post->ID;
		}

		if ( $post ) {
			$post_type        = $post->post_type;
			$post_type_object = get_post_type_object( $post_type );
		}

		require_once ABSPATH . 'wp-admin/admin-header.php';

		echo '<div id="blueprint-blocks-editor"></div>', PHP_EOL;
    }

    /**
     * Register post types for editing blocks and patterns.
     * @access public
     * @return void
     */
    public function display_home_page()
    {
        require_once blueprint_blocks()->path . '/templates/getting-started.php';
    }

    /**
     * Register post types for editing blocks and patterns.
     * @access public
     * @return void
     */
    public function display_settings()
    {
        require_once blueprint_blocks()->path . '/templates/settings.php';
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

    /**
     * Replace the editor.
     * @access public
     * @return void
     */
    public function replace_editor( bool $replace_editor, \WP_Post $post )
    {
        if ($post->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block') {
            return true;
        }

        return $replace_editor;
    }
}
