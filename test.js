const tree = { a: 1, b: 1, c: { a1: 1, b1: 2 }, d: { a1: 1, b1: 1 } };

// const falt = (tree) => {
//   return Object.values(tree).flatMap((e) => {
//     if (typeof e === 'number') {
//       return e;
//     } else {
//       return falt(e);
//     }
//   });
// };

const falt = (tree) => {
  return Object.values(tree).flatMap((e) => {
    return typeof e === 'object' ? falt(e) : [e];
  });
};

const allUnique = (obj) => {
  let unique = new Set(falt(obj));
  console.log(unique);
  return unique.size === 1;
};

console.log(allUnique(tree));
