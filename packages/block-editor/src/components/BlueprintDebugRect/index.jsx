import { useRect } from '../../hooks'

import './style.css'

function BlueprintDebugRect( {
	debugRef = null,
	parentRef = null,
} ) {

	if (process.env.NODE_ENV !== 'development' || process.env.DEBUG_RECT !== 'true' ) {
		return null
	}

	const rect = useRect( debugRef, parentRef )

	return (
		<div className="BlueprintDebugRect">
			<div className="debug-tl">
				{ `${ rect.left }, ${ rect.top }` }
			</div>
			<div className="debug-tr">
				{ `${ rect.right }, ${ rect.top }` }
			</div>
			<div className="debug-bl">
				{ `${ rect.left }, ${ rect.bottom }` }
			</div>
			<div className="debug-br">
				{ `${ rect.right }, ${ rect.bottom }` }
			</div>
		</div>
	)

}

export default BlueprintDebugRect
