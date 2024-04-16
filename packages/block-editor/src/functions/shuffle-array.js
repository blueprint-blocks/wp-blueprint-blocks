const shuffleArray = (array) => {
	const _array = structuredClone(array);

	let currentIndex = _array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[_array[currentIndex], _array[randomIndex]] = [
			_array[randomIndex],
			_array[currentIndex],
		];
	}

	return _array;
};

export default shuffleArray;
