function delimiterize(string) {
	return string
		.replace(/([a-z])([A-Z])/g, (match, p1, p2) => {
			return `${p1}-${p2}`;
		})
		.replace(/\//g, "-")
		.replace(/_/g, "-")
		.replace(/[^\w\s-]/g, "")
		.replace(/(\s)/g, "-")
		.toLowerCase();
}

export default delimiterize;
