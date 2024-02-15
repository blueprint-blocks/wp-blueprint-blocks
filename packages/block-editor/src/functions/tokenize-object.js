function tokenizeObject(object, ancestry = '') {
	const tokenizedObject = JSON.parse(JSON.stringify(object))

	if (tokenizedObject && typeof tokenizedObject === 'object' && tokenizedObject.constructor === Object) {
		for (const [ key, value ] of Object.entries(tokenizedObject)) {
			if (typeof value === 'object') {
				tokenizedObject[key] = tokenizeObject(value, ancestry && `${ ancestry }.${ key }` || key )
			} else {
				tokenizedObject[key] = `{{ ${ ancestry && ancestry + '.' || '' }${ key }.${ typeof value } }}`
			}
		}
	}

	return tokenizedObject
}

export default tokenizeObject
