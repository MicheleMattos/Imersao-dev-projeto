function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa e transforma em minúsculas para comparação
    let pesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem informando que não há resultados
    if (pesquisa === "") {
        resultados = "<p>Digite um termo de pesquisa para exibir os resultados.</p>";
    } else {
        // Itera sobre cada dado da lista de dados
        for (let dado of dados) {
            // Converte o título e a descrição para minúsculas para comparação
            let titulo = dado.titulo.toLowerCase();
            let descricao = dado.descricao.toLowerCase();
            
            // Verifica se a pesquisa está contida no título ou descrição
            if (titulo.includes(pesquisa) || descricao.includes(pesquisa)) {
                // Cria um novo elemento HTML para cada resultado que corresponde
                resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                `;
            }
        }
        
        // Se não houver resultados correspondentes, exibe uma mensagem informando isso
        if (resultados === "") {
            resultados = "<p>Nenhum resultado encontrado para o termo de pesquisa fornecido.</p>";
        }
    }
    
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

