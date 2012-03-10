//Ashim. This script contains enviroment constants used throughout the site
var ServerUrl = "http://localhost/CISIPortalWeb/pub/MobileRequestHandler.ashx";

//Ashim. Pages must call this to setup cross domain access
function pageSetup() {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;    
}