import test from "ava"
import currify from "./currify"
import "."
import "./arrayDiff"
import "./arrayPartition"

test("currify iteration old way", t => {
	let args = []
	const old_argument = [2, 3, 5]
	const new_argument = [3, 2, 7, 3, 6]
	for (let i = 0, l = new_argument.length; i < l; i++)
		args[args.length] = new_argument[i]
	t.deepEqual(args, new_argument)
})

test("currify", t => {
	const add = currify((a, b, c, d) => a + b + c + d)
	t.is(add(1)(2)(3)(4), 10)
})

test("array-mix", t => {
	const array1 = [3, 4, 5]
	const array2 = [4, 5, 6]
	t.deepEqual(array1.mix((x, y) => x + y, array2), [7, 9, 11])
	t.deepEqual(array1, [3, 4, 5])
	t.deepEqual(array2, [4, 5, 6])
})

test("array-mix-many", t => {
	const argu1 = (a, c, g) => a - c + g
	const argu2 = [3, 4, 5]
	const argu3 = [3, 6, 7]
	const argu4 = [2, 3, 7]
	t.deepEqual(argu2.mix(argu1, argu3, argu4), [2, 1, 5])
	t.deepEqual(argu2, [3, 4, 5])
	t.deepEqual(argu3, [3, 6, 7])
	t.deepEqual(argu4, [2, 3, 7])
})

test("array-diff", t => {
	const arr1 = [1, 2, 6, 7]
	const arr2 = [6, 7, 8, 9]
	t.deepEqual(arr1.diff(arr2), [1, 2])
	t.deepEqual(arr1, [1, 2, 6, 7])
	t.deepEqual(arr2, [6, 7, 8, 9])
})

test("array-partition", t => {
	const array = [2, 3, 4, 5, 6]
	const [even, odd] = array.partition(x => x % 2 === 0)
	t.deepEqual(even, [2, 4, 6])
	t.deepEqual(odd, [3, 5])
	t.deepEqual(array, [2, 3, 4, 5, 6])
})
