let pannels = document.querySelectorAll(".part")

pannels.forEach(pannels => {
    pannels.addEventListener("click", () => {
        removeActiveClasses()
        pannels.classList.add('active')
    })

})

function removeActiveClasses(){
    pannels.forEach(pannels => {
        pannels.classList.remove('active')
    })
}