// 0. Variables de entorno
require('dotenv').config();

// 1. Express
const express = require('express');
const { engine } = require('express-handlebars');

// 2. Inicializar la app
const app = express();

// 3. Registrar engine de handlebars
app.engine('handlebars', engine());

// 4. Crea el main.handlebars
app.set('view engine', 'handlebars');
app.set('views', './views');

// 5. Definición de puerto
const port= process.env.PORT || 3000;

// 6. Escucha de puerto
app.listen(port, () => {
    console.log("App running in port 3000")
});

// 7. Static + middleware
// Static Assets 
app.use('/assets', express.static(path.join(__dirname, 'public')));

// 8. App.get /
// 8.1 Fetch noticias
app.get('/noticias', (req, res) => {
		// 8.2 Render noticias
    res.render('index',{
        title: "AAAA"
    });
})