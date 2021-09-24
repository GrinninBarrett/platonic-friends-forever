document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});