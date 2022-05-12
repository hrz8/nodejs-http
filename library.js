var os = require('os');

var nama = 'lolol'

function printPlatform() {
  console.log('operating system platform: ' + os.platform())
}

function anotherFunction() {
  console.log('apalah')
}

module.exports = {
  printPlatform,
  anotherFunction,
  nama
}