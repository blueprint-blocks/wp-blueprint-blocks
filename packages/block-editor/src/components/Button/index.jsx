import clsx from "clsx";
import { useMemo } from "react";

import "./style.css";

const Button = ({
	children,
	disabled = false,
	label,
	onClick,
	style = "secondary",
}) => {
	const styles = useMemo(
		() =>
			((Array.isArray(style) && style) || [style]).map(
				(style) => `is-${style}`,
			),
		[style],
	);

	return (
		<button
			className={clsx("Button", styles, {
				"is-disabled": disabled,
			})}
			onClick={(event) => !disabled && onClick(event)}
		>
			{children && <span>{children}</span>}
			{label && <span>{label}</span>}
		</button>
	);
};

export default Button;
