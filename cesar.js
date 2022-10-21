var seletorCesar = document.querySelector('.seletorCesar')
var metados = document.getElementById('metados')
var cdg1 = document.getElementById('cdg1')
var cdg2 = document.getElementById('cdg2')
var seletor = document.querySelectorAll('.codigo')
var incremento = document.getElementById('posiçãoCesar')
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var btncodificar = document.getElementById('criptografar');
var btndecodificar = document.getElementById('descriptografar');
var submit = document.getElementById('submit')

metados.addEventListener('change', function() {
    if(metados.value == 'cesar') {
        seletorCesar.style.display = 'flex'
    } else {
        seletorCesar.style.display = 'none'
    }
})

btncodificar.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Criptografar'
})

btndecodificar.addEventListener('click', function(){
        submit.style.display = 'block'
        submit.value = 'Descriptografar'
})

    function codBase64() {
        var mensagem = document.querySelector('#cdg1').value
        var codificado = btoa(mensagem)
        return codificado
}
    function decBase64(){
        var mensagem = document.querySelector('#cdg1').value
        var decodificado = atob(mensagem)
        return decodificado
}

    function codCesar() {
        var elementoDaMensagem = cdg1.value;
        var mensagemMinuscula = elementoDaMensagem.toLowerCase();
        var transformarNumero = (Number(incremento.value) % 26);
        var mensagemCodificada = '';
      
        for(var i = 0; i < mensagemMinuscula.length; i++){
           for(var j =0; j < alfabeto.length; j++){
             if(mensagemMinuscula[i] == alfabeto[j]){
               mensagemCodificada += alfabeto [j + transformarNumero]
               break;
           } else if (mensagemMinuscula[i] == ' ') {
               mensagemCodificada += ' ';
               break;
           }
          }    
      }
      return mensagemCodificada
      }
      
          function decCesar() {
          var elementoDaMensagem = cdg1.value;
          var mensagemMinuscula = elementoDaMensagem.toLowerCase()
          var transformarNumero = (Number(incremento.value) % 26)
          var mensagemCodificada = '';
        
          for(var i = 0; i < mensagemMinuscula.length; i++){
             for(var j = alfabeto.length - 1; j >= 0; j--){
               if(mensagemMinuscula[i] == alfabeto[j]){
                 mensagemCodificada += alfabeto [j - transformarNumero]
                 break;
             } else if (mensagemMinuscula[i] == ' ') {
                 mensagemCodificada += ' ';
                 break;
             }
            }       
        }
        return mensagemCodificada
      }

      submit.addEventListener('click', function(e){
        e.preventDefault();
        if(btncodificar.checked && metados.value === "base"){
            cdg2.innerText = codBase64();

        } else if(btndecodificar.checked && metados.value === "base"){
            cdg2.innerText = decBase64();

        } else if(btncodificar.checked && metados.value === "cesar"){
            cdg2.innerText = codCesar()

        } else if(btndecodificar.checked && metados.value === "cesar"){
            cdg2.innerText = decCesar()
        }
    }) 