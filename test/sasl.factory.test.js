(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl/lib/factory'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl/lib/factory'], factory);
  }
}(this, function(Factory) {

  // mocks
  function FooMechanism() {
  }
  FooMechanism.prototype.name = 'FOO';
  
  function BarMechanism() {
  }
  BarMechanism.prototype.name = 'BAR';
  
  
  describe('Factory', function() {
    var factory = new Factory();
    
    describe('.use()', function() {
      it('should be chainable', function() {
        expect(factory.use(FooMechanism)).to.equal(factory);
      });
    });
  });
  
  describe('Factory with no mechanisms', function() {
    var factory = new Factory();
    
    it('should not create an unsupported mechanism', function() {
      expect(factory.create(['FOO'])).to.equal(null);
    });
  });
  
  describe('Factory with FOO mechanism', function() {
    var factory = new Factory();
    factory.use(FooMechanism);
    
    it('should create a supported mechanism', function() {
      expect(factory.create(['FOO'])).to.be.an.instanceOf(FooMechanism);
    });
    
    it('should create a supported mechanism from second preference', function() {
      expect(factory.create(['BAR', 'FOO'])).to.be.an.instanceOf(FooMechanism);
    });
    
    it('should not create an unsupported mechanism', function() {
      expect(factory.create(['BAR'])).to.equal(null);
    });
  });
  
  describe('Factory with FOO and BAR mechanisms', function() {
    var factory = new Factory();
    factory.use(FooMechanism);
    factory.use(BarMechanism);
    
    it('should create a supported mechanism', function() {
      expect(factory.create(['FOO'])).to.be.an.instanceOf(FooMechanism);
    });
    
    it('should create a supported mechanism from first preference', function() {
      expect(factory.create(['BAR', 'FOO'])).to.be.an.instanceOf(BarMechanism);
    });
  });
  
  describe('Factory with named XFOO mechanism', function() {
    var factory = new Factory();
    factory.use('XFOO', FooMechanism);
    
    it('should create a supported mechanism', function() {
      expect(factory.create(['XFOO'])).to.be.an.instanceOf(FooMechanism);
    });
    
    it('should not create an unsupported mechanism', function() {
      expect(factory.create(['FOO'])).to.equal(null);
    });
  });
  
  return { name: 'test.sasl.factory' };
  
}));
