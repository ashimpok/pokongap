//Author: ashimpok@gmail.com
//License: UYP - Use as you please!
//Description
//This script contains environment constants and methods 
//used throughout the site

var Environment = {
    JsonHandler: "http://localhost/pub/MobileRequestHandler.ashx",
    getInitMethod: function () {
        //return "mobileinit"
        return "ready";
    },

    sendRequest: function (data) {
        
    },

    //Pages must call this to setup cross domain access
    //and other global settings
    pageSetup: function () {
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;

        //If there are date-birth fields attach datetimepicker
        $('.date-birth').datepicker(
            {
                changeYear: true,
                changeMonth: true,
                yearRange: "c-60:c-14"
            }
        );
    }
}
