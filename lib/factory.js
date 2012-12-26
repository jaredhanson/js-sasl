(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports, module);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'module'], factory);
  }
}(this, function(exports, module) {
  
  function Factory() {
    this._mechs = [];
  }
  
  Factory.prototype.use = function(name, mech) {
    if (!mech) {
      mech = name;
      name = mech.prototype.name;
    }
    this._mechs.push({ name: name, mech: mech });
    return this;
  };
  
  Factory.prototype.create = function(mechs) {
    for (var i = 0, len = mechs.length; i < len; i++) {
      for (var j = 0, jlen = this._mechs.length; j < jlen; j++) {
        var entry = this._mechs[j];
        if (entry.name == mechs[i]) {
          return new entry.mech();
        }
      }
    }
    return null;
  };

  exports = module.exports = Factory;
  
}));
