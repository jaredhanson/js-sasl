var Harness = require('mocha-cloud')
  , Canvas = require('term-canvas')
  , GridView = require('mocha-cloud-grid-view')
  , size = process.stdout.getWindowSize();

var harness = new Harness('sasl', process.env['SAUCE_LABS_USERNAME'], process.env['SAUCE_LABS_ACCESS_KEY']);

harness.browser('chrome', '', 'Mac 10.8');
harness.browser('chrome', '', 'Mac 10.6');

harness.url('http://localhost:7070/');


var canvas = new Canvas(size[0], size[1]);
var ctx = canvas.getContext('2d');
var grid = new GridView(harness, ctx);
grid.size(canvas.width, canvas.height);
ctx.hideCursor();

process.on('SIGINT', function(){
  ctx.reset();
  process.nextTick(function(){
    process.exit();
  });
});

harness.start(function(){
  grid.showFailures();
  setTimeout(function(){
    ctx.showCursor();
    process.exit(grid.totalFailures());
  }, 100);
});
