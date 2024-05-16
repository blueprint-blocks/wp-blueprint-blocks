<?php
namespace BlueprintBlocks;

class PostTypes
{
    /**
     * @access public
     * @return void
     */
    public function __construct()
    {
		add_action('init', array( &$this, 'register_post_types' ) );
		add_action('rest_api_init', array( &$this, 'register_post_type_meta' ) );
	}

	/**
	 * Returns the not found template for edit.php.
     * @access public
     * @return void
     */
    public function get_not_found_template()
    {
		static $not_found_template = null;

		if ( $not_found_template === null ) {
			ob_start();
			include_once blueprint_blocks()->path . '/templates/edit-not-found.php';
			$not_found_template = ob_get_clean();
		}

		return $not_found_template;
	}

	/**
	 * Register post types for editing blocks and patterns.
     * @access public
     * @return void
     */
    public function register_post_types()
    {
		register_post_type( blueprint_blocks()::OBJECT_PREFIX . 'block', array(
			'public'			=> false,
			'show_ui'			=> true,
			'show_in_menu'		=> false,
			'show_in_nav_menus' => false,
			'show_in_rest'      => true,
			'query_var'			=> false,
			'map_meta_cap'      => true,
			'capability_type'	=> 'post', //blueprint_blocks()::OBJECT_PREFIX . 'blocks',
			'rest_base'         => blueprint_blocks()::OBJECT_PREFIX . 'blocks',
			'supports'			=> array( 'title', 'custom-fields' ),
			'label'             => __( 'Blocks', blueprint_blocks()::TEXT_DOMAIN ),
			'labels'            => array(
				'name'          => __( 'Blocks', blueprint_blocks()::TEXT_DOMAIN ),
                'singular_name' => __( 'Block', blueprint_blocks()::TEXT_DOMAIN ),
                'add_new'       => __( 'Add New Block', blueprint_blocks()::TEXT_DOMAIN ),
                'add_new_item'  => __( 'Add New Block', blueprint_blocks()::TEXT_DOMAIN ),
                'edit_item'     => __( 'Edit Block', blueprint_blocks()::TEXT_DOMAIN ),
                'new_item'      => __( 'New Block', blueprint_blocks()::TEXT_DOMAIN ),
                'view_item'     => __( 'View Block', blueprint_blocks()::TEXT_DOMAIN ),
                'search_items'      => __( 'Search Blocks', blueprint_blocks()::TEXT_DOMAIN ),
				'not_found'     => $this->get_not_found_template(),
			),
		) );

		register_post_type( blueprint_blocks()::OBJECT_PREFIX . 'block_rev', array(
			'public'			=> false,
			'show_ui'			=> false,
			'show_in_menu'		=> false,
			'show_in_nav_menus' => false,
			'show_in_rest'      => true,
			'query_var'			=> false,
			'map_meta_cap'      => true,
			'capability_type'	=> 'post', //blueprint_blocks()::OBJECT_PREFIX . 'blocks',
			'rest_base'         => blueprint_blocks()::OBJECT_PREFIX . 'blocks_rev',
			'supports'			=> array( 'title', 'custom-fields' ),
			'label'             => __( 'Blocks', blueprint_blocks()::TEXT_DOMAIN ),
			'labels'            => array(
				'name'          => __( 'Blocks', blueprint_blocks()::TEXT_DOMAIN ),
                'singular_name' => __( 'Block', blueprint_blocks()::TEXT_DOMAIN ),
                'add_new_item'  => __( 'Add New Block', blueprint_blocks()::TEXT_DOMAIN ),
                'edit_item'     => __( 'Edit Block', blueprint_blocks()::TEXT_DOMAIN ),
                'new_item'      => __( 'New Block', blueprint_blocks()::TEXT_DOMAIN ),
                'view_item'     => __( 'View Block', blueprint_blocks()::TEXT_DOMAIN ),
			),
		) );
	}

	/**
	 * Register post type meta for access via the rest api.
     * @access public
     * @return void
     */
    public function register_post_type_meta()
    {
		register_meta( 'post', 'blueprint_blocks_block_json', array(
			'object_subtype' => blueprint_blocks()::OBJECT_PREFIX . 'block',
			'type' => 'object',
			'description' => 'The JSON schema that describes the block.',
			'single' => true,
			'show_in_rest' => [
				'schema' => [
					'additionalProperties' => true,
				],
			],
		) );

		register_meta( 'post', 'blueprint_blocks_blueprint_json', array(
			'object_subtype' => blueprint_blocks()::OBJECT_PREFIX . 'block',
			'type' => 'object',
			'description' => 'The JSON schema that describes the blueprint.',
			'single' => true,
			'show_in_rest' => [
				'schema' => [
					'additionalProperties' => true,
				],
			],
		) );

		register_meta( 'post', 'blueprint_blocks_editor_css', array(
			'object_subtype' => blueprint_blocks()::OBJECT_PREFIX . 'block',
			'type' => 'string',
			'description' => 'The css for the block when viewed in the editor.',
			'single' => true,
			'show_in_rest' => true,
		) );

		register_meta( 'post', 'blueprint_blocks_view_css', array(
			'object_subtype' => blueprint_blocks()::OBJECT_PREFIX . 'block',
			'type' => 'string',
			'description' => 'The css for the block.',
			'single' => true,
			'show_in_rest' => true,
		) );
	}
}
