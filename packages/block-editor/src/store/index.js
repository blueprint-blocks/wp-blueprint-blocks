import { combineReducers, configureStore } from "@reduxjs/toolkit";

import app from "./app";
import blockBlueprint from "./block-blueprint";
import blockJson from "./block-json";
import blockEditorCss from "./block-editor-css";
import blockViewCss from "./block-view-css";
import connectionHandles from "./connection-handles";
import editor from "./editor";
import postMetadata from "./post-metadata";
import postType from "./post-type";
import saveDialog from "./save-dialog";
import upsellDialog from "./upsell-dialog";

const store = configureStore({
	reducer: combineReducers({
		app,
		blockBlueprint,
		blockJson,
		blockEditorCss,
		blockViewCss,
		connectionHandles,
		editor,
		postMetadata,
		postType,
		saveDialog,
		upsellDialog,
	}),
});

window.blueprintBlocksStore = store;

export default store;
