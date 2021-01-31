const array = ["hello", "world", 23, "23", null];

const filterBy = (array, type) => array.filter(arr => typeof array !== type);

console.log(filterBy( array, "boolean"))