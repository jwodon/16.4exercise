// 1

//Original
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

//Rest + arrow

function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
}

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)


//findMin

const findMin = (...arg) => Math.min(...arg)

//mergeObjects

function mergeObjects(obj1, obj2) {
    return mergedObj = {...obj1, ...obj2};
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//doubleAndReturnArgs

function doubleAndReturnArgs(arr, ...nums){ 
    return newArr = [arr, nums.map(num => num * 2) ]
}

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)]


//Slice and Dice

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const random = Math.floor(Math.random() * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
}

const removeRandom = items => {
    const random = Math.floor(Math.random() * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
}


/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}