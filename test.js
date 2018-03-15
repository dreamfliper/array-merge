import test from "ava"
import currify from "./currify"
import "./index"
import "./arrayDiff"

test("currify iteration old way", t => {
	let args = [],
		old_argument = [2, 3, 5],
		new_argument = [3, 2, 7, 3, 6]
	for (let i = 0, l = new_argument.length; i < l; i++)
		args[args.length] = new_argument[i]
	t.deepEqual(args, new_argument)
})

test("currify", t => {
	const add = currify((a, b, c, d) => a + b + c + d)
	t.is(add(1)(2)(3)(4), 10)
})

test("array-mix", t => {
	const array1 = [3, 4, 5],
		array2 = [4, 5, 6]
	t.deepEqual(array1.mix((x, y) => x + y, array2), [7, 9, 11])
	t.deepEqual(array1, [3, 4, 5])
	t.deepEqual(array2, [4, 5, 6])
})

test("array-mix-many", t => {
	const argu1 = (a, c, g) => a + c + g,
		argu2 = [3, 4, 5],
		argu3 = [3, 6, 7],
		argu4 = [2, 3, 7]
	t.deepEqual(argu2.mix(argu1, argu3, argu4), [8, 13, 19])
	t.deepEqual(argu2, [3, 4, 5])
	t.deepEqual(argu3, [3, 6, 7])
	t.deepEqual(argu4, [2, 3, 7])
})

test("array-diff", t => {
	const arr1 = [1, 2, 6, 7],
		arr2 = [6, 7, 8, 9]
	t.deepEqual(arr1.diff(arr2), [1, 2])
	t.deepEqual(arr1, [1, 2, 6, 7])
	t.deepEqual(arr2, [6, 7, 8, 9])
})
