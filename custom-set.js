function CustomSet(arr) {
  this.arr = arr;
}

CustomSet.prototype.eql = function(newArr) {
  var arr1 = this.arr.sort();
  var arr2 = newArr.arr.sort();
  var count = 0;

  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        count++;
      }
      if (count === arr1.length) {
        return true;
      }
    }
  } else {
    return false;
  }
}

CustomSet.prototype.delete = function(num) {
  for (var i = 0; i < this.arr.length; i++) {
    if (this.arr[i] === num) {
      this.arr.splice(i, 1);
    }
  }
  return this;
}

CustomSet.prototype.difference = function(diffArr) {
  var firstArr = this.arr;
  var diffArr = diffArr.arr;

  for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < diffArr.length; j++) {
      if (firstArr[i] === diffArr[j]) {
        firstArr.splice(i, 1);
      }
    }
  }
  return this;
}

module.exports = CustomSet;
