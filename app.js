var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = require('./router/main.js')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));


app.listen(3000, function(){
	console.log('Connected 3000 port');
});

// var net = require('net');

// var hostname = '54.180.81.198';
// var port = 3000;

// // 서버에 연결
// var client = new net.Socket();
// client.connect(port, hostname, function() {
//     console.log('서버에 연결됨 -> ' + hostname + ':' + port);
//     client.write('안녕');
//     console.log('시간 : ' + new Date().getTime());
// });

// // 서버로부터 데이터를 받았을 때 발생하는 이벤트
// client.on('data', function(data) {
// 	console.log('서버로부터 받은 데이터 -> ' + data);
//     console.log('시간 : ' + new Date().getTime());
//     // 클라이언트 연결 종료
// 	client.destroy();
// });

// client.on('close', function() {
//     console.log('연결 끊어짐.');
//     console.log('시간 : ' + new Date().getTime());
// });


