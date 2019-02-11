//Add a new movie to a list
const addForm = document.forms['add-movie'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  var value = addForm.querySelector('input[type="text"]').value;
  var li = document.createElement('li');
  var movieName = document.createElement('span');
  var deleteBtn = document.createElement('span');
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  deleteBtn.textContent =  'delete';
  movieName.textContent = value;
  movieName.classList.add('name');
  deleteBtn.classList.add('delete');
})



//Delete a movie from movie-list
var list = document.querySelector('#movie-list ul');

list.addEventListener('click', function(e){
if(e.target.className === 'delete'){ console.log(e.target);
const li = e.target.parentElement;
console.log(li);
li.parentNode.removeChild(li);
list.removeChild(li);
  }
});


//Hide the movie list
function showMe(i,b) {
var a= (b.checked) ? "none" : "block";
document.getElementById(i).style.display =a;
}


//Search a movie in given list
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
