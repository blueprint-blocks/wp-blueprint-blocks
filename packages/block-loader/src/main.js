/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Edit and save functionality rendered based on a provided blueprint.json schema.
 */
import { BlockEdit, BlockSave } from "@blueprint-blocks/components";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
const { blockTypes = {} } = blueprintBlocksLoaderSettings || {};

Object.entries(blockTypes).forEach(([blockName, blockType]) => {
	registerBlockType(blockName, {
		...(blockType?.blockJson || {}),

		edit: BlockEdit(blockType?.blockBlueprint || null),

		save: BlockSave(blockType?.blockBlueprint || null),
	});
});
