const PUBLIC_KEY = "YgQuKm2EwCrLLqcoA";
const SERVICE_ID = "service_wn3qq59";
const TEMPLATE_ID = "template_gnr43f2";

emailjs.init({
    publicKey: PUBLIC_KEY
});


const botaoCorFundo = document.getElementById("btn-cor-fundo");

const cores = [
    "#b387e6", // Lilás
    "#fbaddc", // Rosa claro
    "#b6cceb"  // Azul claro
];

let indice = 0;

botaoCorFundo.onclick = function () {

    const novaCor = cores[indice];

    document.body.style.backgroundColor = novaCor;

    document.querySelector("main").style.backgroundColor = novaCor;

    document.querySelector(".inicio").style.backgroundColor = novaCor;

    document.querySelector("#servicos").style.backgroundColor = novaCor;

    document.querySelector("#projetos").style.backgroundColor = novaCor;

    document.querySelector("#experiencia").style.backgroundColor = novaCor;

    indice++;

    if (indice >= cores.length) {
        indice = 0;
    }
};

const formulario = document.getElementById("contact-form");

const statusFormulario = document.getElementById("status-form");


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const captcha = grecaptcha.getResponse();

    if (!captcha) {

        statusFormulario.textContent =
            "Por favor, confirme o reCAPTCHA.";

        return;
    }

    statusFormulario.textContent =
        "Enviando mensagem...";

    emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formulario
    )

    .then(function () {

        statusFormulario.textContent =
            "Mensagem enviada com sucesso!";

        formulario.reset();

        grecaptcha.reset();

    })

    .catch(function (error) {

        console.error(error);

        statusFormulario.textContent =
            "Erro ao enviar a mensagem.";

        grecaptcha.reset();

    });

});