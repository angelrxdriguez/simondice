window.addEventListener('scroll', function(e) {
    window.scrollTo(0, 0);
  }, { passive: false });
  
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
  }, { passive: false });
  
  window.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
  
  window.addEventListener('keydown', function(e) {
    const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
    if (keys.includes(e.keyCode)) {
      e.preventDefault();
    }
  }, false);