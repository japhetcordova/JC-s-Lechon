const fiveSec = document.getElementById("time");
const button = document.getElementById("buyButton"); 
const placement = document.getElementById("buttonContainer");
const numReport = document.getElementById("report");

let numberOfOrders = 10;
numReport.textContent = "Number of orders: " + numberOfOrders;


let newButtonAdded = false;
let cancel = false;

button.addEventListener('click', () => {
    button.disabled = true;

    if(newButtonAdded == false){
        const newButton = document.createElement('button');
        newButton.textContent = 'Cancel';

        placement.appendChild(newButton);
        newButtonAdded = true;

        newButton.addEventListener('click', () => {
        cancel = true;
        newButton.remove();
        newButtonAdded = false;

        button.disabled = false;    
        })
        
        for(let i = 5 ; i >= 0 ; i--){
        setTimeout(()=>{
            if(cancel == true){
                fiveSec.textContent = "Product was cancelled";
                return;
            }
            fiveSec.textContent = "Timer: " + i + "sec";
            console.log(i)
            if(i == 0){
                fiveSec.textContent = "You have successfully ordered the Product!"
                newButton.remove();
                numberOfOrders++;
                numReport.textContent = "Number of orders: " + numberOfOrders;  
                // increment number of total orders and also number of the ordered product. how to store it? 
            }
        }, ( 5 - i ) * 1000); cancel = false;
    }
    } 
    
    
})


