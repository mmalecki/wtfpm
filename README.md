# wtfpm
Detect common package managers.

## Usage
```js
var wtfpm = require('wtfpm');
wtfpm(function (err, managers) {
  if (err) throw err;
  console.log(managers);
});
```
