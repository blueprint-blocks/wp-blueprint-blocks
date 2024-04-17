import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { parseMarkdown, validateBlock } from "../../functions";
import { hideSaveDialog } from "../../store/save-dialog";

import LoadingIcon from "../LoadingIcon";
import InserterPreview from "../InserterPreview";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

function SaveDialog() {
	const dispatch = useDispatch();
	const ref = useRef(null);

	const [isLoading, setIsLoading] = useState(false);

	const blockJson = useSelector((state) => state.blockJson);
	const hasShownOnce = useSelector((state) => state.saveDialog.hasShownOnce);

	const validationResults = useMemo(
		() => validateBlock({ blockJson }),
		[blockJson],
	);

	const isValid = useMemo(
		() => validationResults.blockJson.isValid,
		[validationResults],
	);

	const showSuccess = useMemo(
		() => !isLoading && isValid,
		[isLoading, isValid, hasShownOnce],
	);

	const showSuccessMini = useMemo(
		() => !isLoading && isValid && hasShownOnce,
		[isLoading, isValid, hasShownOnce],
	);

	const onClose = () => {
		ref?.current?.classList.remove("is-visible");
		setTimeout(() => {
			dispatch(hideSaveDialog());
		}, 300);
	};

	useEffect(() => {
		setTimeout(() => {
			ref?.current?.classList.add("is-visible");
		}, 50);
	}, []);

	useEffect(() => {
		if (isValid === true) {
			setTimeout(() => {
				ref?.current?.classList.remove("is-visible");
			}, 4300);

			setTimeout(() => {
				dispatch(hideSaveDialog());
			}, 4600);
		}
	}, [isValid]);

	return (
		<div
			ref={ref}
			className={clsx("SaveDialog", { "is-mini": showSuccessMini })}
		>
			{showSuccessMini && (
				<div className="SaveDialog-mini">
					<img
						className="SaveDialog-icon"
						src={`${pluginMetadata?.url}/assets/images/icon-success-white.svg`}
					/>
					<span>{"Saved successfully"}</span>
				</div>
			)}
			{!showSuccessMini && (
				<div className="SaveDialog-wrap">
					<div className="SaveDialog-window">
						{!isValid && (
							<div
								className="SaveDialog-close"
								onClick={onClose}
							/>
						)}
						<div className="SaveDialog-content">
							{isLoading && <LoadingIcon />}
							{showSuccess && (
								<>
									<div className="SaveDialog-header">
										<img
											className="SaveDialog-icon"
											src={`${pluginMetadata?.url}/assets/images/icon-success.svg`}
										/>
										<h1>{"Saved successfully"}</h1>
										<p
											dangerouslySetInnerHTML={{
												__html: parseMarkdown(
													"This block will now be available in the *Inserter* when choosing a block.",
												),
											}}
										/>
									</div>
									<hr />
									<InserterPreview />
								</>
							)}
							{!isValid && validationResults && (
								<>
									<div className="SaveDialog-header">
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
									{validationResults?.blockJson?.errors
										?.length > 0 && (
										<div>
											<h3>{"Block.json"}</h3>
											<ul>
												{validationResults?.blockJson?.errors.map(
													({ warningMessage }) => (
														<li>
															{warningMessage}
														</li>
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
			)}
		</div>
	);
}

export default SaveDialog;
