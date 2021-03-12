let sum_overlap = 0;
let sum_different = 0;
function overlap() {
  const arr_overlap = arr.filter((el) => {
    return arr2.includes(el);
  });
  const arr_diff_init = arr.filter((el, i) => {
    return !arr2.includes(el);
  });
  const arr_different = [
    ...arr_diff_init,
    ...arr2.filter((el) => {
      return !arr.includes(el);
    }),
  ];
  arr_overlap.forEach((e) => {
    return (sum_overlap += e * 2);
  });
  arr_different.forEach((e) => {
    return (sum_different += e);
  });
  console.log(sum_overlap);
  console.log(sum_different);
}
const arr = [8, 2, 3];
const arr2 = [1, 2, 4, 5];
overlap(arr, arr2);
