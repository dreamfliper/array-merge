Array.prototype.mix = function(callback, ...otherArrays) {
	let result = []
	for (let i = otherArrays[0].length - 1; i >= 0; i--) {
		result[i] = callback.apply(
			this,
			Array.prototype.concat(this[i], otherArrays.map(array => array[i]))
		)
	}
	return result
}
