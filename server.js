(function() {
	var io;
	var VIEW_SOCKET_GROUP_NAME = "viewSocketsRoom";
	io = require('socket.io').listen(4000);
	
	io.sockets.on('connection', function(socket) {
		
		socket.on('join' , function() {
			socket.join(VIEW_SOCKET_GROUP_NAME);
		});
		
		socket.on('sendMessage', function(data) {
			io.to(VIEW_SOCKET_GROUP_NAME).emit('onMessageReceiver' , data);
			socket.emit('complate');
		});
	});
}).call(this);
