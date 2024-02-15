const ALL_CLIENT_IDS = []

function getRandomClientId() {
	const hash1 = Math.random().toString(20).slice(2, 6)
	const hash2 = Math.random().toString(20).slice(2, 8)
	const hash3 = Math.random().toString(20).slice(2, 8)

	return `${ hash1 }-${ hash2 }-${ hash3 }`
}

function getUniqueClientId() {
	let clientId

	do {
		clientId = getRandomClientId()
	} while ( ALL_CLIENT_IDS.includes( clientId ) )

	return clientId
}

export default getUniqueClientId
