//const: 상수지정. 지원하지 않는 브라우저가 존재.
var express = require('express'); 
var app = express();

var server = app.listen(3000, function(){
    console.log('start server : localhost:3000');
});
//라우터
app.get('/',function(req, res){
    res.send({
        corsTest: '접속환영'
    })
});

app.set('views',__dirname+'/views'); //디폴트폴더 설정
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.get('/hi',function(req, res){
    res.render('ex.html');
});

var cors = require('cors');
app.use(cors()); //전체허용
// var corsOptions ={
//     origin : "http://127.0.0.1:5500"
//     ,credentials : true
// }
// app.use(cors(corsOptions)); //특정url만 허용

// app.get('/ex',function(req, res){
//     var request = require('request');
//     request('http://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=01%2Fu7SxCxMdAKSpKhhWj%2Fx4Qh9TmVtiTH%2BIWuVKC1G55zIZzc%2FJ61x4mSkmjAoWE7G7YJgmM8tQzmQs%2B6dGdng%3D%3D&numOfRows=10&pageNo=1&type=json&dissCd=1&znCd=11', function(error, respense,body){
//     if(!error & respense.statusCode == 200){
//         res.send(body);
//     }    
//     console.log(error);
//     });
// });

var oracledb = require('oracledb');
app.get('/db',function(){
    oracledb.getConnection({
        user : 'java'
        ,password : 'oracle'
        ,host : 'localhost'
        ,database : 'xe'
    }, function(err, conn){
        if(err){
            console.log('접속실패',err);
            return;
        }else{
            console.log('접속성공');
            conn.execute('select * from employees'
            ,{}
            ,{outFormat:oracledb.OBJECT}, function(err, result){
                if(err) throw err;
                console.log('query read succes');
                arrStr = JSON.stringify(result.rows);
                arr = JSON.parse(arrStr);
                console.log(arr[0].EMOLOYEE_ID + " "+arr[0].EMP_NAME);
            });
        }
    });    
});