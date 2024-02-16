import ProFlag from '../ProFlag'

import './style.css'

function Logo( {
	pro = true,
} ) {
	return (
		<div className="Logo">
			<h1>{ 'Blueprint Blocks' }</h1>
			{ pro === true && (
				<ProFlag upsell={ false } />
			) }
		</div>
	)
}

export default Logo
