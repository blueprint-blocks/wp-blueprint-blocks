import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import "./style.css";

const Button = forwardRef(
	(
		{ children, disabled = false, label, onClick, style = "secondary" },
		ref,
	) => {
		const styles = useMemo(
			() =>
				((Array.isArray(style) && style) || [style]).map(
					(style) => `is-${style}`,
				),
			[style],
		);

		return (
			<button
				ref={ref}
				className={clsx("Button", styles, {
					"is-disabled": disabled,
				})}
				onClick={(event) => !disabled && onClick(event)}
			>
				{children && <span>{children}</span>}
				{label && <span>{label}</span>}
			</button>
		);
	},
);

export default Button;
