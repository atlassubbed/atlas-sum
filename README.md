# atlas-sum

Calculate the sum of a set of data points.

[![Travis](https://img.shields.io/travis/atlassubbed/atlas-sum.svg)](https://travis-ci.org/atlassubbed/atlas-sum)

---

## install

```
npm install --save atlas-sum
```

## why

Breaking up [atlas-dataset](https://github.com/atlassubbed/atlas-dataset#readme) into standalone functions. This module sums over an array of numbers:

<p align="center">
  <img alt="sum(V) = sum[i=1 -> |V|](v_i)" src="docs/sum.png">
</p>

## examples

```javascript
const sum = require("atlas-sum")
console.log(sum([1,2,3,4]))
// 10
```
