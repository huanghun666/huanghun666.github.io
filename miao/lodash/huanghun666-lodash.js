var huanghun666 = {
  chunk: function(Array,size) {
    var result = []
    var len = array.length
    for (var i = 0; i< len; i+= size) {
        result.push(Array.slice(i,i+size))
    }
    return result
  }





}
