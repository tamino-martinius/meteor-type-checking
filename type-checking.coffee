@isNumber = (object) -> typeof object is "number"
@isString = (object) -> typeof object is "string" or Object::toString.call(object) is "[object String]"
@isFunction = (object) -> typeof object is "function"
@isArray = (object) -> Object::toString.call(object) is "[object Array]"