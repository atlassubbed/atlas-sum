module.exports = arr => {
  let sum;
  for (let i = arr.length; i--;) sum+=arr[i];
  return sum;
}
