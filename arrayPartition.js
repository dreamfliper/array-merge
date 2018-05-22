Array.prototype.partition = function(determination) {
	return this.reduce(
		(acc, ele) => {
			determination(ele) ? acc[0].push(ele) : acc[1].push(ele)
			return acc
		},
		[[], []]
	)
}
