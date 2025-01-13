const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

let tarefas = ['Arrumar o quarto', 'Comprar no supermercado'];

app.get('/', (req, res) => {
    res.render('index', {tarefasList: tarefas});
});

app.get('/delete/:id', (req, res) => {
    tarefas = tarefas.filter((array, index) => {
	if (index != req.params.id) {
	    return array;
	}
    });
    res.render('index', {tarefasList: tarefas});
});

app.listen(5000, () => {
    console.log('Servidor está rodando');
});
