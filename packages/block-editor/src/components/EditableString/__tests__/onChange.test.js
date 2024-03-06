import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditableString from "../index";

test("receives new value when changed", async () => {
	const user = userEvent.setup();

	let value = "hello";

	const onChange = (newValue) => {
		value = newValue;
	};

	const { rerender } = render(
		<EditableString onChange={onChange} value={value} />,
	);

	await user.click(screen.getByTestId("editable-string/content-editable"));
	await user.keyboard("[Space]world");

	rerender(<EditableString onChange={onChange} value={value} />);

	expect(screen.getByTestId("editable-string").textContent).toBe(
		"hello world",
	);
	expect(value).toBe("hello world");

	await user.keyboard(
		"[Backspace][Backspace][Backspace][Backspace][Backspace]",
	);
	await user.keyboard("test");

	rerender(<EditableString onChange={onChange} value={value} />);

	expect(screen.getByTestId("editable-string").textContent).toBe(
		"hello test",
	);
	expect(value).toBe("hello test");
});
