function VigenèreAutokeyCipher(key, abc) {
  this.keyStore = '';
  this.encode = function (str) {
  	var box = [abc];
	this.keyStore = key;
	for(var k in str){
		this.keyStore += abc.indexOf(str[k]) < 0 ? '' : str[k];
	}
    for(var i in abc){
		box.push(abc.split(abc[i])[1] + abc.split(abc[i])[0] + abc[i]);
	}
	var encoded = ''
	var espaces = 0;
	for(var j in str){
		if(abc.indexOf(str[j]) < 0){
			espaces--;
			encoded += str[j];
		}else{
			encoded += box[abc.indexOf(this.keyStore[(parseInt(j) + parseInt(espaces))])][abc.indexOf(str[j])];
		}
	}
	return encoded;
  };
  this.decode = function (str) {
    var box = [abc];
	this.keyStore = key;
    for(var i in abc){
		box.push(abc.split(abc[i])[1] + abc.split(abc[i])[0] + abc[i]);
	}
    var decoded = '';
	var espaces = 0;
	for(var j in str){
		if(abc.indexOf(str[j]) < 0){
			espaces--;
			decoded += str[j];
		}else{
			idx = parseInt(j) + parseInt(espaces);
			decoded += abc[box[abc.indexOf(this.keyStore[idx])].indexOf(str[j])];
			this.keyStore += abc[box[abc.indexOf(this.keyStore[idx])].indexOf(str[j])];
		}
	}
	return decoded;	
  };
}