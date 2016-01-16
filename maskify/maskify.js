/*
  Hide your sensitive data.
*/

// return masked string
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

// return masked string
function maskify2(cc, cvc) {
  return cc.slice(0, -cvc).replace(/./g, '#') + cc.slice(-cvc);
}

// return masked string
function maskify3(cc) {
  var result = [];
  if (cc.length < 5)
    return cc;
  else {
    for (var i=0; i<cc.length; i++) {
      if (i >= cc.length-4)
        result.push(cc[i]);
      else
        result.push('#');
    }
  }
  return result.join('');
}
