import classNames from 'classnames'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../Logo'

import { hideUpsellPrompt } from '../../store/upsell-prompt'

import './style.css'

function UpsellPrompt() {

	const dispatch = useDispatch()
	const ref = useRef( null )

	const onClose = () => {
		ref?.current?.classList.remove( 'is-visible' )
		setTimeout( () => {
			dispatch( hideUpsellPrompt() )
		}, 300 )
	}

	useEffect( () => {
		setTimeout( () => {
			ref?.current?.classList.add( 'is-visible' )
		}, 50 )
	}, [] )

	return (
		<div ref={ ref } className="UpsellPrompt">
			<div className="UpsellPrompt-wrap">
				<div className="UpsellPrompt-window">

					<div className="UpsellPrompt-close" onClick={ onClose } />

					<div className="UpsellPrompt-content">
						<Logo />

						<p>{ 'Ready to level up you block building game? Blueprint Blocks is the native Gutenberg platform for web professionals that has near-zero learning curve but is extremely powerful. Transparent annual pricing with ongoing updates and support.' }</p>

						<div className="UpsellPrompt-try">
							{ 'Try Blueprint Blocks Pro risk-free for 30 days. Switch plans at any time.' }
						</div>
					</div>

					<div className="UpsellPrompt-tiles">
						<div className="UpsellPrompt-tile">

							<div>
								<h3>Single Site</h3>
								<p>Utilize all pro features on a single site.</p>
							</div>

							<div className="UpsellPrompt-pricing">
								$149 <span>per year</span>
							</div>

							<div className="UpsellPrompt-secondaryButton">
								Upgrade Now
							</div>

						</div>
						<div className="UpsellPrompt-tile">

							<div>
								<h3>Unlimited Sites</h3>
								<p>Utilize all pro features on unlimited sites.</p>
							</div>

							<div className="UpsellPrompt-pricing">
								$299 <span>per year</span>
							</div>

							<div className="UpsellPrompt-primaryButton">
								Upgrade Now
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
	)

}

export default UpsellPrompt
