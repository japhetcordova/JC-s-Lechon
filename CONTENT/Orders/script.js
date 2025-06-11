const fiveSec = document.getElementById("time");
const button = document.getElementById("buyButton"); 
const placement = document.getElementById("buttonContainer");

button.addEventListener('click', () => {

    const newButton = document.createElement('button');
    newButton.textContent = 'Cancel';
    document.body.appendChild(newButton);

    for(let i = 5 ; i >= 0 ; i--){
        setTimeout(()=>{
            fiveSec.textContent = "Timer: " + i + "sec";
            console.log(i)
            if(i == 0){
                fiveSec.textContent = "You have successfully ordered the Product!"
            }
        }, (5 - i ) * 1000);
        
    }
    
})

