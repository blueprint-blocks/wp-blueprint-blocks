import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditableString from "../index";

test("delete event called when backspace is pressed", async () => {
	const onDelete = jest.fn();
	const user = userEvent.setup();

	let value = "";

	const onChange = (newValue) => {
		value = newValue;
	};

	const { rerender } = render(
		<EditableString
			onChange={onChange}
			onDelete={onDelete}
			value={value}
		/>,
	);

	await user.click(screen.getByTestId("editable-string/content-editable"));
	await user.keyboard("[Backspace]");

	expect(onDelete).toHaveBeenCalledTimes(1);

	await user.keyboard("abc");

	rerender(
		<EditableString
			onChange={onChange}
			onDelete={onDelete}
			value={value}
		/>,
	);

	await user.keyboard("[Backspace][Backspace][Backspace]");

	rerender(
		<EditableString
			onChange={onChange}
			onDelete={onDelete}
			value={value}
		/>,
	);

	expect(onDelete).toHaveBeenCalledTimes(1);

	await user.keyboard("[Backspace]");

	expect(onDelete).toHaveBeenCalledTimes(2);
});
