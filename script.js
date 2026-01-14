

// heart-icon

const heartCountEl = document.getElementById("heart-num") ;
let heartCount = 0 ;
const heartCounts = document.querySelectorAll(".heart-icon") ;

heartCounts.forEach((icon) => {
    icon.addEventListener("click", () => {

    icon.style.transition = "transform 0.2s ease";
    icon.style.transform = "scale(1.5)";
    setTimeout(() => {
      icon.style.transform = "scale(1)";
    }, 200);

        if(icon.classList.contains("liked")){
            heartCount--;
            if(heartCount < 0) heartCount = 0;
            heartCountEl.innerText = heartCount;

            icon.classList.remove("fa-solid", "liked") ;
            icon.classList.add("fa-regular") ;
            icon.style.color = "" ;

        }
        else {
            heartCount++ ;
            heartCountEl.innerText = heartCount;

            icon.classList.remove("fa-regular") ;
            icon.classList.add("fa-solid", "liked") ;
            icon.style.color = "red" ;
        }
})
})

// all copy button click to copy

const copyButtons = document.querySelectorAll(".copy-btn");
const copyNumEl = document.getElementById("copy-num");
let copyCount = 0;
copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".cards");
        const numberEl = card.querySelector(".number");
        const number = numberEl.innerText

        navigator.clipboard.writeText(number)
        .then(() => {
            alert(`Copied : ${number} `);
            copyCount++ ;
            copyNumEl.innerText = copyCount ;
        })
        .catch(() => {
            alert("Failed to copy")
        });
    });
});

// history-container

const historyContainer = document.getElementById("history-container");

const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach((btn) => {
    btn.addEventListener("click", function(){
        const card = this.closest(".cards");
        const serviceName = card.querySelector(".service-nam").innerText;
        const serviceNumber = card.querySelector(".number").innerText;

        const time = new Date().toLocaleTimeString();

        const historyCard = document.createElement("div");
        historyCard.className = "history-card mt-2 flex justify-between items-center p-4 bg-[#fafafa]";

        historyCard.innerHTML = `<div class="grid gap-1">
                  <h2 class="text-lg font-normal">${serviceName}</h2>
                  <h3 class="text-lg text-gray-500">${serviceNumber}</h3>
                </div>
                <p class="text-lg">${time}</p>`;

                historyContainer.appendChild(historyCard);

    })
})

// History clean button

document.getElementById("clear-btn").addEventListener("click", function(){
    historyContainer.innerHTML = "";
})