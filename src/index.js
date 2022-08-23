document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form= document.querySelector('form')
 form.addEventListener('submit', (e)=> {
  e.preventDefault()
  buildEvents(e.target.newtaskdescription.value)
  form.reset()
 })
});
