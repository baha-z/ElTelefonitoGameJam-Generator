
const posts = ["ola amigo, entre a tu pagina y deje un comentario, pero no pude visualizarlo no se si se puso o no, solo quiero saber de un juego que jugaba hacer tiempo, mas o menos por los años 90 se trata de un juego de aviones lo unico que recuerdo es que se enfrentaba en a un tren y conforme  hibas pasando misiones te enfrentabas a un ferrocarril, ehh iggual hibas agarrando armas tmb la nave se le ponian don bolas como protectores, es lo unico que recuerdo. saludos",
                "Buen día. Quisiera saber si conoce un juego que fue para palm, de un caviernicola, tratando de avanzar por varios niveles,, se desarrolla en el hielo y hay varios trucos que había que descifrar. Saludos. Enviado desde mi Sony Xperia TM smartphone de Telcel ",
                "Hola cuando era niña mas o menos del 91 creo jugue pacman en un atari. El pacman no es como estos no, traía niveles y tenia bombitas salían las frutitas que ganabas en cada nivel lo volvi a encontrar en el 2006 pero no puse atencion, yo quiero ese me recuerda a esa etapa tan bonita de mi vida por favor ayudenme",
                "video juego viejisimo de maquina grande. tremendo juego de aventura q nunca mas lo pude encontrar. se trata de 2 magos o duendes q tiran como vaias bolas a la ves y los ecenarioa son plataformas los enemigos q me acuerdo algunos de ellos aparecen cañones q disparan y van saltando de plataformas en plataformas. un ecenario me acuerdo q era de hielo"];


const genButton = document.querySelector('.generate');
const randomTelefonitos = [];
const postStart = [];
const postDescription =[];
const postEnd = [];

function generateContent() {
    
    //selecciona 3 posts al azar, reemplaza puntos por comas para estandarizar el formato y los guarda en el arreglo de donde saldra el post final  
    for (let index = 0; index < 3; index++) {
    let randomvalue = Math.floor(Math.random() * posts.length);
    let randompost =  posts[randomvalue].replace(/\./g, ',');
    randomTelefonitos.push(randompost);
    }
    //por cada elemento, se va a dividir por comas
    randomTelefonitos.forEach(post => {
        let b = post.split(',');
        postStart.push(b.shift());
        postEnd.push(b.pop());
        postDescription.push(... b);
    });
}

//contenido 
function insertText() {
    generateContent();
    document.getElementById("telefonito").innerHTML =  `${postStart[Math.floor(Math.random() * postStart.length)]},
                                                        ${postDescription[Math.floor(Math.random() * postDescription.length)]},
                                                        ${postDescription[Math.floor(Math.random() * postDescription.length)]}.
                                                        ${postEnd[Math.floor(Math.random() * postEnd.length)]}`;
    
}

genButton.addEventListener('click', insertText);

