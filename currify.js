// modified from https://gist.github.com/rtm/96ca45ee4b30df36e40b

function currify(f) {                                                                     
  var len = f.length;                                                                     
                                                                                          
  return function _f() {                                                                  
    var old_args = arguments;                                                             
                                                                                          
    return function() {                                                                   
      var args = [].concat(Array.from(old_args), Array.from(arguments));
      return (args.length >= len ? f : _f).apply(this, args);                             
    };                                                                                    
  }();                                                                                    
}                                                                                         

module.exports = currify