import express = require('express');
import path = require('path');
import indexRouter from './routes/indexRouter';
import optionsRouter from './routes/optionsRoutes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/options', optionsRouter);


const port = process.env.PORT || 3100;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

