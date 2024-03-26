import clsx from "clsx";
import { memo, useMemo, useRef } from "react";
import { useBlueprintDrag, useDebugRenderCount } from "../../hooks";
import BlueprintDebugRect from "../BlueprintDebugRect";
import { getUniqueClientId } from "../../functions";

import "./style.css";

const BlueprintInsert = memo(
	({ indent = 0, ancestry = [], context = "edit" }) => {
		const ref = useRef(null);
		const focusRef = useRef(null);

		const id = useMemo(() => getUniqueClientId(), []);

		const { hasFocus } = useBlueprintDrag(focusRef, {
			ancestry,
			context,
			id,
		});

		if (process.env.NODE_ENV === "development") {
			useDebugRenderCount("BlueprintInsert");
		}

		return (
			<div
				ref={ref}
				className={clsx("BlueprintInsert", {
					"has-focus": hasFocus,
				})}
				data-id={`${ancestry.toString()}-${id}`}
				style={{ "--indent": indent }}
			>
				<div ref={focusRef} className="BlueprintInsert-line">
					<div />
				</div>

				{process.env.NODE_ENV === "development" && (
					<BlueprintDebugRect debugRef={focusRef} />
				)}
			</div>
		);
	},
);

export default BlueprintInsert;
