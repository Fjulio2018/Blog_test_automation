# Teste UI automatizado

Este é um projeto básico para verificar conhecimentos de testes automatizados de UI utilizando Cypress.
Projeto de Automação de UI

# Este projeto desenvolvido em Java Script e utilizando as seguintes tecnologias:

    Node JS
    cypress: 12.7.4
    Cypress-mochawesome-reporter: 3.6.1

# Funcionalidade: Validação do campo de Busca

 

  Cenário: Pesquisa bem-sucedida por palavras-chave
    Dado que estou na página inicial
    Quando  acesso o campo de pesquisa
    E  realizo uma pesquisa por "tecnologia"
    Então  vejo os resultados relacionados a "tecnologia"
    E  verifico os artigos relacionados

Cenário: Pesquisa por palavras-chave não encontrada
    Dado que estou na página inicial
    Quando  acesso o campo de pesquisa
    E  realizo uma pesquisa por "Vini"
    Então a mensagem "Nenhum resultado" é apresentada

  Cenário: Pesquisa com campo vazio
    Dado que estou na página inicial
    Quando eu acesso o campo de pesquisa
    E realizo a pesquisa sem palavra chave
    Então vejo as 10 sugestões apresentadas com sucesso

  Cenário: Valida sugestões na segunda página em pesquisa vazia
    Dado que estou na página inicial
    Quando  realizo a pesquisa sem palavra chave
    E vou para a pagina 2
    Então vejo as 10 sugestões apresentadas com sucesso

  Cenário: Validação de pesquisa com caracteres especiais
    Dado que estou na página inicial
    Quando  acesso o campo de pesquisa
    E eu realizo uma pesquisa por "!@#$%^&*()"
    Então  vejo a mensagem de "Não encontrado"

  Cenário: Validação de pesquisa com várias palavras-chave
    Dado que estou na página inicial
    Quando  acesso o campo de pesquisa
    E  realizo uma pesquisa por "Tecnologia IR Pix"
    Então  vejo os resultados relacionados a "Tecnologia IR Pix"

  Cenário: Validação de pesquisa com termos de pesquisa avançada
    Dado que estou na página inicial
    Quando  acesso o campo de pesquisa
    E  realizo uma pesquisa por "TED AND PIX"
    Então  vejo os resultados relacionados a "TED AND PIX"

   


# Executando os testes

Para executar os testes de API, execute o seguinte comando no terminal:
npx cypress run
