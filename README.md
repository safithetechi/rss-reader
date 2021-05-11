# Cyber Security Reddit Rss Reader

  This Project is made to display the rss feed from the Cyber Security Reddit, It's built using react and reactstrap 
  
  Preview available at https://safithetechi.github.io/rss-reader/


## Application Architecture

 ```javascript 
  const [feed,setFeed] =useState([])
  const [feed_title, setFeedTitle] = useState('')
  const [feed_category,setCategory] = useState('')
  
  useEffect(() => {
    fetch(RSS_FEED_URL)
    
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data =>{
    
          console.log(data)

          const category = data.querySelector("category");

          console.log(category.getAttribute('label'))

          setCategory(category.getAttribute('label'))

          const title = data.querySelector("title").innerHTML;

          setFeedTitle(title)

          const entries = data.querySelectorAll("entry");

          setFeed([...entries])


  } )
   
  }, [])

```


In the above code segment RSS Feed is Parsed using the DomParser relavent data is extracted. The Title of the page and the category or sub-reddit is passed to the component Header and the entries are then used to populate the page by assigning them to the Feed state. 

 ```javascript 

              <Row>
                     <Header title={feed_title} category={feed_category}/>
              </Row>
```
This is the code for the Header



 ```javascript 

              <Row className="Feed">              
                  {feed.map((entry,index)=>{
                    return (
                    <Row className="EntryRow">
                      <Entry entry={entry} key={index}/>
                    </Row>
                    )
                  })}

              </Row>

        </Container>
```

This is how the page is being populated using the feed, each entry is passed to it's own Entry component 

## Entry

Each Entry Component Has two Sub Compoents 

  <ul>
    <li>The Cards Which display the title and the Authors user name</li>
    <li>The Entry Detail which displays the HTML content</li>
  </ul>
  




