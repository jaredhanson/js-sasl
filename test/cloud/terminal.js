var Cloud = require('mocha-cloud')
  , Canvas = require('term-canvas')
  , GridView = require('mocha-cloud-grid-view')
  , size = process.stdout.getWindowSize();


var Cloud = require('mocha-cloud');

var cloud = new Cloud('sasl', process.env['SAUCE_LABS_USERNAME'], process.env['SAUCE_LABS_ACCESS_KEY']);
cloud.url('http://localhost:7070/');

cloud.browser('chrome', '', 'Mac 10.8');
cloud.browser('chrome', '', 'Mac 10.6');


var canvas = new Canvas(size[0], size[1]);
var ctx = canvas.getContext('2d');
var grid = new GridView(cloud, ctx);
grid.size(canvas.width, canvas.height);
ctx.hideCursor();

process.on('SIGINT', function(){
  ctx.reset();
  process.nextTick(function(){
    process.exit();
  });
});

cloud.start(function(){
  grid.showFailures();
  setTimeout(function(){
    ctx.showCursor();
    process.exit(grid.totalFailures());
  }, 100);
});
