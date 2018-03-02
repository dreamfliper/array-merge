# Array-Merge

## Usage

Take next section's data as example:

```js
articles.merge(authors, (article, author) => ({...article, ...author}) )

// if you only need some of the properties

articles.merge(authors, ({id}, {name}) => ({id, name}))
```

## Motivation

In Function Programming, it's common to use array as data stream for piping functions. For example:

```js
[
  {
    title:'There is nothing',
    id:'24'
  },{
    title:'Learning Chinese',
    id:'35'
  }
].map(x => x.title).map(x => console.log(x))

```

In native javascript array prototype, there is no something like mixing two array with callback. Of course you can achieve this by using `Array.prototype.reduce`, but the syntax would be a little awkward. For example:

```js
let articles = [
  {
    titile:'There is nothing',
    id:'24'
  },
  ...
];
let authors = [
  {
    name:'Tom'
  },
  ...
];

//let's assume these data has sorted by back-end, all we need is to mix these two array by order

articles.reduce((accumulator, element, index) => {
    accumulator[index].name = authors[index].name
    return accumulator
}, authors)
```

In this case, code doesn't look like FP, specially when it involved `index`.  You can also archieve this by using `map` or `for... of`. In my imagenation, a proper syntax would be like `array1.merge(array2, callbackHandler)`.

The matter of injecting as a prototype function instead of normal function is this won't break array-function piping. For example:

```js
array
  .map(x => x.value)
  .filter(x => x > 50)
  .merge(array2, (x, y) => x * y)
  .reduce((acc, ele) => acc + ele ,0)

//rather than

let temp = MergeArrays(
    array.map(x=>x.value).filter(x=>x>50), 
    array2,
    (x,y) => x*y )
temp.reduce((acc, ele) => acc + ele, 0)
```

