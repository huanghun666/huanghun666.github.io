var huanghun666 = {
  chunk: function(array,size) {
    var result = []
    var len = array.length
    for (var i = 0; i< len; i+= size) {
        result.push(array.slice(i,i+size))
    }
    return result
  }





}
