const textField = document.getElementById("inputName");
const buttonDone = document.getElementById("done");
const heading = document.getElementById("name");

buttonDone.addEventListener('click', () =>{
    localStorage.setItem("Name", textField.value);
    heading.textContent = localStorage.getItem("Name");
})

const storedName = localStorage.getItem("Name");
if(storedName){
    heading.textContent = storedName;
}