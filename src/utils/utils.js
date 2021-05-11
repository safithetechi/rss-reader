
  const RSS_FEED_URL = 'https://www.reddit.com/r/cybersecurity.rss';
  
  
  
  function decodeHtml(HtmlStr) {
    var doc = new DOMParser().parseFromString(HtmlStr, "text/html");
    return doc.documentElement.textContent;
  }

  function getHtmlStr(Node){
    return Node.documentElement.textContent;
  }

  function getDomElementsFromEscapedHtmlStr(HtmlStr){
    
    let str = decodeHtml(HtmlStr)
    let dom =  new DOMParser().parseFromString(str, "text/html");
   
    return dom
  }


  export {
    RSS_FEED_URL,
    decodeHtml,
    getHtmlStr,
    getDomElementsFromEscapedHtmlStr
  }