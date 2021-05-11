import React,{useEffect,useState} from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

import './Entry.css'

import {getDomElementsFromEscapedHtmlStr} from '../../utils/utils'


import EntryDetails from '../EntryDetails/EntryDetails'

function Entry(props){

    const [author_name,setAuthorName] = useState();
    const [author_uri,setAuthorUri] = useState();
    const [post_title,setTitle] = useState();
    const [post_content,setContent] = useState(null)

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    useEffect(() => {
        

        const author = props.entry.querySelector('author');

        const name = author.querySelector('name')
        const uri = author.querySelector('uri')

        setAuthorName(name.innerHTML)
        setAuthorUri(uri.innerHTML)

        const title =  props.entry.querySelector('title');

        setTitle(title.innerHTML)

        const content = props.entry.querySelector('content');

        const dom = getDomElementsFromEscapedHtmlStr(content.innerHTML)
            
        const body = dom.querySelector('body')
    
        setContent(body)


    },[props.entry])

    return (
        <div className="EntryCard" >
          <EntryDetails modal={modal} toggle={toggle} content={post_content}/>
          <Card tag="h1" onClick={()=>toggle()} style={{ cursor: "pointer" }}>
            <CardBody>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Posted by <a href={author_uri}>{author_name}</a></CardSubtitle>
              <CardTitle tag="h3" style={{textAlign:"center"}}>{post_title}</CardTitle>
            </CardBody>
          </Card>

        </div>
      );


} 



export default Entry;