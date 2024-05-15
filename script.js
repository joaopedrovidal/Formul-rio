    let form       = document.getElementById("form");
    let campos     = document.querySelectorAll(".required");
    let spans      = document.querySelectorAll(".span-required");
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        console.log('Preencha os campos em vermelho');
        nameValidate();
        emailValidate();
        mensagemValidate();
    })
    
    function setError(index){
        campos[index].style.border = '2px solid red';
        spans[index].style.display = 'block';
    }

    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function nameValidate(){
        if(campos[0].value.length < 3)
        {
           setError(0);
        }
        else
        {
           removeError(0);
        }
    }

    function emailValidate(){
        if(!emailRegex.test(campos[1].value))
        {
           setError(1);
        }
        else
        {
            removeError(1);
        }
    }

    function mensagemValidate(){
        if(campos[2].value.length < 3)
            {
                setError(2);
            }
            else
            {
                removeError(2);
            }
    }

    function checar(){

        let nome     = document.getElementById("nome");
        let email    = document.getElementById("email");
        let mensagem = document.getElementById("mensagem");
    
        let camposVazios = [];
        
        if (nome.value === ''){
            camposVazios.push(nome);
        }
    
        if (email.value === ''){
            camposVazios.push(email);
        }
    
        if (mensagem.value === ''){
            camposVazios.push(mensagem);
        }
    
        if(camposVazios.length > 0){
            camposVazios.forEach(function(campo){
                campo.classList.add("error");
            });
            alert("Por favor, preencha todos os campos destacados em vermelho.");
            return false;
        } else {
            alert("Mensagem enviada com sucesso!");
            return true;
        }
    }

