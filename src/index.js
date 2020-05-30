//为了避免出现循环拷贝的问题，我们维护一个数组，把所有出现过的对象全部放进去
let cache = [];

function deepClone(source) {
  //判断source是不是一个对象
  if (source instanceof Object) {
    //如果对象在缓存中，说明我们之前拷贝过这个对象，直接return
    if (cache.indexOf(source) >= 0) {
      return source;
    } else {
      cache.push(source);
    }

    //如果source是一个数组
    let dist;
    if (source instanceof Array) {
      dist = new Array();
      //如果source是一个函数
    } else if (source instanceof Function) {
      dist = function () {
        return source.apply(this, arguments);
      };
    } else {
      dist = new Object();
    }

    for (let key in source) {
      dist[key] = deepClone(source[key]);
    }
    return dist;
  } else {
    return source;
  }
}

module.exports = deepClone;
