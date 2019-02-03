var btns = document.querySelectorAll('#movie-list .delete');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li)
  });
});
