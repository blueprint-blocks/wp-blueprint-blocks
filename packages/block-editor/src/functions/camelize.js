import delimiterize from "./delimiterize";

function camelize(string = "") {
	return delimiterize(string).replace(/\-(.)/g, (match, p1) =>
		p1.toUpperCase(),
	);
}

export default camelize;
