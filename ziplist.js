function zipList(list1, list2) {
  const newArray = [];
  let listNum = list2.length;
  if (list1.length < list2.length) {
    listNum = list1.length;
  }

  for (let i = 0; i < listNum; i++) {
    newArray.push(list1[i]);
    newArray.push(list2[i]);
  }

  newArray.push(...list1.slice(listNum));
  newArray.push(...list2.slice(listNum));
  return newArray;

}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipListTheSimpleWay(list1, list2))
console.log(zipList(list1, list2))