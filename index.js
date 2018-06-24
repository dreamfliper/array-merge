Array.prototype.mix = function(callback, ...otherArrays) {
	var result = []
	for (var i = otherArrays[0].length - 1; i >= 0; i--) {
		result[i] = callback.apply(
			this,
			Array.prototype.concat(this[i], otherArrays.map(array => array[i]))
		)
	}
	return result
}
