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
        add_action('admin_enqueue_scripts', array(&$this, 'admin_enqueue_scripts'));
        add_action('admin_menu', array(&$this, 'admin_menu'));
    }

    /**
     * Register post types for editing blocks and patterns.
     * @access public
     * @return void
     */
    public function admin_enqueue_scripts()
    {
        $current_screen = get_current_screen();

        if (!($current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' && ($current_screen->base === 'post' || in_array($current_screen->action, ['add', 'edit'])))) {
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

        $block_blueprint = blueprint_blocks_get_json('data/blueprint.json');
        $block_json = blueprint_blocks_get_json('data/block.json');
        $block_editor_css = '';
        $block_view_css = '';

        if ($current_screen->base === 'post') {
            $post_id = get_the_ID();
        }

        if ($post_id !== null) {
            if ($meta_value = get_post_meta($post_id, 'blueprint_blocks_blueprint_json', true)) {
                $block_blueprint = (object)$meta_value;
            }

            if ($meta_value = get_post_meta($post_id, 'blueprint_blocks_block_json', true)) {
                $block_json = (object)$meta_value;
            }

            if ($meta_value = get_post_meta($post_id, 'blueprint_blocks_editor_css', true)) {
                $block_editor_css = $meta_value;
            }

            if ($meta_value = get_post_meta($post_id, 'blueprint_blocks_view_css', true)) {
                $block_view_css = $meta_value;
            }
        }

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
			],
            'postMetadata' => [
                'postId' => $post_id,
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
            __('Blueprint Blocks', blueprint_blocks()::TEXT_DOMAIN),
            __('Blocks', blueprint_blocks()::TEXT_DOMAIN),
            'manage_options',
            'blueprint_blocks_start',
            array(&$this, 'display_home_page'),
            'dashicons-editor-code',
            81
        );

        add_submenu_page(
            'blueprint_blocks_start',
            __('Blueprint Blocks', blueprint_blocks()::TEXT_DOMAIN),
            __('Get Started', blueprint_blocks()::TEXT_DOMAIN),
            'manage_options',
            'blueprint_blocks_start',
            array(&$this, 'display_home_page')
        );

        add_submenu_page(
            'blueprint_blocks_start',
            __('All Blocks', blueprint_blocks()::TEXT_DOMAIN),
            __('All Blocks', blueprint_blocks()::TEXT_DOMAIN),
            'manage_options',
            'edit.php?post_type=' . blueprint_blocks()::OBJECT_PREFIX . 'block'
        );

        add_submenu_page(
            'blueprint_blocks_start',
            __('Add New Block', blueprint_blocks()::TEXT_DOMAIN),
            __('Add New Block', blueprint_blocks()::TEXT_DOMAIN),
            'manage_options',
            'post-new.php?post_type=' . blueprint_blocks()::OBJECT_PREFIX . 'block'
        );
    }

    /**
     * Register post types for editing blocks and patterns.
     * @access public
     * @return void
     */
    public function display_home_page()
    {
        include blueprint_blocks()->path . '/templates/getting-started.php';
    }

    /**
     * Register post types for editing blocks.
     * @access public
     * @return void
     */
    public function replace_editor(bool $replace_editor, \WP_Post $post)
    {
        if ($post->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block') {
            return true;
        }

        return $replace_editor;
    }
}
