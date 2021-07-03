exports.insertUser = function (client) {
    
    
    
    client.query("INSERT INTO users(u_id,username,pwd) VALUES(3,'frank','pof1');", (err, ress) => {
        console.log(err);
       console.log(ress);
       client.end();
     
     });
    
    
    
    return "user";
  };