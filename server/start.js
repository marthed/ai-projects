var port = 8080;

const app = require('./app');
app.set('port', process.env.PORT || port);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});