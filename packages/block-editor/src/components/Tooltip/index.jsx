import clsx from "clsx";
import { useMemo, useRef } from "react";

import { tooltips } from "../../data";

import {
	getObjectProperty,
	parseMarkdown,
	replaceTokens,
} from "../../functions";

import { useAppRect, useBlockJson, useNavRect, useRect } from "../../hooks";

import "./style.css";

function Tooltip({
	data = "",
	direction = "left",
	label,
	position = "above",
	required = false,
	defaultValue = null,
	text,
	url,
	width = 240,
}) {
	const ref = useRef(null);
	const messageRef = useRef(null);

	const rect = useRect(ref, null, ["bottom", "top"]);
	const messageRect = useRect(messageRef, null, ["height"]);

	const appRect = useAppRect();
	const navRect = useNavRect();

	const { blockJson } = useBlockJson();

	const _position = useMemo(() => {
		if (rect.top - messageRect.height < navRect.bottom) {
			return "below";
		} else if (rect.bottom + messageRect.height > appRect.bottom) {
			return "above";
		}
		return position;
	}, [position, rect, appRect, navRect]);

	const _label = useMemo(
		() => getObjectProperty(tooltips, `${data}.label`) || label,
		[data, label],
	);

	const _required = useMemo(
		() => getObjectProperty(tooltips, `${data}.required`) || required,
		[data, required],
	);

	const _default = useMemo(
		() => getObjectProperty(tooltips, `${data}.default`) || defaultValue,
		[data, defaultValue],
	);

	const _text = useMemo(() => {
		let _text = getObjectProperty(tooltips, `${data}.text`);

		if (_text === null) {
			_text = text;
		}

		return parseMarkdown(
			replaceTokens(_text, {
				block: {
					...blockJson,
					namespace: blockJson.name.split("/")?.[0],
					name: blockJson.name.split("/")?.[1],
				},
			}),
		);
	}, [blockJson, data, text]);

	const _url = useMemo(
		() => getObjectProperty(tooltips, `${data}.url`) || url,
		[data, url],
	);

	const _width = useMemo(
		() => getObjectProperty(tooltips, `${data}.width`) || width,
		[data, width],
	);

	return (
		<div ref={ref} className="Tooltip" style={{ "--width": _width }}>
			<span>{"?"}</span>
			<div
				ref={messageRef}
				className={clsx(
					"Tooltip-message",
					`is-${direction}`,
					`is-${_position}`,
					{ "has-label": _label },
				)}
			>
				{_label && <div className="Tooltip-label">{_label}</div>}
				<div className="Tooltip-text">
					<p dangerouslySetInnerHTML={{ __html: _text }} />
					{_required && (
						<div className="Tooltip-meta">
							<div className="Tooltip-required">{"Required"}</div>
						</div>
					)}
					{_default && (
						<div className="Tooltip-default">
							{"Default value:"}
							{_default === "checked" && (
								<div className="Tooltip-checkbox is-checked"></div>
							)}
							{_default === "unchecked" && (
								<div className="Tooltip-checkbox is-unchecked"></div>
							)}
							{_default !== "checked" &&
								_default !== "unchecked" && (
									<span>{_default}</span>
								)}
						</div>
					)}
				</div>
				{_url && (
					<a className="Tooltip-link" href={_url} target="_blank" />
				)}
			</div>
			{_url && <a className="Tooltip-link" href={_url} target="_blank" />}
		</div>
	);
}

export default Tooltip;
