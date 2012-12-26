(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl'], factory);
  }
}(this, function(sasl) {

  describe('sasl', function() {
    
    it('should export Factory', function() {
      expect(sasl.Factory).to.be.a('function');
    });
    
    it('should export Factory via module', function() {
      expect(sasl).to.equal(sasl.Factory);
    });
    
  });
  
  return { name: 'test.sasl' };
  
}));
