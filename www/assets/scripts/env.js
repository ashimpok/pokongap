//Author: ashimpok@gmail.com
//License: UYP - Use as you please!
//Description
//This script contains environment constants and methods 
//used throughout the site

var Environment = {
    JsonHandler: "http://localhost:51045/WebSite1/MobileInterface.ashx",
    InitName: "ready", //"mobileinit"
    
    PostRequest: function (jsonObject, onSuccess, onError) {
        console.log(JSON.stringify(jsonObject));
        
        $.ajax({
          type: "GET", /*MUST USE GET*/
          url: this.JsonHandler,
          cache: false,
          dataType: "json",
          data: { jsonData: JSON.stringify(jsonObject) },
          contentType: "application/json; charset=utf-8",          
          success: function(data, Status){                   
            if(typeof(onSuccess) === "function")
              onSuccess(data, Status);
          },
          error: function(data, Status, err){
            if(typeof(onError) === "function")
              onError(data, Status, err);
          }
        });      
    },

    //Pages must call this to setup cross domain access
    //and other global settings
    PageSetup: function () {
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;
        
        //If there are data-birth fields attach datetimepicker
        $('.date-birth').datepicker(
            {
                changeYear: true,
                changeMonth: true,
                yearRange: "c-60:c-14"                
            }
        );
    }
}
