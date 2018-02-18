
const posts = [
    "hola plis como saben yo tambien estoy en busca de un juego que cuando era muy pequeñita lo juegue pero no recuerdo su nombre, recuerdo que el juego cuando tu entrabas la imagen que te ponian cuando el juego se estaba cargando era de una chica y un chico exploradores aventureros, y luego cuando ya cuando entrabas el juego era como que los personajes eran bien pequeños y es como que tenias que explorar para poder desbloquear mas islitas cada una distintas y tenias cada vez mas personajes era algo asi como una isla pirata y la musica tambien era como de piratas... primero empezaban con los personajes del chico y la chica y a medida que ibas avanzando de nivel y tenias mas dinero o mas rubies no recuerdon muy bien esa parte y te daban personajes nuevos, nose si es un juego que se pueda jugar o que ya venga instalado en la tablet porque nose muy bien si eso me lo instalaron en la tablet o ya venia, plisssss les pido si alguien sabe como se llama avisenmeee que estoy desesperada por volverlo a jugar...",
    "Hola, busco un juego de un explorador que cae en un avión y creo que se metía a una pirámide era muy entretenido, si sabes algo me cuentas...creo que si te demorabas salía un fantasma persiguiendote",
    "Hola busco un juego de una abeja que entra a una piramide y dispara con su colita, y una de sus misiones era contra una araña grande que aparece adentro de la piramide",
    "Hola alguien sabe como se llama el juego en donde una niña es capturada por un monstruo en una feria, y el niño de traje azul con un casco va a salvarla, ellos están primero en un cine. El niño lanza pelotas o balones dependiendo del daño que le hagan",
    "HOLA BUSCO UN JUEGO DE UN SOLDADO, que se podia subir a tanques habian tanques grandes y chicos, era bien basico eso si que si te daban al tanque salia humo y tenias que salir rapido, y despues esplotaba",
    "hola me gustaría que me ayudaran a encontrar el título de un juego para la NES, se trataba de un agente que disparaba a sus enemigos con una pistola, parecia un juego de ganster, el personaje se podía meter a las coladeras de la ciudad y en el drenaje había mas misiones en donde caía acido de color azul del techo del drenaje, espero que me ayuden a encontrar el titulo de dicho video juego gracias comunidad gamer saludos",
    "Busco un juego de una casa embrujada, tenias que agarrar dulces y llaves para abrir puertas, y tambien podias cambiar los personajes a payaso policia etc",
    "Esta es la descripcion que me dan dos amigos sobre su juego añorado de antaño:, juego de PS2 (hablamos entre año 2000 a 2005) 3D, Multiples enemigos en pantalla, uno de los personajes (o el personaje pues no recuerdan si eran varios) era una bruja, en algun punto la bruja gritaba (quizas lo mas importante para ellos): 'I AM REBORN', y esa es toda la informacion que he logrado recopilar al respecto. Gracias por la ayuda :)",
    "Estoy buscando un juego que es de plataformas y estrategia. Trata de un cubo parecido a una cajita de lavadora. Tiene un agujero y de ese agujero sale una especie como taladro que puede romper otros cubos como de piedra. el juego se desarrolla como si estuvieran en un laberinto bajo la tierra y la estrategia es que al romper estos cubos puede llegar a la salida. este cubito es de color blanco. agradezco la ayuda",
    "Hola! Busco un juego de pc, época alrededor del 2000, fantasía medieval, vista como isométrica pero se podía girar si no me equivoco como una brújula, recuerdo que había varios personajes con diferentes habilidades que se podía seleccionar y subir de nivel y entre ellos había un arquero. Recuerdo que iban juntos por el escenario pero tu sólo podías manejar uno a la vez. No es tipo baldur gate y esos que son rol puro, éste era como un poco más de acción a golpe de ratón. Creo que recordar que tenias que derrotar enemigos (muchos de ellos magos) que estaban delante de cofres de distintos niveles. Se que no doy muchas pistas pero no recuerdo mucho más Gracias",
    "Hola estoy buscando un juego de los 80 que se trata de un hombre que se monta en una especie de avestruz y va recogiendo huevos, y además tiene que matar a una especie de dragones con una lanza que lleva, un juego muy divertido si me puedes ayudar te estaría muy agradecido muchas gracias y un saludo ",
    "Estoy buscando un título de juego de video de los años 90, en donde un hombrecito volador tenia que pasar varios niveles, el que mas recuerdo es donde dentro de una pirámide el jefe era una avispa",
    "Busco un juego que solía salir en los video juegos (maquinitas como muchos los conocemos). Trata sobre algo parecido a unos pollitos alienigenas que vas disparando, cuando se acerca el enemigo se ocultan debajo de la tierra. Si no salen a tiempo mueren!, Me ayudan a saber cómo se llama",
    "Buen día! Busco un juego que era de la NES. Lo que recuerdo era que el personaje era como una especie de explorador, ademas traia una mochila. Al saltar de un sitio alto podia usar unas hélices de helicóptero (qie estaban dentro de la mochila) para descender lento. También tenia un gancho con el qie podias escalar. Recuerdo que el juego se desarrollaba en una selva o jungla y también mostraban un mapa al finalizar el nivel. Saludos!",
    "HOLA ¿QUE TAL? NECESITO POR FAVOR QUE ALGUIEN ME DIGA POR FAVOR, EL NOMBRE DE UN JUEGO QUE VENIA EN UN DISCO PARA LA COMPUTADORA Y SE TRATABA DE UN COMO MARCIANO AZUL, Y APRENDÍAS INGLES Y SE HACIA MISIONES, POR EJEMPLO EN UNA COCINA APRETABAS TODAS LAS COSAS QUE SE ENCONTRABAN Y TE LO DECIAN EN INGLES Y EN ESPAÑOL, Y TENIAS QUE ENCONTRAR LAS PALABRAS DE CADA HABITACION PARA QUE AL FINAL TE VENIA UNA TIPO ORACIÓN Y LAS TENIAS QUE A COMPLETAR CON ESAS PALABRAS. POR FAVOR EN SERIO ME URGE SABER EL NOMBRE LO JUGABA DE NIÑA Y LLEVO AÑOS BUSCANDO MI DISCO E INTENTANDO SABERLO. POR FAVOR",
    "Hola quiero saber como se llamaba un juego que era de un niño gordito, y los niveles eran de comida, y cada vez que llegabas al final para ganarlo tenias que derrotar a un cerdo con la boca ancha que arrojaba cerditos por la boca",
    "Burnos días A ver si alguien puedr ayudarme. Busco el nombre de un video juego del nintendo 1985 (ese modelo) no se de q año es el juego. El personaje iba entrando en habitaciones q llevaban A otras habitaciones, eran cuartos en olan castillo, como de la epoca medieval. Y los cuartos tenian trampas, y pruebas x superar. Los poderes q el personaje cogia estaban en forma de posiones maguca es decir, liquidos de colores dentro de tubis de laboratorio, y el traje del personaje era como una bata larga y llevaba un sombrero grande. Como de mago medieval. Nunca supe mas de ese juego y es como una espina xq jamas lo pase ni recyerdo el nombre si alguien le suena y me puede orientar x el nombre se lo agradezco Buenos dias.",
    "Hola busco un juego de family, el protagonista era un niño que disparaba pelotas para vencer a sus enemigos, era una aventura donde avanzabas a través de niveles laterales, recuerdo que entre sus jefes estaba un tigre que ocupaba la mitad de la pantalla, asi como la cabeza de un indio gigante, no recuerdo nada más espero me puedan ayudar",
    "estoy buscando un juego de un dinosaurio, que comenzando llega en una canasta por un rió o una cascada y lo crían unos animalitos como unas volitas con una cola atrás, y tiene que ir buscando llaves para pasar por puertas",
    "como se llama el juego en donde empiezas en un lugar con lava y tienes que ir subiendo por unos ascensores, era tipo rol en 3ra persona, lo juge mas o menos en el 2004 o 2005 para que sepas que es viejito :3",
    "hoolaaaaaaaaaaaaaa busco un juego, me se el nombre pero a un asi no lo puedo encontrar, el juego se llama 'Challenge' este era para celular sony ericsson, en si el juego era tetris con mucho mas dinamismo, era otro rollo se divertia una con los animaciones originales que traia los juegos de java pero a un asi no lo encuentro, si alguien se llega leer este comentario por favor buscalo para ver si tu perspectiva de goodle te lo da.. si lo hallas contestame es muy diertido. el juego solo asi se llama 'Challenge' no aceptes otros. el juegoo venia en un cell sony ericsson w910i",
    "Buenas busco un juego que lo jugaba alrededor de 2007-2008-2009 que era de plataformas y a la vez con armas, los enemigos tenian un casco negro y rojo y tu personaje negro y verde, habia varias pruebas y varias armas de las cuales habia una espada laser, era un juego entretenido y lo jugaba en la biblioteca de mi colegio, hace mucho que no se nada de el y se me olvido el nombre, otra cosa que llego a recordar es que al final de cada prueba habia un boss. Gracias por leerme",
    "Busco un juego donde yo controlo a muchos monstruos con una mano, y tengo que encontrar un caballero y destruir el pozo que sería la vida de ellos, Ejemplo de los monstruos: Ponía a estudiar a los hechiceros",
    "Busco aneladamente un juguetue k era tipo zorrito, teniai sus manitos juntas komo para agarrar hojas, yo soy del 95 y hasta ASE poko vi ese mono pero en grandeeee, es hermoso super tierno, es tipo zorrito blanko y negro y su varita muy tierna",
    "Hola ¿Cómo están?. Estiy buscando un par de juegos que jugaba de pequeña, tengo muy pocos recuerdos de ellos y tampoco sé las plataformas ni nada, solo puedo decirles que hoy dia tengo 16 años, asi no han de ser demasiado viejos. El primer juego era un juego era un juego de plataformas, en el que tu eras una 'princesa ardilla' o algo asi, estabas como bajo la tierra y te movias por túneles o algo así, no sé si buscabas oro u otra cosa, pero era algo así. El segundo juego era uno de esos juegos en los que debes salir de un lugar donde estás encerrado. Estabas en un tren, tengo el recuerdo de que había muchísimo color verde no lo tengo muy claro, pero era un tren fantasma o algo por el estilo. Espero puedan ayudarme a pesar de lo poco detalladas que son mis peticiones, muchas gracias.",
    "Hola. Estoy buscando 2 nombres de juegos para pc mas o menos entre el año 1999 y 2000. El primero es en 3D en tercera persona, el personaje de color naranja es como un zorro (no es el crash bandicot) va corriendo por una playa donde unos extraterrestres han invadido la ciudad. El nombre del juego contenia la palabra Star pero mas de eso no recuerdo. El segundo juego se trataba de una carrera de avionetas en 3D tambíen que volaban entre acantilados sobre el agua a mucha velocidad. Gracias!",
    "Buenos días, El juego que me gustaría encontrar venía para psx. Era de acción. Creo que era estilo anime. El primer escenario era nocturno. Si mal no recuerdo ibamos sobre un crucero. Me parece que se podían escoger 2 personajes para jugar una era una mujer rubia. Usábamos pistolas. Vestían de forma elegante. Y de pronto aparecían muchos enemigos trajeados que habia que exterminar. No recuerdo más porque no llegué a avanzar más jeje. PD: no es trap gunner :(",
    "Hola necesito tu ayuda, he visto que es muy amable y ayuda a encontrar juegos. Llevo muucho tiempo intentando recordar el nombre de un juego al que jugaba en un mac PC. Era de ordenador, antiguo (sobre el 2000- 2006 igual no lo sabría decir). Tu eras un personaje amarillo naranjoso con unas extremidades poco marcadas (como si fueras un Kirby amarillo pero más feo). El personaje levaba una mochila verde y tenía que ir recogiendo gemas. Creo recordar que llevaba una pala en la mano. El jueo era de diferentes pantallas, ibas avanzando poco a poco. En cada pantalla había dos o tres plataformas horizontales (tierra por abajo y hierba verde por encima). El juego se parece al Spelunky de paisaje pero eran niveles verticales, creo que no estaban bajo tierra (era todo de un color verde con agua azul en algunas pantallas) y el personaje no era un hombre, era como una patat extraña de plastelina amarilla. Espero que pueda ayudarme a recordar el nombre! Perdone por hacerle perder su tiempo",
    "ola amigo, entre a tu pagina y deje un comentario, pero no pude visualizarlo no se si se puso o no, solo quiero saber de un juego que jugaba hacer tiempo, mas o menos por los años 90 se trata de un juego de aviones lo unico que recuerdo es que se enfrentaba en a un tren y conforme  hibas pasando misiones te enfrentabas a un ferrocarril, ehh iggual hibas agarrando armas tmb la nave se le ponian dos bolas como protectores, es lo unico que recuerdo. saludos",
    "Buen día. Quisiera saber si conoce un juego que fue para palm, de un caviernicola, tratando de avanzar por varios niveles,, se desarrolla en el hielo y hay varios trucos que había que descifrar. Saludos. Enviado desde mi Sony Xperia TM smartphone de Telcel ",
    "video juego viejisimo de maquina grande. tremendo juego de aventura q nunca mas lo pude encontrar. se trata de 2 magos o duendes q tiran como vaias bolas a la ves y los ecenarioa son plataformas los enemigos q me acuerdo algunos de ellos aparecen cañones q disparan y van saltando de plataformas en plataformas. un ecenario me acuerdo q era de hielo",
    "Hola cuando era niña mas o menos del 91 creo jugue pacman en un atari. El pacman no es como estos no, traía niveles y tenia bombitas salían las frutitas que ganabas en cada nivel lo volvi a encontrar en el 2006 pero no puse atencion, yo quiero ese me recuerda a esa etapa tan bonita de mi vida por favor ayudenme"
];


const genButton = document.querySelector('.generate');
let inicio = "", introduccion ="", descripcion = "", cierre ="", fin = "";

function generateContent() {

    const randomTelefonitos = [];
    const postStart = [];
    const postIntroduction = [];
    const postDescription = [];
    const postClosing = [];
    const postEnd = [];

    //selecciona posts al azar, reemplaza puntos por comas para estandarizar el formato y los guarda en el arreglo de donde saldra el post final  
    for (let index = 0; index < 10; index++) {
        let randomvalue = Math.floor(Math.random() * posts.length);
        let randompost = posts[randomvalue].replace(/\./g, ',');
        randomTelefonitos.push(randompost);
    }
    //cada post, se va a dividir por comas
    randomTelefonitos.forEach(post => {
        let b = post.split(',');
        postStart.push(b.shift());
        if (b.length > 5) {
            postIntroduction.push(b.shift());
        }
        postEnd.push(b.pop());
        if (b.length > 5) {
            postClosing.push(b.pop());
        }
        postDescription.push(...b);
    });

    console.log(postStart); 
    console.log(postIntroduction); 
    console.log(postDescription); 
    console.log(postClosing);
    console.log(postEnd);

    formPhrase(postStart,postIntroduction ,postDescription, postClosing, postEnd);
}

function formPhrase(start,introduction, description, closing,  end) {
    inicio = start[Math.floor(Math.random() * start.length)]+',';

    introduccion = introduction[Math.floor(Math.random() * introduction.length)]+',';

    //descripcion toma tres frases distintas no vacias
    let descripcion1 = description[Math.floor(Math.random() * description.length)];
        while (descripcion1 === "") {
            descripcion1 = end[Math.floor(Math.random() * end.length)];
    }
    let descripcion2 = description[Math.floor(Math.random() * description.length)];
        while (descripcion2 === "" || (descripcion2 === descripcion1)) {
            descripcion2 = end[Math.floor(Math.random() * end.length)];
    }
    let descripcion3 = description[Math.floor(Math.random() * description.length)];
        while (descripcion3 === "" || (descripcion3 === descripcion1) || (descripcion3 === descripcion2)) {
            descripcion3 = end[Math.floor(Math.random() * end.length)];
    }

    descripcion = descripcion1 + ',' + descripcion2 + ',' + descripcion3;
    
    cierre = closing[Math.floor(Math.random() * closing.length)];

    //final de la frase
    fin = end[Math.floor(Math.random() * end.length)]
    while (fin === "") {
        fin = end[Math.floor(Math.random() * end.length)];
    }
    fin = '. ' + (fin.charAt(1).toUpperCase()) + (fin.substr(2));   
}

//contenido 
function insertText() {
    generateContent();
    document.getElementById('telefonito').innerHTML = inicio + introduccion + descripcion + cierre +  fin;
}

genButton.addEventListener('click', insertText);

