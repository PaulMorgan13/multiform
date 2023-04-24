const multiStepForm = document.querySelector("[data-multi-step]")   
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")  ]
let currentStep = parseInt(formSteps.find(step => {
    return step.classList.contains("active")
})?.dataset.step)  

console.log(currentStep)   


if (currentStep < 0 ){ 
    currentStep = 0 ; 
    formSteps[currentStep].classList.add("active")
}  

multiStepForm.addEventListener("click", e=>{
    if(e.target.matches("[data-next]")){
        currentStep += currentStep + 1
    }
})