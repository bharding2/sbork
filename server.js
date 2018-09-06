const hapi = require('hapi');
const pgp = require('pg-promise')();

// const mongoose = require('mongoose');
// const Player = require('./models/player');

// mongoose.connect('mongodb://sbork:sb0rkus3r@ds111492.mlab.com:11492/sbork');

// mongoose.connection.once('open', () => {
//   console.log('database connected');
// });

const db = pgp('postgres://lvlffixc:plPkzgl7k3Q5RukWoJuua-VXw4eeivdb@stampy.db.elephantsql.com:5432/lvlffixc');

const server = hapi.server({
  port: 5555,
  host: 'localhost'
});

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return 'sbork';
    }
  });

  await server.start();
  console.log(`server running at: ${server.info.uri}`);
};

init();
