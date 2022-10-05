
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const imput1 = document.createElement("input")
const imput2 = document.createElement("input")
const buttonSoma = document.createElement("button")
const buttonMult = document.createElement("button")
const buttonVezes = document.createElement("button")
const buttonDiv = document.createElement("button")
const resultado = document.createElement("p")
resultado.createTextNode = "jnmasfdasf"
imput1.style.padding = "5px 20px"
imput2.style.padding = "5px 20px"
buttonSoma.style.padding = "20px 40px"
buttonMult.style.padding = "20px 40px"
buttonVezes.style.padding = "20px 40px"
buttonDiv.style.padding = "20px 40px"
buttonSoma.addEventListener("click",()=>{
    let n1 = imput1.value;
    let n2 = imput2.value;
    let soma = n1+n2
    return soma
})
document.body.style.height = "100vh"
document.body.style.alignItems = "center"
document.body.style.display = "flex"
document.body.style.justifyContent = "center"

div1.appendChild(imput1)
div1.appendChild(imput2)
div2.appendChild(buttonSoma)
div2.appendChild(buttonMult)
div2.appendChild(buttonVezes)
div2.appendChild(buttonDiv)
div2.style.position = "absolute"
div2.style.bottom = "417px"

document.body.appendChild(resultado)
document.body.appendChild(div1)
document.body.appendChild(div2)


