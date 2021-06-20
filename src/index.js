class DeepClone {
  constructor() {
    // 缓存变量，用来检测环引用
    // 之所以放在构造器中，是为了解决 catch 被全局共享，造成互相污染的问题
    this.cache = [];
  }
  clone(source) {
    if (source instanceof Object) {
      let cachedDist = this.findCache(source);
      if (cachedDist) {
        return cachedDist;
      } else {
        let dist;
        if (source instanceof Array) {
          dist = new Array();
        } else if (source instanceof Function) {
          dist = function() {
            return source.apply(this, arguments);
          };
        } else if (source instanceof RegExp) {
          dist = new RegExp(source.source, source.flags);
        } else if (source instanceof Date) {
          dist = new Date(source);
        } else {
          dist = new Object();
        }
        // 这里在存入的时候，原来的”环节点“和复制后的”环节点”都需要存入
        this.cache.push([source, dist]);
        for (let key in source) {
          // 这里的操作是为了避免拷贝原型上的属性
          if (source.hasOwnProperty(key)) {
            dist[key] = this.clone(source[key]);
          }
        }

        return dist;
      }
    }
    return source;
  }
  findCache(source) {
    for (let i = 0; i < this.cache.length; i++) {
      // 我们在检测环引用的时候，要检测的是原来的“环节点”而要抛出的是复制后的“环节点”
      // 这里如果还不是特别理解的话，下来可以画一张图好好理解一下
      if (this.cache[i][0] === source) {
        return this.cache[i][1];
      }
    }
    return undefined;
  }
}

module.exports = DeepClone;
