import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { pascalize } from "../functions";
import useEditorFocus from "./use-editor-focus";

import {
	getComponent,
	getComponentAttribute,
	getComponentAttributes,
	getComponentTagName,
	getComponentType,
	removeComponent,
	renameComponentAttribute,
	setComponentAttribute,
	unsetComponentAttribute,
} from "../store/block-blueprint";

import { getAttribute } from "../store/block-json";

import { setChanged } from "../store/post-metadata";

const useBlueprint = () => {
	const dispatch = useDispatch();

	const { unsetFocus } = useEditorFocus();

	const blockComponents = useSelector(
		(state) => state.blockBlueprint.blockComponents,
	);

	const getAttributeByComponentClientId = useCallback((clientId) => {
		const attributeName = _getComponentAttribute(clientId, "attributeName");
		const attribute = useSelector((state) =>
			getAttribute(state.blockJson, attributeName),
		);

		if (attribute !== null) {
			return attribute.clientId;
		}

		return null;
	}, []);

	const _getComponent = (clientId) =>
		useSelector((state) =>
			getComponent(state.blockBlueprint, { clientId }),
		);

	const _getComponentAttribute = (clientId, attributeName) => {
		return useSelector((state) =>
			getComponentAttribute(state.blockBlueprint, {
				clientId,
				attributeName,
			}),
		);
	};

	const _getComponentAttributes = (clientId) => {
		return useSelector((state) =>
			getComponentAttributes(state.blockBlueprint, {
				clientId,
			}),
		);
	};

	const _getComponentTagName = (clientId) => {
		const type = _getComponentType(clientId);
		const tagName = useSelector((state) =>
			getComponentTagName(state.blockBlueprint, {
				clientId,
			}),
		);

		return useMemo(
			() => (type === "html" && (tagName || "div")) || pascalize(type),
			[tagName, type],
		);
	};

	const _getComponentType = (clientId) => {
		return useSelector((state) =>
			getComponentType(state.blockBlueprint, {
				clientId,
			}),
		);
	};

	const getComponentsByAttributeName = useCallback(
		(attributeName) => {
			return Object.fromEntries(
				Object.entries(blockComponents).filter(([_, blockComponent]) =>
					blockComponent.attributes.reduce(
						(hasAttributeName, attribute) =>
							hasAttributeName ||
							(attribute.name === "attributeName" &&
								attribute.value === attributeName),
						false,
					),
				),
			);
		},
		[blockComponents],
	);

	const _renameComponentAttribute = (
		clientId,
		attributeName,
		newAttributeName,
	) => {
		dispatch(
			renameComponentAttribute({
				clientId,
				attributeName: attributeName,
				newAttributeName: newAttributeName,
			}),
		);
		dispatch(setChanged(true));
	};

	const _removeComponent = (clientId) => {
		dispatch(removeComponent(clientId));
		dispatch(setChanged(true));
		unsetFocus(true);
	};

	const _setComponentAttribute = (
		clientId,
		attributeName,
		attributeValue,
	) => {
		dispatch(
			setComponentAttribute({ clientId, attributeName, attributeValue }),
		);
		dispatch(setChanged(true));
	};

	const _unsetComponentAttribute = (clientId, attributeName) => {
		dispatch(unsetComponentAttribute({ clientId, attributeName }));
		dispatch(setChanged(true));
	};

	return {
		blockComponents,
		getAttributeByComponentClientId,
		getComponent: _getComponent,
		getComponentAttribute: _getComponentAttribute,
		getComponentAttributes: _getComponentAttributes,
		getComponentTagName: _getComponentTagName,
		getComponentType: _getComponentType,
		getComponentsByAttributeName,
		renameComponentAttribute: _renameComponentAttribute,
		removeComponent: _removeComponent,
		setComponentAttribute: _setComponentAttribute,
		unsetComponentAttribute: _unsetComponentAttribute,
	};
};

export default useBlueprint;
