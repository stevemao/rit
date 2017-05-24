#!/usr/bin/env node
'use strict'
const argv = require('minimist')(process.argv.slice(2))
const resolve = require('path').resolve;

let modulePath = argv._[0]

if (!modulePath) {
  modulePath = './'
}

let m

try {
  m = require(resolve(process.cwd(), modulePath))
} catch (e) {
  console.error(`Cannot find module ${argv._[0]}`)
  process.exit(1)
}

const args = Object.keys(argv).reduce((result, key) => {
  if (key !== '_') {
     result[key] = argv[key];
  }
  return result;
}, {});

const func = argv._[1]
if (!func) {
  return m(args)
}

if (typeof m[func] !== 'function') {
  console.error(`${func} is not an exported function
Did forget to you export it?`)
  process.exit(1)
}

return m[func](args)
