function deepClone(source) {
  //判断source是不是一个对象
  if (source instanceof Object) {
    //如果source是一个数组
    let dist 
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

  }
  return source;
}
module.exports = deepClone;
