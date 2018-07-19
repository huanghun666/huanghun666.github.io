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

  differenceBy: function(array, values, iteratee) {
    var init = huanghun666.iteratee(iteratee)
    let copyvalue = values.map(item =>init(item))
    return array.filter(item => !copyvalue(init(item)))
  },

  iteratee: function(sorthand) {
    if (typeof sorthand === "function") {
      return sorthand
    }
    if (typeof sorthand === "string") {
      return matches(sorthand)
    }
    if (Array.isArray(sorthand)) {
      return matchesProperty(sorthand)
    }
    if (typeof sorthand === "object") {
      return matches(sorthand)
    }
  },
  drop:function(array,n=1) {
    return array.slice(n)
  },
  dropRight:function(array,n=1) {
    return array.reverse().slice(n)
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
    return this.flattenDepth(array, 0)
  },

  flattenDepth: function(ary, depth = 1) {
    if (depth === 0) {
      return ary.slice(...ary)
    }
    var result = []

    for(var i = 0;i<ary.length;i++) {
      if (Array.isArray(ary[i])) {
        var tmp = this.flattenDepth(ary[i], depth - 1)
        result = [...result, ...tmp]
      } else {
        result.push(ary[i])
      }
    }
    return result
  },


  fromPairs: function(pairs) {

  },

  matchesProperty: function(path, srcValue) {
    return function(obj) {

    }
  },

  sumBy: function(array, iteratee) {
    var result = 0
    for (var i = 0; i <array.length; i++) {
      result += this.iteratee(array[i])
    }
    return result
  },

  sum: function(array) {
    return this.sumBy(array,item =>item)
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
  negate: function(func) {
      return function(...args) {
        return !func()
      }
  },
  



}
