var obj = arr.reduce(function(o, v, i) {
  o[i] = v;
  return o;
}, {});
