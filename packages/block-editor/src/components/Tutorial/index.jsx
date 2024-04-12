import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppContext, TutorialContext } from "../../contexts";
import { camelize } from "../../functions";

import {
	useBlockJson,
	useBlockSave,
	useBlueprint,
	useEditorFocus,
} from "../../hooks";

import { insertNewComponentAtPosition } from "../../store/block-blueprint";
import { setName, setSupportsProperty, setTitle } from "../../store/block-json";
import { setChanged } from "../../store/post-metadata";

import TutorialTooltip from "../TutorialTooltip";

const EXAMPLE_BLOCK_NAME = "zesty-capybara";
const EXAMPLE_BLOCK_TITLE = "Zesty Capybara";

function Tutorial() {
	const appContext = useContext(AppContext);
	const tutorialContext = useContext(TutorialContext);

	if (!tutorialContext.isActive) {
		return;
	}

	const dispatch = useDispatch();

	const blockSupports = useSelector(
		(state) => state.blockJson?.supports || {},
	);

	const { addAttribute, blockJson, getUniqueAttributeName } = useBlockJson();
	const { saveBlock, saveDialogIsVisible } = useBlockSave();
	const { blockComponents, getComponentAttribute } = useBlueprint();
	const { currentFocus, unsetFocus } = useEditorFocus();

	const [insertedComponentClientId, setInsertedComponentClientId] =
		useState("");

	const insertedComponentTagName = getComponentAttribute(
		insertedComponentClientId,
		"tagName",
	);

	const newAttributeName = getUniqueAttributeName(camelize("rich-text"));

	if (!tutorialContext.isActive) {
		return null;
	}

	const setBlockName = useCallback(() => {
		if (blockJson?.name === "blueprint-blocks/") {
			for (let i = 0; i < EXAMPLE_BLOCK_NAME.length; i++) {
				setTimeout(
					() => {
						dispatch(
							setName(
								`blueprint-blocks/${EXAMPLE_BLOCK_NAME.slice(0, i + 1)}`,
							),
						);
					},
					i * (1000 / 21),
				);

				dispatch(setChanged(true));
			}
		}
	}, [blockJson]);

	const setBlockTitle = useCallback(() => {
		if (blockJson?.title === "") {
			for (let i = 0; i < EXAMPLE_BLOCK_TITLE.length; i++) {
				setTimeout(
					() => {
						dispatch(setTitle(EXAMPLE_BLOCK_TITLE.slice(0, i + 1)));
					},
					i * (1000 / 21),
				);

				dispatch(setChanged(true));
			}
		}
	}, [blockJson]);

	const setColorSuppport = useCallback(() => {
		if (!blockSupports?.color) {
			dispatch(
				setSupportsProperty({
					propertyName: "color",
					value: true,
				}),
			);
			dispatch(setChanged(true));
		}
	});

	const addRichText = useCallback(() => {
		if (Object.values(blockComponents).length === 1) {
			dispatch(
				insertNewComponentAtPosition({
					context: "edit",
					component: {
						type: "rich-text",
						attributeName: newAttributeName,
						placeholder: "Enter some text...",
						tagName: "p",
					},
					position: [0, 0],
				}),
			);

			addAttribute(newAttributeName, {
				type: "string",
				default: null,
			});

			dispatch(setChanged(true));
		}
	}, [blockComponents]);

	useEffect(() => {
		if (tutorialContext.currentStep === 1 && blockJson.name.length > 19) {
			tutorialContext.goToStep(2);
		} else if (
			tutorialContext.currentStep === 2 &&
			blockJson.title.length > 2
		) {
			tutorialContext.goToStep(3);
		} else if (
			tutorialContext.currentStep === 3 &&
			blockJson.icon !== "star-filled"
		) {
			tutorialContext.goToStep(4);
		} else if (
			tutorialContext.currentStep === 6 &&
			Object.values(blockComponents).length === 2
		) {
			Object.entries(blockComponents).map(([clientId, component]) => {
				if (component.type === "rich-text") {
					setInsertedComponentClientId(clientId);
				}
			});
			tutorialContext.goToStep(7);
		} else if (
			tutorialContext.currentStep === 7 &&
			currentFocus?.context === "component"
		) {
			tutorialContext.goToStep(8);
		} else if (
			tutorialContext.currentStep === 8 &&
			insertedComponentTagName === "h3"
		) {
			unsetFocus(true);
			tutorialContext.goToStep(9);
		} else if (tutorialContext.currentStep === 9 && saveDialogIsVisible) {
			tutorialContext.endTutorial();
		}
	}, [
		blockComponents,
		blockJson.icon,
		blockJson.name,
		blockJson.supports,
		blockJson.title,
		currentFocus,
		insertedComponentTagName,
		saveDialogIsVisible,
	]);

	return (
		<div class="Tutorial">
			<TutorialTooltip step={1} onNextStep={setBlockName} />
			<TutorialTooltip step={2} onNextStep={setBlockTitle} />
			<TutorialTooltip step={3} />
			<TutorialTooltip step={4} onNextStep={setColorSuppport} />
			<TutorialTooltip
				step={5}
				onNextStep={() => {
					appContext.setActiveNavItem(1);
				}}
			/>
			<TutorialTooltip step={6} onNextStep={addRichText} />
			<TutorialTooltip
				step={7}
				onNextStep={() => {
					// set focus
				}}
			/>
			<TutorialTooltip
				step={8}
				onNextStep={() => {
					// set h3
				}}
			/>
			<TutorialTooltip step={9} onNextStep={saveBlock} />
		</div>
	);
}

export default Tutorial;
