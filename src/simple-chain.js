const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)

    return this
  },
  removeLink(position) {
    if (
      position - 1 < 0 ||
      typeof position !== "number" ||
      position > this.arr.length
    ) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }

    this.arr.splice(position - 1, 1)

    return this
  },
  reverseChain() {
    this.arr.reverse()

    return this
  },
  finishChain() {
    let finish = this.arr.join('~~')
    this.arr = []
    
    return finish
  }
}

module.exports = {
  chainMaker
}
