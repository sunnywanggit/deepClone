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

