var huanghun666 = {
  chunk: function(array,size) {
    var result = []
    var len = array.length
    for (var i = 0; i< len; i+= size) {
        result.push(array.slice(i,i+size))
    }
    return result
  },

  compact: function(array) {
    var result = []
    for (var i =0; i <array.length; i++) {
      if (Boolean(array[i])) {
        result.push(array[i])
      }
    }
    return result
  },
  concat: function(array,...value) {
    var result = []
    for(var item of array){
      result.push(item)
    }
    for(var item of value) {
      if(Array.isArray(item)) {
        result.push(...item)
      }else {
        result.push(item)
      }
    }
    return result
  },

  difference: function(array, ...values) {
    return array.filter(item => ![].concat(...values).includes(item))
  },

  differenceBy: function(array, values, iteratee= huanghun666.identity) {
    var init = huanghun666.iteratee(iteratee)
    var valuetwo = values.map(it => init(it))
    return array.filter(item => !valuetwo(init(item)))
  },
  differenceWith: function(array, values, comparator) {
      return array.filter(function(item) {
        for (var i = 0; i < values.length; i++) {
            return !comparator(item, values[i])
        }
    })
  },


  iteratee: function(sorthand = huanghun666.identity) {
    if (typeof sorthand === "function") {
      return sorthand
    }
    if (typeof sorthand === "string") {
      return this.property(sorthand)
    }
    if (Array.isArray(sorthand)) {
      return this.matchesProperty(sorthand)
    }
    if (typeof sorthand === "object") {
      return this.matches(sorthand)
    }
  },
  
  drop:function(array,n=1) {
    return array.slice(n)
  },
  dropRight:function(array,n=1) {
    return array.reverse().slice(n).reverse()
  },
  dropRightWhile: function(array, predicate=huanghun666.identity) {
    var temp = this.iteratee(predicate)
    for (var i = array.length-1; i >= 0; i--) {
      if (!temp(array[i])) {
        return array.splice(0,i+1)//i以后都是真值。。。
      }
    }
  },
  
  dropWhile: function(array, predicate=huanghun666.identity) {
    var temp = this.iteratee(predicate)
    for (var i = 0; i <array.length; i++) {
      if (!temp(array[i])) {
        return array.splice(i)//i以后都是假值。。。
      }
    }
  },

  
  fill:function(array, value, start=0, end=array.length) {
    for (var i = start; i <end; i++) {
      array[i] =value
    }
      return array
  },
  findIndex:function(array, predicate=huanghun666.identity, fromIndex=0) {
        var temp = this.iteratee(predicate)
    for (var i = fromIndex; i <array.length; i++) {
      if (temp(array[i])) {
        return i
      }
    }
  },
  findLastIndex(array, predicate=huanghun666.identity, fromIndex=array.length-1) {
    var temp = this.iteratee(predicate)
    for (var i = fromIndex; i >=0; i--) {
      if (temp(array[i])) {
        return i
      }
    }
      return -1
  },


  flatten: function(array) {
    return [].concat(...array)
  },


  flattenDeep: function(array) {
    return this.flattenDepth(array, Infinity)
  },

  flattenDepth: function(ary, depth = 1) {
    if (depth === 0) {
      return ary.slice()
    }
    var res = []

    for(var i = 0;i<ary.length;i++) {
      if (Array.isArray(ary[i])) {
        var tmp = this.flattenDepth(ary[i], depth - 1)
        res = [...res,...tmp]
      } else {
        res.push(ary[i])
      }
    }
    return res
  },


  fromPairs: function(pairs) {
    var result ={}
    for (var i = 0; i <pairs.length; i++) {
      result[pairs[i][0]] = pairs[i][1]
    }
      return result
  },
  head: function(array) {
    return array[0]
  },
  indexOf: function(array, value, fromIndex=0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
     return -1
  },
  initial: function(array) {
    var result= array.splice(array.length-1,1)
    return array
  },

  intersection:function(...arrays) {
    var result = []
    arguments[0].forEach(value => {
      if (arguments[1].indexOf(value) !== -1) {
        result.push(value)
      }
    })
    return result
  },

  intersectionBy(arrays, iteratee=huanghun666.identity) {
    var result = []
    var temp = this.iteratee(iteratee)
    temp(arguments[0].forEach(value => {
      if (arguments[1].indexOf(value) !== -1) {
        result.push(value)
      }
    }))
    return result
  },

  join:function(array, separator=',') {
    var result = '' + array[0]
    for (var i = 1; i < array.length; i++) {
        result += String(separator) + array[i]
    }
    return result
  },

  last:function(array) {
    return array[array.length-1]
  },
  
  lastIndexOf: function(array, value, fromIndex=array.length-1) {
    for (var i = fromIndex; i >=0; i--) {
      if (array[i] === value) {
        return i
      }
    }
     return -1
  },
  
  nth:function(array, n=0) {
    for (var i = 0; i <array.length; i++) {
      if (n>=0) {
        if (i = n) {
          return array[i]
        } 
      } else{
          if (i = array.length-Math.abs(n)) {
            return array[i]
          } 
        }
    }
  },
  pull:function(array, ...values) {
    
  },

  matchesProperty: function(path, srcValue) {
   var ary = [].concat(path, srcValue)
   return this.matches(this.fromPairs([ary]))
  },

  sumBy: function(array, iteratee= huanghun666.identity) {
    var result = 0
    iteratee = huanghun666.iteratee(iteratee)
    for (var i = 0; i <array.length; i++) {
      result += iteratee(array[i])
    }
    return result
  },

  sum: function(array) {
    return this.sumBy(array,item =>item)
  },

  identity: function(value) {
    return value
  },

  matches: function(src) {
    return function(obj) {
      for (var key in src) {
        if (src[key] !== obj[key]) {
          return false 
        }
      }
        return true
    }
  },

  property: function(path) {
    return function(obj) {
      return obj[path]
    }
  },
  negate: function(func) {
      return function(...args) {
        return !func()
      }
  },
  groupBy:function(ary, predicate) {
    var map = {}

    for(var item of ary) {
      var key = predicate(item)
      if (key in map) {
        map[key].push(item)
      } else {
        map[key] = [item]
      }
    }

      return map
  },

  flip: function(func) {
      return function(...args) {
        return func(...args.reverse())
      }
  },
  bind: function(func,...args) {
      return function(...fixedargs) {
        return func(...fixedargs,...args)
      }
  },

  after: function(n,func) {
    var conter =0
      return function() {
        conter++
        if (c>=n) {
          return func()
        }
      }
  },
  before: function(n,func) {
    var conter =0
      return function() {
        conter++
        if (c>=n) {
          return func()
        }
      }
  },

}
