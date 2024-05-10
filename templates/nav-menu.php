
<?php
global $current_screen;

$current_page = null;

if ( $current_screen->base === 'toplevel_page_blueprint_blocks_start' ) {
	$current_page = 'getting-started';
} elseif ( $current_screen->base === 'blocks_page_blueprint_blocks_settings' ) {
	$current_page = 'settings';
} elseif ( $current_screen->post_type === blueprint_blocks()::OBJECT_PREFIX . 'block' && ( $current_screen->base === 'post' || in_array( $current_screen->action, [ 'add', 'edit' ] ) ) ) {
	$current_page = 'block-editor';
}
?>

<div class="blueprint-blocks-nav-menu">
	<div class="blueprint-blocks-nav-menu--title">
		<?php _e( 'Blueprint Blocks', blueprint_blocks()::TEXT_DOMAIN ); ?>
	</div>
	<ul class="blueprint-blocks-nav-menu--nav">
		<li<?php if ( $current_page === 'getting-started' ): ?> class="is-active"<?php endif; ?>>
			<a href="<?php echo admin_url( 'admin.php?page=blueprint_blocks_start' ); ?>"><?php _e( 'Getting Started', blueprint_blocks()::TEXT_DOMAIN ); ?></a>
		</li>
		<li<?php if ( $current_page === 'block-editor' ): ?> class="is-active"<?php endif; ?>>
			<a href="<?php echo admin_url( 'edit.php?post_type=' . blueprint_blocks()::OBJECT_PREFIX . 'block' ); ?>"><?php _e( 'Blocks', blueprint_blocks()::TEXT_DOMAIN ); ?></a>
		</li>
		<li<?php if ( $current_page === 'settings' ): ?> class="is-active"<?php endif; ?>>
			<a href="<?php echo admin_url( 'admin.php?page=blueprint_blocks_settings' ); ?>"><?php _e( 'Settings', blueprint_blocks()::TEXT_DOMAIN ); ?></a>
		</li>
	</ul>
</div>
