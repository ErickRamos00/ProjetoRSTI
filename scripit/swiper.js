document.addEventListener('DOMContentLoaded', function () {
    // Mostrar o modal ao clicar no link "Cadastro"
    document.getElementById('open-modal').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('modal-overlay').style.display = 'flex';
    });

    // Fechar o modal ao clicar no botão de fechar
    document.getElementById('close-modal').addEventListener('click', function () {
        document.getElementById('modal-overlay').style.display = 'none';
    });

    // Fechar o modal ao clicar fora da caixa do modal
    document.getElementById('modal-overlay').addEventListener('click', function (event) {
        if (event.target === this) {
            this.style.display = 'none';
        }
    });

    // Lidar com o envio do formulário
    document.getElementById('registration-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            nome: document.getElementById('nome').value,
            cnpj: document.getElementById('cnpj').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            nome_empresa: document.getElementById('nome_empresa').value,
            descricao: document.getElementById('descricao').value,
            url: document.getElementById('url').value
        };

        // Enviar os dados para o servidor
        axios.post('http://localhost:3000/cadastros', formData)
            .then(response => {
                console.log(response.data);
                alert('Cadastro realizado com sucesso!');
                document.getElementById('registration-form').reset();
                document.getElementById('modal-overlay').style.display = 'none';
            })
            .catch(error => {
                console.error('Erro ao cadastrar:', error);
                alert('Ocorreu um erro ao realizar o cadastro.');
            });
    });
});
