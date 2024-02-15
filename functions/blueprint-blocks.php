<?php
/**
 * Returns the global instance of BlueprintBlocks\Core.
 *
 * @return \BlueprintBlocks\Core
 */
function blueprint_blocks()
{
	static $instance = null;

	if ($instance === null) {
		$instance = new \BlueprintBlocks\Core();
	}

	return $instance;
}
