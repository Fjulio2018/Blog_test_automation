class HomePage {


  ELEMENTS = {

    menu: '#overlay-open',
    search: '.mobile-search > .search-form > label > .search-field',
    searchField: '.archive-title',
    searchValue: 'h1.archive-title>span',
    urlBasic: 'https://blogdoagi.com.br/',
    paginatioNumber: 'a.page-numbers',
    articles: '.site-content.cf article',
    titulo: '.entry-header .entry-title'


  }


  acessarCampoPesquisa() {
    cy.get(this.ELEMENTS.menu)
      .click();
    cy.get(this.ELEMENTS.search)
      .click()

  }

  realizarPesquisa(palavraChave) {
    cy.get(this.ELEMENTS.search)
      .type(palavraChave).should('have.value', palavraChave)
      .type('{enter}');

  }

  realizaPesquisavazia() {
    cy.get(this.ELEMENTS.search)
      .should('exist')
      .type('{enter}');


  }

  verificarHumArtigo(palavrasChave) {


    cy.log(palavrasChave);


    cy.get(this.ELEMENTS.articles).then(($articles) => {
      if ($articles.length > 1) {
        $articles.eq(0).click();
      } else {
        $articles.click();
      }
    });




    cy.scrollTo('bottom')

    cy.get('body').invoke('text').then((textoTela) => {

      if (textoTela.includes(palavrasChave.toLowerCase())) {

        cy.log(`A palavra-chave minuscula "${palavrasChave}" está presente na tela após a rolagem.`);
      } else if (textoTela.includes(palavrasChave)) {

        cy.log(`A palavra-chave "${palavrasChave}" está presente na tela após a rolagem.`);

      } else {
        cy.log(`A palavra-chave "${artResult}" não está presente na tela após a rolagem.`);
      }





    });

  }

  verificarResultados(palavraChave) {
    cy.get(this.ELEMENTS.searchField)
      .should('exist')
      .should('contain', palavraChave);
  }

  verificarResultadosvazio() {
    cy.get(this.ELEMENTS.searchValue)
      .should('be.empty');
  }

  verificarSugestaoPg1() {

    cy.url()
      .should('eq', 'https://blogdoagi.com.br/?s=');

    cy.get(this.ELEMENTS.articles)
      .should('have.length.at.least', 10)
      .each(($article, index) => {

        const title = $article.find('h2.entry-title a').text();
        const date = $article.find('.entry-date a').text();


        cy.log(`Artigo ${index + 1}:`);
        cy.log(`Título: ${title}`);
        cy.log(`Data: ${date}`);


      });
  }

  verificarSugestaoPg2() {
    cy.get(this.ELEMENTS.paginatioNumber)
      .contains('Página 2')
      .click();
    cy.url()
      .should('eq', 'https://blogdoagi.com.br/page/2/?s');

    cy.get(this.ELEMENTS.articles)
      .should('have.length.at.least', 10)
      .each(($article, index) => {

        const title = $article.find('h2.entry-title a').text();
        const date = $article.find('.entry-date a').text();


        cy.log(`Artigo ${index + 1}:`);
        cy.log(`Título: ${title}`);
        cy.log(`Data: ${date}`);


      });


  }



  verificaMensagemNãoEncontrado() {
    cy.get(this.ELEMENTS.titulo)
      .should('have.text', 'Nenhum resultado');


  };





  verificarArtigos(palavrasChaves) {
    const artResult = palavrasChaves[0].toLowerCase();

    cy.log(artResult);
    cy.log(palavrasChaves);

    cy.get(this.ELEMENTS.articles)
      .eq(0)
      .click();


    cy.scrollTo('bottom')

    cy.get('body').invoke('text').then((textoTela) => {

      if (textoTela.includes(artResult)) {

        cy.log(`A palavra-chave "${artResult}" está presente na tela após a rolagem.`);
      } else {
        cy.log(`A palavra-chave "${artResult}" não está presente na tela após a rolagem.`);
      }
    });

  }


  verificaTermoAvançado(termoPesquisa) {
    cy.log(termoPesquisa);

    const termos = termoPesquisa.toLowerCase().split(' ');


    cy.get(this.ELEMENTS.titulo)
      .should('exist')
      .each((resultado, index) => {

        const textoresutado = resultado.text().toLowerCase();

        cy.log(`Para o  termo ${termos} foi encontrado o resultado ${textoresutado}`)

        if (termos.includes('AND')) {

          cy.log(`todos os resutados devem conter o termo anterior e o posterior juntos`);


        } else if (termos.includes('OR')) {

          cy.log(`todos os resutados devem conter ou o termo anterior ou o posterior `);

        }





      })


  }















}






















export default HomePage;