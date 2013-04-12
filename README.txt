jsParam allows developers to pass params via the src attribute on the Script tag (not the page's URL).

Example:
<script src="someJavascript.js?first=Alpha&second=Beta&run=true&count=42&msg=This%20is%20a%20message" id="someJS"></script>

Usage:
var myParams = jsParam('someJS'); //Returns an array of params.

Script includes fixes to convert params to boolean or numbers, if needed. Also decodes URL encoding so you can pass spaces and special characters in your params.

If you have any suggestions or corrections, let me know: me AT brianrollins.com

Copyright (c) 2013 Brian Rollins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.