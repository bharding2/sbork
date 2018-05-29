const hapi = require('hapi');

const server = hapi.server({
  port: 5555,
  host: 'localhost'
});

const init = async () => {
  await server.start();
  console.log(`server running at: ${server.info.uri}`);
};

init();
