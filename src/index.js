document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form =document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault ()
    const formInput = e.target.querySelector ("input[type='text']").value;
    console.log(formInput);
    listTodo(formInput)

  })
});
function listTodo(Todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', function(e){
    e.target.parentNode.remove
  })
  btn.textContent = 'x'
  li.textContent = `${Todo} `;
  li.appendChild(btn)
  li.textContent = Todo;
  document.querySelector('#tasks').appendChild(li)
  
}
