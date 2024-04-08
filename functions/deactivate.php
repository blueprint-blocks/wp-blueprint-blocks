<?php
/**
 * Flushes rewrite rules upon deactivation.
 */
function blueprint_blocks_deactivate()
{
	flush_rewrite_rules();
}
