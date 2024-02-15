import classNames from 'classnames'

import './style.css'

const InsertButton = ( {
	className,
	onClick,
} ) => {

	return (
		<div
			className={ classNames( 'InsertButton', className ) }
			onClick={ onClick }
		/>
	)

}

export default InsertButton
