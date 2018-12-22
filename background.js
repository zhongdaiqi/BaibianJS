chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
	//here to set your magic hook js
	//在这里设置你修改过的js，比如把自己的代码放到jq的最下面
    return {redirectUrl:'http://localhost:6366/hook.min.js'};
  },
  {
	// here to set which js be replaced
	//这里是设置哪个js要被替换掉，从jq下手，最好了
    urls: [
      "http://www.jishudao.com/js/jquery-1.7.1*"
    ],
    types: ["script"]
  },
  ["blocking"]);
//if you need to change more,add a new Listener
  
 //set  Access-Control-Allow-Origin
 chrome.webRequest.onHeadersReceived.addListener(function(details) {
		details.responseHeaders.push({name:'Access-Control-Allow-Origin',value:"*"});
		console.log(details.responseHeaders)
		  return {responseHeaders:details.responseHeaders};
 },{urls: ["<all_urls>"]}, ["responseHeaders","blocking"]);


