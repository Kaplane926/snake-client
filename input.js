

let connection;

const setupInput = function(conn) {
connection = conn;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();
stdin.on('data', handleUserInput);
return stdin;
}

const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();    
  }
  if (key === '\w'){
    connection.write('Move: up')
  }
  if (key === '\s'){
    connection.write('Move: down')
  }
  if (key === '\a'){
    connection.write('Move: left')
  }
  if (key === '\d'){
    connection.write('Move: right')
  }
  if (key === '\h'){
    connection.write('Say: hiiii')
  }
  if (key === '\p'){
    connection.write('Say: Byyyeeee')
  }
  if (key === '\l'){
    connection.write('Say: No Step On snek')
  }
  if (key === '\v'){
    connection.write('Say: Byyyeeee')
  }
  if (key === '\;'){
    connection.write('Say: :)')
  }
  if (key === '\/'){
    connection.write('Say: ???')
  }
};

const obj = {setupInput: setupInput}

module.exports = obj