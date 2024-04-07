let emailInput = document.getElementById("email");

emailInput.addEventListener('keyup', function(e){
    let valor = e.target.value
  
    if (valor.includes('@') && valor.includes('.com')){
      emailInput.classList.remove('error')
    } else {
      emailInput.classList.add('error')
    }
  })

emailInput.addEventListener('blur', function(e){
    let valor = e.target.value
  
    if (valor.includes('@') && valor.includes('.com')){
      emailInput.classList.remove('error')
    } else {
      alert("Digite um Email Válido")
      e.target.value = ''
      emailInput.classList.remove('error')
    }
  })













//   let emailInput = document.getElementById("email");
//   let emailLabel = document.getElementById("span-email");
  
  
// function mostrarPopup(input, label){
//     // Mostrar popup de campo obrigatório
// input.addEventListener('focus', function(){
//     label.classList.add('required-popup')
//   })
  
  
//   // Ocultar popup de campo obrigatório
// input.addEventListener('blur' , function email(){
//     label.classList.remove('required-popup')
//   })
//   }
  
  


// console.log (emailInput)