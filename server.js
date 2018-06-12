const hapi = require('hapi');
const mongoose = require('mongoose');

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
