//Author: ashimpok@gmail.com
//License: UYP - Use as you please!
//Description
//This script contains environment constants and methods 
//used throughout the site

var Environment = {
    JsonHandler: "http://localhost:51045/WebSite1/MobileInterface.ashx",
    InitName: "pageinit", //"pageinit" or "ready"
    
    PostRequest: function (jsonObject, onSuccessCall, onErrorCall) {
        console.log(JSON.stringify(jsonObject));
        
        $.ajax({
          type: "GET", /*MUST USE GET*/
          url: this.JsonHandler,
          cache: false,
          dataType: "json",
          data: { jsonData: JSON.stringify(jsonObject) },
          contentType: "application/json; charset=utf-8",          
          success: function(data, Status){                   
            if(typeof(onSuccessCall) === "function")
              onSuccessCall(data, Status);
          },
          error: function(data, Status, err){
            if(typeof(onErrorCall) === "function")
              onErrorCall(data, Status, err);
          }
        });      
    },

    //Pages must call this to setup cross domain access
    //and other global settings
    PageSetup: function () {
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;
    },
    
    ShowError: function(title, message) {
      alert(title + '\n' + message);
    },
    
    ShowMessage: function(title, message) {
      alert(title + '\n' + message);
    },
        
    HasOfflineContent: function(){
      return true;
    },
    
    ChangePage : function(newPage){
		$.mobile.changePage(newPage);   
    }
}
