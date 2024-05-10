import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";

import App from "./components/App";
import BlueprintConnectionsProvider from "./components/BlueprintConnectionsProvider";
import BlueprintEditorProvider from "./components/BlueprintEditorProvider";
import TutorialProvider from "./components/TutorialProvider";

import "./main.css";

ReactDOM.createRoot(document.getElementById("blueprint-blocks-editor")).render(
	<Provider store={store}>
		<TutorialProvider>
			<BlueprintConnectionsProvider>
				<BlueprintEditorProvider>
					<App />
				</BlueprintEditorProvider>
			</BlueprintConnectionsProvider>
		</TutorialProvider>
	</Provider>,
);
