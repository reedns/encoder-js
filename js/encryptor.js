var encoder = {
  setMessage: function() {
    this.message = document.getElementById('message').value;
  },
  getPassword: function() {
    this.password = prompt('Enter the passcode to protect the message');
  },
  setUrl: function() {
   this.url = document.URL + '?' + this.encrypt();
  },
  replaceMessageWithUrl: function () {
    document.getElementById('message').value = this.url;
  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password);
    console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8));
    return cypher;
  },
  protect: function() {
    this.setMessage();
    this.getPassword();
    this.setUrl();
    this.replaceMessageWithUrl();
  }
}

var decoder = {
  enterPassword: function() {
    this.password = prompt('Enter the passcode to decrypt the secret message');
  },
  getCypher: function() {
    this.cypher = document.URL.split('?'[1]);
  },
  decrypt: function() {
    this.enterPassword();
    this.getCypher();
    return CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8);
  }
}
