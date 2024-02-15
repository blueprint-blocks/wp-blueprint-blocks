import { forwardRef } from 'react'
import { useDispatch } from 'react-redux'

import InsertButton from '../InsertButton'
import { setComponentAttribute } from '../../store/block-blueprint'

import './style.css'

const BlueprintComponentInsert = forwardRef( ( {
	clientId,
}, ref ) => {

	const dispatch = useDispatch()

	const onClick = () => {
		dispatch( setComponentAttribute( {
			clientId,
			attribute: '',
			value: null,
		} ) )
	}

	return (
		<InsertButton
			className="BlueprintComponentInsert"
			onClick={ onClick }
		/>
	)

} )

export default BlueprintComponentInsert
