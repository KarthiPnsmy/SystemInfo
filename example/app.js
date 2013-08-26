// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


var win = Ti.UI.createWindow({
    backgroundColor:"#ccc"
});

var systeminfo = require('titutorial.sysinfo');

var scrollView = Ti.UI.createScrollView({
	 layout:"vertical"
});
win.add(scrollView);

var heading = Titanium.UI.createLabel({ 
    top:"20dp",
    text: 'System Info - Android Module',
    color: 'blue',
    width: Ti.UI.SIZE,
    height: Ti.UI.SIZE,
    font : {
		fontFamily:"Helvetica Nue",
		fontWeight : 'bold',
		fontSize:"22dp"
	}
});
scrollView.add(heading);

var infoStr = systeminfo.getInfo();
var infoObj = JSON.parse(infoStr);
Ti.API.info("infoObj obj => " + infoObj);

for (index in infoObj) {
	var keyLabel = Titanium.UI.createLabel({ 
	    top:"15dp",
	    text: index+":- ",
	    color: '#000',
	    width: Ti.UI.SIZE,
	    height: Ti.UI.SIZE,
	    font : {
			fontFamily:"Helvetica Nue",
			fontWeight : 'bold',
			fontSize:"15dp"
		}
	});
	scrollView.add(keyLabel);
	
	var valueLabel = Titanium.UI.createLabel({ 
	    top:"2dp",
	    text: infoObj[index],
	    color: '#000',
	    width: Ti.UI.SIZE,
	    height: Ti.UI.SIZE,
	    font : {
			fontFamily:"Helvetica Nue",
			fontSize:"15dp"
		}
	});
	scrollView.add(valueLabel);
}


win.open();
