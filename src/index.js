import './less/index.less'

// Your code goes here!


//keydown /// console logs keystrokes
function escKey(event, key) { 
   
    if (event.key === "Escape") {
        console.log(`Are you sure?`)
    } else {
        console.log(event.key);
    }
}

document.addEventListener("keydown", escKey);


//Load makes sure everything is created before DOM runs

window.onload = function (event) { 
 //console.log(`event ${event.type} fired! Ready to go!`);
const heading = document.querySelector('h1')
//console.log(heading);
heading.textContent = "Great Googly Moogly!"

//using copy event
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text;
    })
})    

    //click 
    document.body.addEventListener('click', event => {
        event.target.classList.toggle('mirror');
})

//dblclick
document.body.addEventListener('dblclick', event => {
    event.target.outerHTML =""
})

//keydown 
window.addEventListener('keydown', event => {
    if (event.key == 6) {
        document.body.innerHTML = "Executed Order 66."}
})

//mousemove
document.body.addEventListener('mousemove', event => {
    const {clientX, clientY}  = event
   // console.log(`mouse is at ${clientX} , ${clientY}`);
})


//mouseenter
//mouseleave
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', event => {
        console.log(destination)
        destination.style.fontWeight = 'bold'
    destination.addEventListener('mouseleave', event => {
        setTimeout( () => {
            destination.style.fontWeight = 'initial'
        },250) 
    }  )
    })
}
}

