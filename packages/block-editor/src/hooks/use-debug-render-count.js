const renderCounts = []

function useDebugRenderCount( componentName ) {

	if ( process.env.NODE_ENV !== 'development' || process.env.DEBUG_RENDER_COUNT !== 'true' ) {
		return
	}

	renderCounts[ componentName ] = renderCounts[ componentName ] || 0
	renderCounts[ componentName ]++

	console.log( `${ componentName } render(${ renderCounts[ componentName ] })` )

}

export default useDebugRenderCount
