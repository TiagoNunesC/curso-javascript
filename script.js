async function verificaEmailDisponivel(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const emailCadastrados = ['user1@example.com', 'user2@example.com', 'user3@example.com'];
            resolve(!emailCadastrados.includes(email));
        }, 1000);
    })
}

document.getElementById('email-input').addEventListener('blur', async function (event) {
    const email = event.target.value;

    if (email.trim() !== '') {
        try {
            const emailDisponivel = await verificaEmailDisponivel(email);
            exibirFeedbackEmail(emailDisponivel, email);
        } catch (error) {
            console.error('Erro ao verificar a disponibilidade do e-mail', error);
        }
    }
});

function exibirFeedbackEmail(disponivel, email) {
    const feedbackElemento = document.getElementById('email-feedback');
    
    if (disponivel) {
        feedbackElemento.textContent = `O e-mail ${email} está disponível`;
        feedbackElemento.style.color = 'green';
    } else {
        feedbackElemento.textContent = `O e-mail ${email} já está cadastrado`;
        feedbackElemento.style.color = 'red';
    }
}

function exibirFeedbackErroEmail() {
    const feedbackElemento = document.getElementById('email-feedback');
    feedbackElemento.textContent = 'Erro ao verificar a disponibilidade do e-mail. Verifique o console';
    feedbackElemento.style.color = 'red';
}

async function verificaNomeUsuarioDisponivel(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const usuariosRegistrados = ['player1', 'gamer2024', 'champion'];
            resolve(!usuariosRegistrados.includes(username));
        }, 1000);
    });
}

document.getElementById('username-input').addEventListener('blur', async function (event) {
    const username = event.target.value;

    if (username.trim() !== '') {
        try {
            const usernameDisponivel = await verificaNomeUsuarioDisponivel(username);
            exibirFeedbackNome(usernameDisponivel, username);
        } catch (error) {
            console.error('Erro ao verificar a disponibilidade do nome de usuário:', error);
            exibirFeedbackErroEmail();
        }
    }
})

function exibirFeedbackNome(disponivel, username) {
    const feedbackElemento = document.getElementById('username-feedback');

    if (disponivel) {
        feedbackElemento.textContent = `O nome de usuário ${username} está disponível.`;
        feedbackElemento.style.color = 'green';
    } else {
        feedbackElemento.textContent = `O nome de usuário ${username} já está registrado`;
        feedbackElemento.style.color = 'red';
    }
}

function exibirFeedbackErroNome() {
    const feedbackElemento = document.getElementById('username-feedback');
    feedbackElemento.textContent = 'Erro ao verificar a disponibilidade do nome de usuário. Verifique o console.';
    feedbackElemento.style.color = 'red';
}

const publicarBtn = document.getElementById('publicar-btn');

publicarBtn.addEventListener('click', capturarEEnviarDados);

async function enviarDadosParaBanco(dados) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dados enviados para o banco de dados', dados);
            resolve('Ok')
        }, 1000);
    });
}

async function capturarEEnviarDados() {
    const nomeProjeto = document.getElementById('nome-projeto').value.trim();
    const descricaoProjeto = document.getElementById('descricao-projeto').value.trim();
    const tagsProjeto = document.getElementById('tag-input').value.trim();

    if (!nomeProjeto || !descricaoProjeto) {
        feedback.textContent = 'Nome do projeto e descrição são obrigatórios.';
        feedback.style.color = 'red';
        return;
    }

    const dados = {
        nome: nomeProjeto,
        descricao: descricaoProjeto,
        tags: tagsProjeto
    }

    try {
        const resultado = await enviarDadosParaBanco(dados);
        feedback.textContent = `Dados enviados com sucesso! ${resultado}`;
        feedback.style.color = 'green';
    } catch (error) {
        feedback.textContent = 'Erro ao enviar os dados';
        feedback.style.color = 'red';
    }
}

const enviarBtn = document.getElementById('enviar-btn');

enviarBtn.addEventListener('click', capturarEEnviarDados2);

async function enviarDadosParaServidor(dados) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dados enviados para servidor', dados);
            resolve('Ok')
        }, 1000)
    });
}

async function capturarEEnviarDados2() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim(); 

    if (!nome || !email || !mensagem) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.color = 'red';
        return;
    }

    const dados = {
        nome: nome,
        email: email,
        mensagem: mensagem
    }

    try {
        const resultado = await enviarDadosParaServidor(dados);
        feedback.textContent = `Mensagem enviada com sucesso: ${resultado}`;
        feedback.style.color = 'green';
        
    } catch (error) {
        feedback.textContent = 'Erro ao enviar a mensagem.';
        feedback.style.color = 'red';
    }
}

