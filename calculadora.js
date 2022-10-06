//create elements
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const imput1 = document.createElement("input")
const imput2 = document.createElement("input")
const buttonSoma = document.createElement("button")
const buttonMult = document.createElement("button")
const buttonSub = document.createElement("button")
const buttonDiv = document.createElement("button")
const resultado = document.createElement("p")
//resultado properties
resultado.style.fontFamily = "Impact,Charcoal,sans-serif"
resultado.textContent = "Insira os Valores", resultado.classList.add = "operacao",
resultado.style.position = "absolute", resultado.style.left = "600px", resultado.style.top = "270px"
resultado.style.fontSize = "25px"
//imput properties
imput1.type = "number", imput1.style.padding = "5px 20px";
imput2.type = "number", imput2.style.padding = "5px 20px";
//button properties
buttonSoma.style.padding = " 10px 40px",buttonSoma.style.backgroundColor = "#00FF73", 
buttonSoma.innerText= "+", buttonSoma.style.fontSize = "25px"
buttonMult.style.padding = "10px 40px",buttonMult.style.backgroundColor = "#00FF73"
buttonMult.innerText= "*", buttonMult.style.fontSize = "25px"
buttonSub.style.padding = "10px 40px" ,buttonSub.style.backgroundColor = "#00FF73"
buttonSub.innerText= "-", buttonSub.style.fontSize = "25px"
buttonDiv.style.padding = "10px 40px" ,buttonDiv.style.backgroundColor = "#00FF73"
buttonDiv.innerText= "/", buttonDiv.style.fontSize = "25px"
//body properties
document.body.style.height = "100vh", document.body.style.alignItems = "center", document.body.style.display = "flex", 
document.body.style.justifyContent = "center"
document.body.style.background = "linear-gradient(skyblue, lightgreen)"
//div properties
div2.style.position = "absolute"
div2.style.bottom = "210px"
div3.style.display = "flex"
div3.style.justifyContent = "center"
//add action in button
buttonSoma.addEventListener("click", ()=>{
    let n1 = imput1.value;
    let n2 = imput2.value;
    let invalid = `operaçao invalida: valores faltando`
    let sum = parseInt(n1)+parseInt(n2) //tranform imputs in integers
    if(n1 && n2){
        resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = `Resultado Da Soma e: ${sum}`;
    }else {
        resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = invalid;
    }
}); 
buttonMult.addEventListener("click",()=>{
    let n1 = imput1.value;
    let n2 = imput2.value;
    let invalid = `operaçao invalida: valores faltando`
    let mult = parseInt(n1)*parseInt(n2) //tranform imputs in integers
    if(n1 && n2){
        resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = `Resultado Da Multiplicaçao e: ${mult}`;
    }else {
        resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = invalid;
    }
});
buttonSub.addEventListener("click",()=>{
    let n1 = imput1.value;
    let n2 = imput2.value;
    let invalid = `operaçao invalida: valores faltando`
    let minus = parseInt(n1)-parseInt(n2) //tranform imputs in integers
    if(n1 && n2){
        resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = `Resultado Da Subtraçao e: ${minus}`;
    }else {
        resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = invalid;
    }
});
buttonDiv.addEventListener("click",()=>{
    let n1 = imput1.value;
    let n2 = imput2.value;
    let invalid = `operaçao invalida: valores faltando`
    let div = parseInt(n1)/parseInt(n2) //tranform imputs in integers
    if(n1 && n2){
        resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = `Resultado Da Divisâo e: ${(Math.round(div * 100) / 100).toFixed(2)}`;//math.round return a number rounded to the near integer
    }else {
        resultado.style.position = "absolute", resultado.style.left = "500px", resultado.style.top = "270px"
        resultado.textContent = invalid;
    } 
});
//append elements
div1.appendChild(imput1)
div1.appendChild(imput2)
div2.appendChild(buttonSoma)
div2.appendChild(buttonMult)
div2.appendChild(buttonSub)
div2.appendChild(buttonDiv)
div3.appendChild(resultado)
document.body.appendChild(div1)
document.body.appendChild(div2)
document.body.appendChild(div3)


