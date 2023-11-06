/// <reference types="cypress"/>


import HomePage from '../../pageObjects/home/HomePage.js';



describe('Validação do campo de Busca', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('/')
      .reload;
    homePage.acessarCampoPesquisa();

  });

  it('Pesquisa bem-sucedida por palavras-chave', () => {
    const palavraChave = 'tecnologia';
    homePage.realizarPesquisa(palavraChave);
    homePage.verificarResultados(palavraChave);
    homePage.verificarArtigos();
  });

  it('Pesquisa com campo vazio', () => {
    homePage.realizaPesquisavazia();
    homePage.verificarResultadosvazio();
    homePage.verificarSugestaoPg1();
    homePage.verificarSugestaoPg1();


  });

  it('Valida sugestões na segunda pagina em pesquisa vazia', () => {
    
    homePage.realizaPesquisavazia();
    homePage.verificarResultadosvazio();
    homePage.verificarSugestaoPg2();


  });

  it('Validação de pesquisa com caracteres especiais', () => {
    const palavraChave = '!@#$%^&*()';
    homePage.realizarPesquisa(palavraChave);
    homePage.verificaMensagemNãoEncontrado();
  });



  it('Validação de pesquisa com várias palavras-chave', () => {
    const palavrasChave = ['Tecnologia', 'IR', 'Pix'];

    homePage.realizarPesquisa((palavrasChave.join(' ')));
    homePage.verificarResultados((palavrasChave.join(' ')));




  });


  it('Validação de pesquisa com termos de pesquisa avançada', () => {
    const termoPesquisa = 'TED AND PIX';


    homePage.realizarPesquisa(termoPesquisa);
    homePage.verificaTermoAvançado();



  });

});

