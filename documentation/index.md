# systeminfo Module

## Description

System info module used to get the system information like OS VERSION, API LEVEL, HARDWARE MANUFACTURER,
DEVICE, MODEL, SYTEM RAM, ABI and PROCESSOR information. Module will return a JSON string. Please see example app.js file

## Accessing the systeminfo Module

To access this module from JavaScript, you would do the following:
<pre>
	var systeminfo = require("titutorial.sysinfo");
</pre>
The systeminfo variable is a reference to the Module object.	

## Usage
<pre>
var systeminfo = require('titutorial.sysinfo');
var infoStr = systeminfo.getInfo();
var infoObj = JSON.parse(infoStr);
Ti.API.info("infoObj obj => " + infoObj);
</pre>
## Author

Karthi Ponnusamy
karthi.nkl@gmail.com

## License

Copyright (c) 2013 Karthi Ponnusamy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

