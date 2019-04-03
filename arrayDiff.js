Array.prototype.diff = function(anOtherArray) {
	const otherSet = new Set(anOtherArray)
	return this.filter(x => !otherSet.has(x))
}
