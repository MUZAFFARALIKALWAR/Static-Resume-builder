const toggleButton = document.getElementById('tooglebtn') as HTMLButtonElement;
const skillsSection = document.querySelector('.skills-section') as HTMLElement;
 let count = 0
 toggleButton.addEventListener("click",()=>{
    if(count == 0){
        skillsSection.style.display = "none";
     count = 1
    }else{
        skillsSection.style.display = "block";
     count = 0
    }
})