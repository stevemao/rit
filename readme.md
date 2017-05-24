Say you have `index.js` in your CWD:

```js
module.exports = function() {
  console.log('here')
}

module.exports.test = function() {
  console.log('test')
}

module.exports.args = function(args) {
  console.log(args)
}
```

```
$ rit
here

$ rit . test
test

$ rit ./ args --test=1
{ test: 1 }

$ rit ./index.js args --test=1 --test=2
{ test: [ 1, 2 ] }

$ rit ./index.js args --test=1 --test2=2
{ test: 1, test2: 2 }

$ rit ./index.js args --test=1 --test2=2 --ya 42
{ test: 1, test2: 2, ya: 42 }
```
