import * as main from '../../dist/main.js'

const out = { 'success-esm': 'bar' === main.foo }
console.log(out)