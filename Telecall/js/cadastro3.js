    let nome = document.querySelector('#nome');
    let labelNome = document.querySelector('#labelNome');
    let validNome = false;
    
    let nomeMae = document.querySelector('#nomeMae');
    let labelMae = document.querySelector('#labelMae');
    let validMae = false;

    let usuario = document.querySelector('#username')
    let labelUser = document.querySelector('#labelUser');
    let validUsername = false;

    let email = document.querySelector('#email');
    let labelEmail = document.querySelector('#labelEmail');
    let validEmail = false;

    let dataNascimento = document.querySelector('#nascimento');
    let labelNasc = document.querySelector('#labelNasc');
    let validNasc = false;
    
    let cpf = document.querySelector('#cpf');
    let labelCpf= document.querySelector('#labelCpf');
    let validCpf = false;
    
    let telFixo = document.querySelector('#telFixo');
    let labelTelFixo = document.querySelector('#labelTelFixo');
    let validTelFixo = false;
    
    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');
    let validSenha = false;
    
    let celular = document.querySelector('#celular');
    let labelCelular = document.querySelector('#labelCelular');
    let validCelular = false;
    
    let confirmaSenha = document.querySelector('#confirmaSenha');
    let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha');
    let validConfirmaSenha = false;
    
    let cep = document.querySelector('#cep');
    let labelCep = document.querySelector('#labelCep');
    let validCep = false;
    
    let msgError = document.querySelector('#msgError');
    let msgSuccess = document.querySelector('#msgSuccess');
    
    let genero = document.querySelectorAll('genero');
    let selectedGenero = null;
    
    var usuarioLogado = false;
    // let botaoLogin = document.getElementById('botaoLogin');
    
    
    usuario.addEventListener('keyup', () => {
        if (usuario.value.length == 6) {
            labelUser.style.color = 'green';
            labelUser.innerHTML = 'Nome de Usuário'
            validUsername = true;
        } else {
            labelUser.style.color = ' red';
            labelUser.innerHTML = 'Nome de Usuário Deve ter exatos 6 caracteres'
            validUsername = false;
        }
    });

    senha.addEventListener('keyup', () => {
        if (senha.value.length == 8) {
            labelSenha.style.color = 'green';
            labelSenha.innerHTML = 'Senha';
            validSenha = true;
        } else {
            if (senha.value.length > 8) {
                labelSenha.style.color = ' red';
                labelSenha.innerHTML = 'Senha * (Digite no máximo 8 caracteres)';
                validSenha = false
            } else {
                labelSenha.style.color = ' red';
                labelSenha.innerHTML = 'Senha * (Digite no mínimo 8 caracteres)';
                validSenha = false;
            }
        }
    });
    confirmaSenha.addEventListener('keyup', () => {
        if (confirmaSenha.value != senha.value) {
            labelConfirmaSenha.style.color = ' red';
            labelConfirmaSenha.innerHTML = 'Confirmação de Senha * (As senhas não coincidem)';
            validConfirma = false;
        } else {
            labelConfirmaSenha.style.color = 'green'
            labelConfirmaSenha.innerHTML = 'Confirmar Senha';
            validConfirmaSenha = true;
        }
    });
    
    nome.addEventListener('keyup', () => {
        if (nome.value.length < 15 || nome.value.length > 60) {
            labelNome.style.color = 'red';
            labelNome.innerHTML = 'Nome Completo deve ter no mínimo 15 caracteres';
            validNome = false;
        } else {
            labelNome.style.color = 'green';
            labelNome.innerHTML = 'Nome';
            validNome = true;
        }
    });
    nomeMae.addEventListener('keyup', () => {
        if (nomeMae.value.length < 15 || nomeMae.value.length > 60) {
            labelMae.setAttribute('style', 'color: red');
            labelMae.innerHTML = 'Nome Materno deve ter no mínimo 15 caracteres';
            validMae = false;
        } else {
            labelMae.setAttribute('style', 'color:green');
            labelMae.innerHTML = 'Nome Materno';
            validMae = true;
        }
    });
    
    email.addEventListener('keyup', () => {
        if (!validarEmail(email.value)) {
            labelEmail.style.color = 'red';
            validEmail = false;
        } else {
            labelEmail.style.color = 'green';
            validEmail = true;
        }
    });
    
    cpf.addEventListener('keyup', () => {
        const cpfValue = cpf.value.replace(/\D/g, ''); // Remover caracteres não numéricos
        if (validarCPF(cpfValue)) {
            labelCpf.style.color = 'green';
            validCpf = true;
        } else {
            labelCpf.style.color = 'red';
            validCpf = false;
        }
    });
    cep.addEventListener('keyup', () => {
        const cepValue = cep.value.trim();
        if (validarcep(cepValue)) {
            labelCep.style.color = 'green';
            validCep = true;
        } else {
            labelCep.style.color = 'red';
            validCep = false;
        }
    });
    telFixo.addEventListener('keyup', () => {
        const telFixoValue = telFixo.value.trim();
    
        if (validarTelefone(telFixoValue)) {
            labelTelFixo.style.color = 'green';
            validTelFixo = true;
        } else {
            labelTelFixo.style.color = 'red';
            validTelFixo = false;
        }
    });
    
    celular.addEventListener('keyup', () => {
        const celularValue = celular.value.trim();
    
        if (validarTelefone(celularValue)) {
            labelCelular.style.color = 'green';
            validCelular = true;
        } else {
            labelCelular.style.color = 'red';
            validCelular = false;
        }
    });
    
    
    
    dataNascimento.addEventListener('change', () => {
        const dataNascimentoValue = dataNascimento.value.trim();
    
        if (validarDataNascimento(dataNascimentoValue)) {
            labelNasc.style.color = 'green';
            validNasc = true;
        } else {
            labelNasc.style.color = 'red';
            validNasc = false;
        }
    });
    genero.forEach((genero) => {
        generoInput.addEventListener('click', () => {
            selectedGenero = genero.value;
        });
    });
    
    
    function validarDataNascimento(dataNascimento) {
        const dataRegex = /^\d{4}-\d{2}-\d{2}$/;
    
        if (!dataRegex.test(dataNascimento)) {
            return false;
        }
    
        const partesData = dataNascimento.split('-');
        const ano = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10);
        const dia = parseInt(partesData[2], 10);
    
        const dataAtual = new Date();
        const ultimoDiaDoMes = new Date(ano, mes, 0).getDate(); // Obtem o último dia do mês
    
        return (
            dataRegex.test(dataNascimento) &&
            dia >= 1 &&
            dia <= ultimoDiaDoMes &&
            mes >= 1 &&
            mes <= 12 &&
            ano >= 1000 &&
            ano <= 9999
        );
    }
    
    
    
    function validarTelefone(telefone) {
        const telefoneRegex = /^\(\+55\)\d{2}\d{8,9}$/;
        return telefoneRegex.test(telefone);
    }
    
    
    function validarEndereco(endereco) {
        const enderecoRegex = /^[a-zA-Z0-9\s,'.\-\p{L}]*$/u;
        return enderecoRegex.test(endereco);
    }
    
    
    function validarCPF(cpf) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // CPF com pontos e hifen
        const cpfRegexSemPontos = /^\d{11}$/; // CPF continuo
        return cpfRegex.test(cpf) || cpfRegexSemPontos.test(cpf);
    }
    
    function validarEmail(email) {
        var padrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
        return padrao.test(email);
    }
    
    //----------------------------------------------Função do botão de cadastrar-----------------------------------------------------------------------------------------
    
    function cadastrar() {
        if (validNome && validEmail && validCpf && validUsername && validSenha && validConfirmaSenha && validMae && validCep && validTelFixo && validCelular && validNasc) {
    
            let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
    
            listaUsuario.push(
                {
                    nomeCad: nome.value,
                    emailCad: email.value,
                    cpfCad: cpf.value,
                    loginCad: username.value,
                    telFixoCad: telFixo.value,
                    senhaCad: senha.value,
                    celularCad: celular.value,
                    enderecoCad: cep.value,
                    bornDateCad: dataNascimento.value,
                    genderCad: selectedGenero,
                }
            );
    
            localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))
    
            msgSuccess.setAttribute('style', 'display:block');
            msgSuccess.innerHTML = '<strong>Cadastrando usuario...</strong>';
            msgError.innerHTML = '';
            msgError.setAttribute('style', 'display:none');
    
            setTimeout(() => {
                window.location.href = 'login.html'
            }, 2000);
    
        } else {
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