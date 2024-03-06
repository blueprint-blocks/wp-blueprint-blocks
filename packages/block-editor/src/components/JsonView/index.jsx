import { filterJsonForDisplay } from "../../functions";

import "./style.css";

function JsonView({ json, focus = [], placeholders = {}, values = {} }) {
	return (
		<div
			className="JsonView"
			dangerouslySetInnerHTML={{
				__html: filterJsonForDisplay({
					json,
					focus,
					placeholders,
					values,
				}),
			}}
		/>
	);
}

export default JsonView;
