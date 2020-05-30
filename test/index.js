const chai = require("chai")
const sinon = require("sinon")
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

const assert = chai.assert;

const deepClone = require("../src/index")

describe('基本数据类型测试用例', () => {

    it("可以克隆数字",()=>{
        const n1 = 132
        const n2 = deepClone(n1)
        assert(n1 === n2)
    })

    it("可以克隆字符串",()=>{
        const n1 = '132'
        const n2 = deepClone(n1)
        assert(n1 === n2)
    })

    it("可以克隆布尔类型",()=>{
        const n1 = true
        const n2 = deepClone(n1)
        assert(n1 === n2)
    })

    it("可以克隆undefined",()=>{
        const n1 = undefined
        const n2 = deepClone(n1)
        assert(n1 === n2)
    })

    it("可以克隆null",()=>{
        const n1 = undefined
        const n2 = deepClone(n1)
        assert(n1 === n2)
    })

    it("可以克隆Symbol",()=>{
        const n1 = Symbol()
        const n2 = deepClone(n1)
        assert(n1 === n2)
    })
})

describe('引用数据类型测试用例', () => {
    it("能够复制普通对象",()=>{
        const n1 = {name:'wangzhen',child:{name:'little'}}
        const n2 = deepClone(n1)
        assert(n1 !== n2)
        assert(n1.name === n2.name)
        assert(n1.child !== n2.child)
        assert(n1.child.name === n2.child.name)
    })
    it("能够复制数组对象",()=>{
        const n1 = [[11,12],[21,22],[31,32]]
        const n2 = deepClone(n1)
        assert(n1 !== n2)
        assert(n1[0] !== n2[0])
        assert(n1[1] !== n2[1])
        assert(n1[2] !== n2[2])
        assert.deepEqual(n1,n2)
    })

    it("能够复制函数",()=>{
        const n1 = function(x,y){return x+y}
        n1.xxx = {yyy:{zzz:111}}

        const n2 = deepClone(n1)
        assert(n1 !== n2)
        assert(n1.xxx.yyy.zzz === n2.xxx.yyy.zzz)
        assert(n1.xxx.yyy !== n2.xxx.yyy)
        assert(n1.xxx !== n2.xxx)
        //期待函数运行的结果完全一样
        assert(n1(1,2) === n2(1,2))
    })

    it("检测环引用",()=>{
        const n1 = {name:'wang'}
        n1.self = n1
        const n2 = deepClone(n1)
        assert(n1 !== n2)
        assert(n1.name === n2.name)
        assert(n1.self !== n2.self)
    })
  
})


