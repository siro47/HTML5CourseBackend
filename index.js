var express= require('express');
var app = express();

var port =  process.env.PORT || 3000;

var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

var characters = [
    {
        name: 'Bob Parr',
        desc: 'El patriarca de la familia Parr, poseedor de super fuerza y una limitada invulnerabilidad.',
        thumbnail: 'assets/images/bob.jpg',
        image: 'assets/images/bob_details.png'
    },
    {
        name: 'Helen Parr',
        desc: 'La esposa de Bob, con la habilidad de' +
        ' estirar y moldear su cuerpo como si fuese de goma. Este personaje' +
        ' se basa en el personaje de DC Comics, Elasti-Girl de la Doom Patrol,' +
        ' el cual, Pixar Studios pidió prestado al personaje a DC Comics y haciendo' +
        ' cambios para crear el personaje de la película, y lograr así diferenciarlo' +
        ' al personaje de la historieta.',
        thumbnail: 'assets/images/helen.jpg',
        image: 'assets/images/helen_details.png'
    },
    {
        name: 'Dash Parr',
        desc: 'El inquieto segundo hijo de los Parr. Asiste al cuarto año de' +
        ' escuela y posee la habilidad de supervelocidad.',
        thumbnail: 'assets/images/dash.jpg',
        image: 'assets/images/dash_details.png'
    },
    {
        name: 'Violet Parr',
        desc: 'La hija adolescente del matrimonio Parr, capaz de hacerse' +
        ' invisible y crear resistentes campos de fuerza.',
        thumbnail: 'assets/images/violet.jpg',
        image: 'assets/images/violet_details.png'
    },
    {
        name: 'Jack Jack Parr',
        desc: 'El pequeño tercer hijo de la familia Parr, y todavía' +
        ' es un bebé.',
        thumbnail: 'assets/images/jack-jack.jpg',
        image: 'assets/images/jack_jack_details.png'
    }
]

var pixarCharacters = [
    {
        name: 'Bob Parr',
        desc: 'El patriarca de la familia Parr, poseedor de super fuerza y una limitada invulnerabilidad.',
        thumbnail: 'assets/images/bob.jpg',
        image: 'assets/images/bob_details.png'
    },
    {
        name: 'Helen Parr',
        desc: 'La esposa de Bob, con la habilidad de' +
        ' estirar y moldear su cuerpo como si fuese de goma. Este personaje' +
        ' se basa en el personaje de DC Comics, Elasti-Girl de la Doom Patrol,' +
        ' el cual, Pixar Studios pidió prestado al personaje a DC Comics y haciendo' +
        ' cambios para crear el personaje de la película, y lograr así diferenciarlo' +
        ' al personaje de la historieta.',
        thumbnail: 'assets/images/helen.jpg',
        image: 'assets/images/helen_details.png'
    },
    {
        name: 'Dash Parr',
        desc: 'El inquieto segundo hijo de los Parr. Asiste al cuarto año de' +
        ' escuela y posee la habilidad de supervelocidad.',
        thumbnail: 'assets/images/dash.jpg',
        image: 'assets/images/dash_details.png'
    },
    {
        name: 'Violet Parr',
        desc: 'La hija adolescente del matrimonio Parr, capaz de hacerse' +
        ' invisible y crear resistentes campos de fuerza.',
        thumbnail: 'assets/images/violet.jpg',
        image: 'assets/images/violet_details.png'
    },
    {
        name: 'Jack Jack Parr',
        desc: 'El pequeño tercer hijo de la familia Parr, y todavía' +
        ' es un bebé.',
        thumbnail: 'assets/images/jack-jack.jpg',
        image: 'assets/images/jack_jack_details.png'
    }
]

var quotes = [
    {character: 'Dash', quote: "We\'re dead! We\'re dead! We survived but we\'re dead!", image:"/images/dash.jpg"},
    {character: 'Edna', quote: "My God, you\'ve gotten fat.", image: "/images/edna.jpg"},
    {character: 'Mr. Increible', quote: 'We get there when we get there!', image:"/images/bob.jpg"},
    {character: 'Edna', quote: 'I never look back, darling! It distracts from the now.', image:"/images/edna.jpg"},
    {character: 'Edna', quote: 'No capes!', image:"/images/edna.jpg"},
    {character: 'Mr. Increible', quote: 'You keep trying to pick a fight, but I\'m still just happy you\'re alive.', image:"/images/bob.jpg"},
    {character: 'Elastic girl', quote: 'I think you need to be a bit more flexible.', image:"/images/helen.jpg"},
    {character: 'Violeta Parr', quote: 'We act normal, mom! I want to "be" normal! The only normal one is Jack-Jack, and he\'s not even toilet trained!', image:"/images/violet.jpg"}
];

app.get('/characters', (req, res, next) => res.send(characters));
app.get('/characters/:id', (req, res, next) => res.send(characters[req.params.id -1]));

app.get('/pixarcharacters', (req, res, next) => res.send(pixarcharacters));
app.get('/pixarcharacters/:id', (req, res, next) => res.send(pixarcharacters[req.params.id -1]));

app.get('/quotes', (req, res, next) => res.send(quotes));
app.get('/quotes/random', (req, res, next) => res.send(quotes[Math.floor(Math.random()*quotes.length)]));
app.get('/quotes/:id', (req, res, next) => res.send(quotes[req.params.id -1]));

app.listen(port);
