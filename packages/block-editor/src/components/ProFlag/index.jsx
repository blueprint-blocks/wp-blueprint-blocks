import './style.css'

function ProFlag() {
	if ( env.PRO_VERSION === 'true' ) {
		return
	}

	return (
		<div className="ProFlag">
			{ 'PRO' }
		</div>
	)
}

export default ProFlag
