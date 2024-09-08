function pesquisar() {
    // Obtém o elemento HTML com o id "resultados-pesquisa" onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa, remove espaços em branco extras nas extremidades e converte para minúsculas
    let pesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    
    // Inicializa a variável para armazenar o HTML dos resultados da pesquisa
    let resultados = "";

    // Verifica se o campo de pesquisa está vazio
    if (pesquisa === "") {
        // Se o campo estiver vazio, define uma mensagem solicitando ao usuário para digitar um termo
        resultados = "<p>Digite um termo de pesquisa para exibir os resultados.</p>";
    } else {
        // Filtra a lista de dados para encontrar itens cujo título ou descrição inclui o termo de pesquisa
        resultados = dados
            .filter(dado => dado.titulo.toLowerCase().includes(pesquisa) || dado.descricao.toLowerCase().includes(pesquisa))
            .map(dado => `
                <!-- Cria um item de resultado -->
                <div class="item-resultado">
                    <!-- Cria um título com um link para o item -->
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <!-- Adiciona a descrição do item -->
                    <p class="descricao-meta">${dado.descricao}</p>
                    <!-- Adiciona um link para mais informações sobre o item -->
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `)
            .join(""); // Junta todos os itens em uma única string HTML
        
        // Verifica se o resultado da pesquisa está vazio após o filtro
        if (resultados === "") {
            // Se não houver resultados, define uma mensagem informando que nenhum resultado foi encontrado
            resultados = "<p>Nenhum resultado encontrado para o termo de pesquisa fornecido.</p>";
        }
    }

    // Atualiza o conteúdo HTML da seção de resultados com o HTML gerado
    section.innerHTML = resultados;
}
