class HomePage {


  acessarCampoPesquisa() {
    cy.get('#overlay-open')
      .click();
    cy.get('.mobile-search > .search-form > label > .search-field')
      .click()

  }

  realizarPesquisa(palavraChave) {
    cy.get('.mobile-search > .search-form > label > .search-field')
      .type(palavraChave).should('have.value', palavraChave)
      .type('{enter}');

  }

  realizaPesquisavazia() {
    cy.get('.mobile-search > .search-form > label > .search-field')
      .should('exist')
      .type('{enter}');


  }

  verificarResultados(palavraChave) {
    cy.get('.archive-title')
      .should('exist')
      .should('contain', palavraChave);
  }

  verificarResultadosvazio() {
    cy.get('h1.archive-title>span')
      .should('be.empty');
  }

  verificarSugestaoPg1() {

    cy.url()
      .should('eq', 'https://blogdoagi.com.br/?s=');  

    cy.get('.site-content.cf article').should('have.length.at.least', 10)
      .each(($article, index) => {

      const title = $article.find('h2.entry-title a').text();
      const date = $article.find('.entry-date a').text();


      cy.log(`Artigo ${index + 1}:`);
      cy.log(`Título: ${title}`);
      cy.log(`Data: ${date}`);


    });
  }

  verificarSugestaoPg2() {
    cy.get('a.page-numbers').contains('Página 2')
      .click();
    cy.url()
      .should('eq', 'https://blogdoagi.com.br/page/2/?s');  

    cy.get('.site-content.cf article').should('have.length.at.least', 10)
      .each(($article, index) => {

      const title = $article.find('h2.entry-title a').text();
      const date = $article.find('.entry-date a').text();


      cy.log(`Artigo ${index + 1}:`);
      cy.log(`Título: ${title}`);
      cy.log(`Data: ${date}`);


    });


  }




  verificarArtigos(palavraChave) {



    cy.get('#post-3425 > .meta-main-wrap > .entry-main > .entry-header > .entry-title > a')
      .each((resultado) => {
        cy.wrap(resultado).click();

        cy.get('#singlepost-wrap').should('be.visible').invoke('text').then((texto) => {
          if (texto.includes(palavraChave)) {
            cy.log(`A palavra-chave "${palavraChave}" está presente no artigo.`);
          } else {
            cy.log(`A palavra-chave "${palavraChave}" não está presente no artigo.`);
          }
        });



      });


  }


  verificaMensagemNãoEncontrado() {
    cy.get('.entry-header .entry-title').should('have.text', 'Nenhum resultado');


  };

  verificaTermoAvançado(termoPesquisa) {
    let encontrado = false;
    cy.get('.entry-header .entry-title').each((resultado) => {
      const textoResultado = resultado.text().toLowerCase();
      const regexPixTed = /(pix|ted)/i;
      if (regexPixTed.test(textoResultado)) {
        encontrado = true;
      }
    }).then(() => {
      expect(encontrado).to.be.true;
    });
  }






}






















export default HomePage;