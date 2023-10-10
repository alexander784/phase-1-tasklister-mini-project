document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form =document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault ()
    const formInput = e.target.querySelector ("input[type='text']").value;
    console.log(formInput);
  })
});
