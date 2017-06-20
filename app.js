const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  var list = [];
  list.push({item :"Learn Node Basics", checked :"checked"});
  list.push({item :"Learn Express Basics", checked :"checked"});
  list.push({item :"Learn Mustache", checked :"checked"});
  list.push({item :"Learn HTML forms with Express"});
  list.push({item :"Learn about authenticaton"});
  list.push({item :"Learn how to connect to PostgreSQL"});
  list.push({item :"Learn how to create databases"});
  list.push({item :"Learn SQL"});
  list.push({item :"Learn how to connect to PostgreSQL from Node"});
  list.push({item :"Learn how to use Sequelize"});
  res.render('todo', {list :list});

})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
