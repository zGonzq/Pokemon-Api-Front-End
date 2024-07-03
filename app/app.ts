import express = require('express');
import path = require('path');
import indexRouter from './routes/indexRouter';
import optionsRouter from './routes/optionsRoutes';
import expressEjsLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressEjsLayouts)
app.set('layout', 'layouts/layout');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/actions', optionsRouter);


const port = process.env.PORT || 3100;
app.listen(port, () => {
    console.log(`Pokedex iniciada en http://localhost:${port}/`);
});

