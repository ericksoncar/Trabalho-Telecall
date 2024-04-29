function entrar() {
    let username = document.querySelector('#username');
    let labelUser = document.querySelector('#labelUser');

    let password = document.querySelector('#senha');
    let labelPassword = document.querySelector('#senhaLabel');

    let msgError = document.querySelector('#msgError');
    let listaUser = [];

    let userValid = {
        login: '',
        senha: '',
    }

    listaUser = JSON.parse(localStorage.getItem('listaUsuario'));

    if (!username.value || !password.value) {
        msgError.setAttribute('style', 'display:block');
        msgError.innerHTML = 'Por favor, preencha ambos os campos.';
        return;
    }

    listaUser.forEach((item) => {
        if (username.value == item.loginCad && password.value == item.senhaCad) {
            userValid = {
                login: item.loginCad,
                senha: item.senhaCad
            };
        };
    });

    if (username.value == userValid.login && password.value == userValid.senha) {
        window.location.href = 'home.html';
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token)

    } else {
        labelUser.style.color = 'red';
        username.style.color = 'red';
        labelPassword.style.color = 'red';
        password.style.color = 'red';
        msgError.setAttribute('style', 'display:block');
        msgError.innerHTML = 'Usuario ou senha incorretos';
        username.focus();
    };
};