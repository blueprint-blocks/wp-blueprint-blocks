import { blockSupports } from "../data";

function getSupportsProperties(name) {
	for (let blockSupport of blockSupports) {
		if (blockSupport.name === name) {
			return blockSupport;
		}
	}

	return null;
}

export default getSupportsProperties;
