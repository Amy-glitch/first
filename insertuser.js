exports.insertUser = function (client) {
    
    
    
    client.query('INSERT INTO users(u_id,username,pwd) VALUES(2,"pofpof","pof1");', (err, ress) => {
        console.log(ress);

    });
    client.end();
    
    
    
    return "user";
  };