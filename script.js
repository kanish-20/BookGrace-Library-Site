//selecting the popupbox and overlay by class
var popupbox=document.querySelector(".popup-box")
var overlay=document.querySelector(".popup-overlay")
var addButton=document.getElementById("add-popup-button")

addButton.addEventListener("click",function(){
    popupbox.style.display="block"
    overlay.style.display="block"

})
//select cancel button
var cancel=document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
    event.preventDefault()
     popupbox.style.display="none"
    overlay.style.display="none"
})

//select add button
var add=document.getElementById("add-book")
add.addEventListener("click",function(event){
    event.preventDefault()
})

//select container,add-book,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container")
var addBook=document.getElementById("add-book")
var title=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")

addBook.addEventListener("click",function(event){
    event.preventDefault()

    var div=document.createElement("div")

    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
            <p>${description.value}</p>
            <button onclick="dlt(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    overlay.style.display="none"
   // div.innerHTML=`<h5>${author.value}<h5>`
    
})

function dlt(event){
    event.target.parentElement.remove()
}
