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
    const palavraChave = 'Pix';
    homePage.realizarPesquisa(palavraChave);
    homePage.verificarResultados(palavraChave);
    homePage.verificarHumArtigo(palavraChave);
  });

  it('Pesquisa com campo vazio', () => {
    homePage.realizaPesquisavazia();
    homePage.verificarResultadosvazio();
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
    const palavrasChaves = ['Tecnologia', 'IR', 'Pix'];

    homePage.realizarPesquisa((palavrasChaves.join(' ')));
    homePage.verificarResultados((palavrasChaves.join(' ')));
    homePage.verificarArtigos(palavrasChaves);




  });


  it('Validação de Pesquisa por palavras-chave não encontrada', () => {
    const palavrasChave = 'Vixi';

    homePage.realizarPesquisa(palavrasChave);
    homePage.verificaMensagemNãoEncontrado();


  });


  // Cenário será avaliado pelo PIO para melhor detalhamento da pesquisa e das validações


  it.skip('Validação de pesquisa com termos de pesquisa avançada', () => {
    const termoPesquisa = 'TED AND PIX';


    homePage.realizarPesquisa(termoPesquisa);
    homePage.verificaTermoAvançado(termoPesquisa);



  });

});

