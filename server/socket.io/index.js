const socket = require('socket.io');

module.exports = (server, app) => {
  const io = socket(server, { path: '/socket.io' });
  const loggedUserlist = io.of('/loggedUser');
  app.set('io', io);

  //@ when connected on base io
  io.on('connection', (socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('connected with a new client. ip is = ', ip, socket.id);

    // when disconnected
    socket.on('disconnect', () => {
      console.log('disconnected from user = ' + ip);
    });

    //3. when error
    socket.on('error', () => {
      console.log(err);
    });
  });

  //@ when connected with namespace
  loggedUserlist.on('connection', (socket) => {
    //! init //////////////////////////////////////////
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('namespace = /loggedUser');
    console.log('connected with a new client. ip is = ', ip, socket.id);

    //when disconnected
    // socket.on('disconnect', () => {
    //   console.log('disconnected from user = ' + ip);
    // });

    // when error
    socket.on('error', () => {
      console.log(err);
    });

    //! listners //////////////////////////////////////////////
    socket.on('addLoginUser', (userData) => {
      socket.join(userData.id);

      socket.on('disconnect', () => {
        socket.leave(userData.id);
      });
    });
  });
};
