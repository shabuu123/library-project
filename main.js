let addButton = document.querySelector("#add-button")
let form = document.querySelector(".form-container")
let submitButton = document.querySelector(".submit-button")
let title = document.getElementById("title")
title = title.value
let author = document.getElementById("author")
author = author.value
let pages = document.getElementById("pages")
pages = pages.value
let blankDiv = document.querySelector(".blank-div")

let array = [];
let flag = false;

addButton.addEventListener("click", () => {
    flag = !flag;
    form.style.visibility = flag ? "visible" : "hidden";
    form.style.display = "block";
    title.value = "";
    author.value = "";
    pages.value = "";
    console.log("hello")

    // if (form.style.display === "block") {
        //  form.style.display = "none"
    //  } else {
        //  form.style.display = "block"
    //  }
}
)

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
    flag = !flag
    console.log("hie");
    blankDiv.style.display = "block"
    const newBook = book(title.value, author.value, pages.value)
    array.push(newBook)
    blankDiv.innerHTML = "";
    array.forEach((newBook) => {
        const titleP = document.createElement("p")
        const authorP = document.createElement("p")
        const pagesP = document.createElement("p")
        const div = document.createElement("div")
        div.setAttribute("class", "cards")
        const readBtn = document.createElement('button')
        const removeBtn = document.createElement('button')

        titleP.textContent = newBook.title
        div.appendChild(titleP)
        blankDiv.appendChild(div)

        authorP.textContent = newBook.author
        div.appendChild(authorP)
        blankDiv.appendChild(div)

        pagesP.textContent = newBook.pages
        div.appendChild(pagesP)
        blankDiv.appendChild(div)

        readBtn.textContent = 'Read'
        div.appendChild(readBtn)
        // blankDiv.appendChild(div)
        readBtn.setAttribute("class", "ReadBtn")

        removeBtn.textContent = 'Remove'
        div.appendChild(removeBtn)
        // blankDiv.appendChild(div)
        removeBtn.setAttribute("class", "removeBtn")


        readBtn.addEventListener("click", () => {
            if (readBtn.style.backgroundColor === "red") {
                readBtn.textContent = "Read"
                readBtn.style.backgroundColor = "green"
            } else {
                readBtn.style.backgroundColor = "red"
                readBtn.textContent = "Not Read"
            }
            console.log("hii")
        })
        removeBtn.addEventListener("click", () => {
            console.log("hello")
            blankDiv.style.display = "none"
        })
    })
    blankDiv.style.visibility = "visible"


})



function book(title, author, pages) {
    return {
        title,
        author,
        pages,
        getBookDetail: () => { console.log(title, author, pages) }
    }

}