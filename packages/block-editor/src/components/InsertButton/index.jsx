import clsx from "clsx"

import './style.css'

const InsertButton = ( {
	className,
	onClick,
} ) => {

	return (
		<div
			className={ clsx( 'InsertButton', className ) }
			onClick={ onClick }
		/>
	)

}

export default InsertButton
