anime({
  targets: '.anime .box',
  translateX: 250,
  loop: true,
});

var elements = document.querySelectorAll('.js-select .box');

anime({
  targets: elements,
  translateX: [0, 250 , 0],
  loop:  true,
});

var logEl = document.querySelector('.battery-log');

var battery = {
  charged: '0%',
  cycles: 120
};

anime({
  targets: battery,
  charged: '100%',
  cycles: 130,
  learning: 'animejs',
  round: 1,
  easing: 'linear',
  loop: true,
  delay: 500,
  update: function() {
    logEl.innerHTML = JSON.stringify(battery);
  }
});

//mixed-array-demo
var el = document.querySelector('.mixed-array-demo .el-01');

anime({
  targets: [el, '.mixed-array-demo .el-02', '.mixed-array-demo .el-03'],
  translateX: 250,
  loop: true,
  borderRadius: '50%',
})