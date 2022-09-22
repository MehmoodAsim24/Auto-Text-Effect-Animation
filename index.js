const containerEl = document.querySelector(".container");
const careers = ["Youtuber","Web Developer" , "Freelancer","Instructor"];

let careerIndex = 0;

let characterIndex = 0;

updateText();


function updateText(){
     characterIndex++;
    containerEl.innerHTML = `
    <h1>I AM ${careers[careerIndex].slice(0,1) === "I" ? "AN" : "A"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `;   
    
   
    if (characterIndex === careers
        [careerIndex].length) {
            careerIndex++;
            characterIndex = 0;
        
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
        
    }
    setTimeout(updateText,400);
}
