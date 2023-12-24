//select all filter buttons and filterable cards
const filterableButtons = document.querySelectorAll(".filter-buttons button")
const filterableCards = document.querySelectorAll(".fiterable-cards .card")


const filterCards = e => {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")

    //iterate over each fiterable card
    filterableCards.forEach(card => {

        //add "hide" class to hide the card initially
        card.classList.add("hide") 

        //check if the card matched the selected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") card.classList.remove("hide")
    })
}
//adding click event listener to each filter button
filterableButtons.forEach(button => button.addEventListener("click",filterCards))