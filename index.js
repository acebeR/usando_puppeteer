const puppeteer = require('puppeteer');
  // ------ Variáveis 
  var texto_pesquisa = "wikipedia";
  var objCadastro = {
    "nome":"123deOliveira4",
    "senha":"123deOliveira4",
    "email":"123deOliveira4@gmail.com"
  };
  // ------ Funções 
  async function init() {
    abrirPagina();
  }
  init();

  async function abrirPagina() {
    // Abrir Pagina
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    // Pesquisar
    await page.goto('https://www.google.com.br');
    await page.type('[title="Pesquisar"]', texto_pesquisa);
    await page.keyboard.press('Enter'); 
    // Entrando no Link
    var link = 'https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal';
    await page.goto(link);
    // Cadastrar
    var cadastro = 'https://pt.wikipedia.org/w/index.php?title=Especial:Criar_conta&returnto=Wikip%C3%A9dia%3AP%C3%A1gina+principal';
    await page.goto(cadastro);
    // await page.waitForNavigation();
    await page.type('[id="wpName2"]', objCadastro.nome);
    await page.type('[id="wpPassword2"]', objCadastro.senha);
    await page.type('[id="wpRetype"]', objCadastro.senha);
    await page.type('[id="wpEmail"]', objCadastro.senha);
    // await page.click('[type="submit"]');
    await browser.close();
    
    
  }


