document.getElementById("ul3").addEventListener("click", function(event){
    if(event.target && event.target.matches(".ul3Item")){
        alert("You selected: " + event.target.textContent)
    }
})

//There exists a Event Listener named "DOMContentLoaded" which is accessed by 'document.addEventListener("DOMContentLoaded")'. This will trigger when the site loads the DOM.