# type-checking

type-checking for string, number, function and array.

## isNumber

```
  isNumber(0)                // true
  isNumber(1)                // true
  isNumber(-1)               // true
  isNumber(NaN)              // true
  isNumber(Infinity)         // true
  isNumber("0")              // false
  isNumber("1")              // false
  isNumber("-1")             // false
  isNumber(null)             // false
  isNumber(true)             // false
  isNumber(false)            // false
  isNumber(undefined)        // false
```

## isString

```
  isString("")               // true
  isString("true")           // true
  isString("false")          // true
  isString("1")              // true
  isString("0")              // true
  isString(new String())     // true
  isString(new String(""))   // true
  isString(new String(null)) // true
  isString(0)                // false
  isString(1)                // false
  isString(-1)               // false
  isString(null)             // false
  isString(undefined)        // false
```

## isFunction

```
  isFunction(->)             // true
  isFunction(-> false)       // true
  isFunction(-> true)        // true
  isFunction(null)           // false
  isFunction(undefined)      // false
```

## isArray

```
  isArray([])                // true
  isArray(new Array)         // true
  isArray(null)              // false
  isArray(undefined)         // false
```
