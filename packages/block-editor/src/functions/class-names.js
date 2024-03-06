function classNames(...args) {
	let filteredClassNames = []

	args.forEach((arg) => {
		if (arg && typeof arg === 'array' && arg.constructor === Array) {
			filteredClassNames = Array.concat(filteredClassNames, clsx(arg))
		} else if (arg && typeof arg === 'object' && arg.constructor === Object) {
			filteredClassNames = filteredClassNames.concat(Object.entries(arg)
				.filter(( [ className, conditional ] ) => conditional)
				.map(( [ className, conditional ] ) => className)
			)
		} else {
			filteredClassNames.push(arg)
		}
	})

	return filteredClassNames.filter(( className ) => className).join(' ')
}

export default classNames
