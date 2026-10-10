# Landing Page - Raquel Vieira

Landing page desenvolvida com HTML, CSS e JavaScript para apresentar
meus projetos, experiências e serviços digitais.

## Funcionalidades

### Botão de mudar cor de fundo

Foi utilizado JavaScript para criar um botão que altera a cor de
fundo da página através do `addEventListener()` e
`document.body.style.backgroundColor`.

### Formulário com EmailJS

O formulário possui:

- Nome
- Sobrenome
- E-mail
- Mensagem

Os dados são enviados por e-mail utilizando a API do EmailJS.

Para funcionar, é necessário configurar:

- Public Key
- Service ID
- Template ID

### reCAPTCHA

Foi adicionado o Google reCAPTCHA V2 para evitar envios automáticos
e spam no formulário.

É necessário substituir:

`SUA_SITE_KEY_RECAPTCHA`

pela chave fornecida pelo Google.

## Sitemap

O projeto possui o arquivo `sitemap.xml`, contendo as principais
seções da landing page.

É necessário substituir:

`https://seu-dominio.com/`

pelo domínio real do site.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- EmailJS
- Google reCAPTCHA V2
- XML

## Documentação

W3Schools JavaScript:

https://www.w3schools.com/js/

EmailJS:

https://www.emailjs.com/

## Estrutura do projeto

projeto/

├── 07.html

├── style.css

├── script.js

├── sitemap.xml

├── README.md

└── img/

    ├── foto1.png

    └── foto1.jpg