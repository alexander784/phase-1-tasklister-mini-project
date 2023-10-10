document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form =document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault ()
    const formInput = e.target.querySelector ("input[type='text']").value;
    console.log(formInput);

  })
});
function listTodo(Todo) {
  let li = document.createElement('li');

  li.textContent = Todo;
  document.querySelector('#tasks').appendChild(li)
  
}
