var btns = document.querySelectorAll('#movie-list .delete');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li)
  });
});

var list = document.querySelectorAll('#movie-list ul');

const addForm = document.forms['add-movie'];

addForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;

  const li = document.createElement('li');
  const movieName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  deleteBtn.textContent = 'delete';
  movieName.textContent = value;

  movieName.classList.add('name');
  deleteBtn.classList.add('delete');
})
