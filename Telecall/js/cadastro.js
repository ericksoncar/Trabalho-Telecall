// Declare variables for form elements and their corresponding labels
const nome = document.querySelector('#nome');
const labelNome = document.querySelector('#labelNome');
let validNome = false;

const nomeMae = document.querySelector('#nomeMae');
const labelMae = document.querySelector('#labelMae');
let validMae = false;

// ... (similar declarations for other form elements)

// Event listener for the 'keyup' event on the 'usuario' field
usuario.addEventListener('keyup', () => {
    if (usuario.value.length === 6) {
        labelUser.style.color = 'green';
        labelUser.innerHTML = 'Nome de Usuário';
        validUsername = true;
    } else {
        labelUser.style.color = 'red';
        labelUser.innerHTML = 'Nome de Usuário Deve ter exatos 6 caracteres';
        validUsername = false;
    }
});

// Event listener for the 'keyup' event on the 'senha' field
senha.addEventListener('keyup', () => {
    const senhaLength = senha.value.length;
    if (senhaLength === 8) {
        labelSenha.style.color = 'green';
        labelSenha.innerHTML = 'Senha';
        validSenha = true;
    } else {
        labelSenha.style.color = 'red';
        if (senhaLength > 8) {
            labelSenha.innerHTML = 'Senha * (Digite no máximo 8 caracteres)';
        } else {
            labelSenha.innerHTML = 'Senha * (Digite no mínimo 8 caracteres)';
        }
        validSenha = false;
    }
});

// ... (similar event listeners for other fields)

// Cadastrar function for form submission
function cadastrar() {
    // Check if all required fields are valid
    if (validNome && validEmail && validCpf && validUsername && validSenha && validConfirmaSenha && validMae && validCep && validTelFixo && validCelular && validNasc) {
        // Create an object with user data
        const userData = {
            nomeCad: nome.value,
            // ... (add other fields)
        };

        // Get the existing user list from local storage or create a new one
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario')) || [];

        // Add the new user data to the list
        listaUsuario.push(userData);

        // Store the updated user list in local storage
        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));

        // Display success message and redirect after a delay
        msgSuccess.setAttribute('style', 'display:block');
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgError.innerHTML = '';
        msgError.setAttribute('style', 'display:none');

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    } else {
        // Display error message if validation fails
        msgError.innerHTML = '<strong>Por favor, preencha os campos corretamente</strong>';
        msgError.setAttribute('style', 'display:block');
        msgSuccess.setAttribute('style', 'display:none');
        msgSuccess.innerHTML = '';
    }
}

$(document).ready(function () {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
    }

    //Quando o campo cep perde o foco.
    $("#cep").blur(function () {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});