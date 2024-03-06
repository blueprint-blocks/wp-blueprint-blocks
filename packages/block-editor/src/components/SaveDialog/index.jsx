import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { validateBlock } from "../../functions";
import { setValid } from "../../store/post-metadata";
import { hideSaveDialog } from "../../store/save-dialog";

import LoadingIcon from "../LoadingIcon";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

function SaveDialog() {
	const dispatch = useDispatch();
	const ref = useRef(null);

	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("Saving...");

	const blockJson = useSelector((state) => state.blockJson);

	const validationResults = useMemo(
		() => validateBlock({ blockJson }),
		[blockJson],
	);

	const isValid = useMemo(
		() => validationResults.blockJson.isValid,
		[validationResults],
	);

	const onClose = () => {
		ref?.current?.classList.remove("is-visible");
		setTimeout(() => {
			dispatch(hideSaveDialog());
		}, 300);
	};

	useEffect(() => {
		dispatch(setValid(isValid));
		setTimeout(() => {
			ref?.current?.classList.add("is-visible");
		}, 50);
	}, []);

	useEffect(() => {
		if (isValid === true) {
			setTimeout(() => {
				ref?.current?.classList.remove("is-visible");
			}, 2000);

			setTimeout(() => {
				dispatch(hideSaveDialog());
			}, 2300);
		}
	}, [isValid]);

	return (
		<div ref={ref} className="SaveDialog">
			<div className="SaveDialog-wrap">
				<div className="SaveDialog-window">
					{!isValid && (
						<div className="SaveDialog-close" onClick={onClose} />
					)}
					<div className="SaveDialog-content">
						{isLoading && <LoadingIcon />}
						{!isLoading && isValid && (
							<p>{"Successfully saved."}</p>
						)}
						{!isValid && validationResults && (
							<>
								<div>
									<img
										className="SaveDialog-icon"
										src={`${pluginMetadata?.url}/assets/images/icon-warning.svg`}
									/>
									<h1>{"Error while saving"}</h1>
									<p>
										{
											"There are a few problems to address before this block can be saved."
										}
									</p>
								</div>
								<hr />
								{validationResults?.blockJson?.errors?.length >
									0 && (
									<div>
										<h3>{"Block.json"}</h3>
										<ul>
											{validationResults?.blockJson?.errors.map(
												({ warningMessage }) => (
													<li>{warningMessage}</li>
												),
											)}
										</ul>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SaveDialog;
