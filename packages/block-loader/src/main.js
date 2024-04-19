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
const { blockTypes = [] } = blueprintBlocksLoaderSettings || {};

blockTypes.forEach(({ blockBlueprint, blockJson, blockName }) => {
	console.log(blockName, blockBlueprint);
	registerBlockType(blockName, {
		...(blockJson || {}),

		edit: BlockEdit(blockBlueprint || null),

		save: BlockSave(blockBlueprint || null),
	});
});
