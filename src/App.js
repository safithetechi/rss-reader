import './App.css';
import {useEffect,useState} from 'react';

import {RSS_FEED_URL} from './utils/utils'
import { Container, Row } from 'reactstrap';


import Entry from'./components/Entry/Entry'
import Header from './components/Header/Header'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


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


  return (
    <div className="App">
        <Container fluid>

              <Row>
                     <Header title={feed_title} category={feed_category}/>
              </Row>


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

    </div>
  );
}

export default App;
