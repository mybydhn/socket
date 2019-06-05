let express = require('express');
let app = express();
app.use(express.static(__dirname));
let server = require('http').createServer(app);
let io = require('socket.io')(server);
io.on('connection',function(socket){
    console.log('服务器接收到客服端的连接');
    socket.on('message',function(message){
        console.log(message);
        socket.send('服务器说'+message)
    })
})
server.listen(3000);