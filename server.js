(function() {
	var io;
	io = require('socket.io').listen(4000);
	io.sockets.on('connection', function(socket) {
		socket.emit('news', {
			hello : 'world'
		});
		socket.on('my other event', function(data) {
			console.log(data);
		});
	});
}).call(this);
