const main = require('../../dist/main.cjs')

const out = { 'success-umd': 'bar' === main.foo }
console.log(out)