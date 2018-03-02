Array.prototype.merge = function(secondArray, callback) {
	return this.reduce((secondArray, ele, index)=>{
		secondArray[index] = callback(ele, secondArray[index])
		return secondArray
	},secondArray)
}