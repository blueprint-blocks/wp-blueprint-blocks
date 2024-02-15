import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditableString from '../index'

test( 'placeholder is displayed when value is empty', async () => {

	const user = userEvent.setup()

	let value = 'world'

	const onChange = ( newValue ) => {
		value = newValue
	}

	const { rerender } = render(
		<EditableString
			onChange={ onChange }
			placeholder="hello"
			value={ value }
		/>
	)

	expect( screen.queryByTestId( 'editable-string/placeholder' ) ).toBeNull()
	expect( screen.getByTestId( 'editable-string' ).textContent ).toBe( 'world' )

	await user.click( screen.getByTestId( 'editable-string/content-editable' ) )
	await user.keyboard( '[Backspace][Backspace][Backspace][Backspace][Backspace]' )

	rerender(
		<EditableString
			onChange={ onChange }
			placeholder="hello"
			value={ value }
		/>
	)

	expect( screen.queryByTestId( 'editable-string/placeholder' ) ).not.toBeNull()
	expect( screen.getByTestId( 'editable-string' ).textContent ).toBe( 'hello' )

} )
