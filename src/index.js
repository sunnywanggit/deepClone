function deepClone(source) {
  //判断source是不是一个对象
  if (source instanceof Object) {
    //如果source是一个数组
    if (source instanceof Array) {
      const dist = new Array();
      for (let key in source) {
        dist[key] = deepClone(source[key]);
      }
      return dist;
      //如果source是一个函数
    } else if (source instanceof Function) {
      const dist = function () {
        return source.apply(this, arguments);
      };

      for (let key in source) {
        dist[key] = deepClone(source[key]);
      }
      return dist;
    } else {
      const dist = new Object();
      for (let key in source) {
        dist[key] = deepClone(source[key]);
      }
      return dist;
    }
  }
  return source;
}
module.exports = deepClone;
