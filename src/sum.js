module.exports = arr => {
  let sum = 0;
  for (let i = arr.length; i--;) sum+=arr[i];
  return sum;
}
