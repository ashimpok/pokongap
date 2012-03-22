//Author: ashimpok@gmail.com
//License: UYP - Use as you please!
function ApplicationShowError(title, message) {
  alert(title + '\n' + message);
}

function ApplicationShowMessage(title, message) {
  alert(title + '\n' + message);
}

/*Request objects*/
function MobileLoginRequest() {
  this.RequestType = "MobileLoginRequest"
  this.UserName = null
  this.Password = null
}
