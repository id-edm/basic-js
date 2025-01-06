const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!")
    }

    let codeText = []

    message = message.toUpperCase().split('').map(asciiCode)
    key = key.toUpperCase().split('').map(asciiCode)

    function asciiCode(el) {
      let char = el.charCodeAt()
      return char
    }

    function char(el) {
      return String.fromCharCode(el)
    }

    let i = 0
    let j = 0

    while (i < message.length) {
      if (/[A-Z]/.test(String.fromCharCode(message[i]))) {
        let number = Math.abs(key[j] - 65)
        let letter = message[i] + number
        if (letter > 90) {
          letter = letter - 90 + 64
          codeText.push(letter)
        } else {
          codeText.push(letter)
        }
        j++
      } else {
        codeText.push(message[i])
      }
      i++
      if (j >= key.length) {
        j = 0
      }
    }
    if (!this.mode) {
      return codeText.map(char).reverse().join('')
    }

    return codeText.map(char).join('')
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!")
    }

    let codeText = []

    message = message.toUpperCase().split('').map(asciiCode)
    key = key.toUpperCase().split('').map(asciiCode)

    function asciiCode(el) {
      let char = el.charCodeAt()
      return char
    }

    function char(el) {
      return String.fromCharCode(el)
    }

    let i = 0; let j = 0
    while (i < message.length) {
      if (/[A-Z]/.test(String.fromCharCode(message[i]))) {
        let letter
        let number = Math.abs((message[i] - key[j]) + 65)
        if (number < 65) {
          letter = 91 - (65 - number)
          codeText.push(letter)
        } else {
          letter = number
          codeText.push(letter)
        }
        j++
      } else {
        codeText.push(message[i])
      }
      i++
      if (j >= key.length) {
        j = 0
      }
    }
    if (!this.mode) {
      return codeText.map(char).reverse().join('')
    }

    return codeText.map(char).join('')
  }
}

module.exports = {
  VigenereCipheringMachine
}
