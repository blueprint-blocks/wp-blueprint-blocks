<?php
/**
 * Flushes rewrite rules upon activation.
 */
function blueprint_blocks_activate()
{
	flush_rewrite_rules();
}
