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
    var copyvalue = values.map(item =>init(item))
    return array.filter(item => !copyvalue(init(item)))
  },

  iteratee: function(sorthand =huanghun666.identity) {
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

  
  fill:function(array, value, start=0, end=array.length) {
    for (var i = start; i <end; i++) {
      array[i] =value
    }
      return array
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
    
  },

  matchesProperty: function(path, srcValue) {
   var ary = [].concat(path, srcValue)
   return this.matches(this.fromPairs([ary]))
  },

  sumBy: function(array, iteratee= huanghun666.identity) {
    var result = 0
    iteratee = this.iteratee(iteratee)
    for (var i = 0; i <array.length; i++) {
      result += this.iteratee(array[i])
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
