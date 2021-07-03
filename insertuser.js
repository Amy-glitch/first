exports.insertUser = function (client) {
    
    
    
    client.query('INSERT INTO users(username,pwd) VALUES("pofpof","pof1");', (err, ress) => {
        console.log(ress);

    });
    client.end();
    
    
    
    return "user";
  };