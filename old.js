const http=require('http');
http.createServer((createServerreq,res)=>{
res.write("hola mundo");
res.end();
    
})
.listen(8081);
console.log('Escuchando el puerto',8081); 
