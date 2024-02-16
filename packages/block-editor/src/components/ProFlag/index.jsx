import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { showUpsellPrompt } from '../../store/upsell-prompt'

import './style.css'

function ProFlag( {
	upsell = true,
} ) {

	if ( env.PRO_VERSION === 'true' ) {
		return
	}

	const dispatch = useDispatch()

	const onClick = () => {
		if ( upsell ) {
			dispatch( showUpsellPrompt() )
		}
	}

	return (
		<div className={ classNames( 'ProFlag', { 'has-upsell': upsell } ) } onClick={ onClick }>
			{ 'PRO' }
		</div>
	)

}

export default ProFlag
