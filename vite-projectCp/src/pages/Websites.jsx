import React, { useEffect, useState } from 'react'
import webT from '../assets/webT1.png'
import './styles/Websites.css'
import WebsitesJSON from '../json/websites.json'

import WebsiteBtn from '../components/WebsiteBtn'

function Websites() {

  const [WebJSON, setWebJSON] = useState([{ name: "" }]);

    useEffect(() => {
      setWebJSON(WebsitesJSON)
    }, [])


    return (
    
        <div className='webTem'>
          

          {WebJSON.map((e, i) => (
            <WebsiteBtn key={i} data={e}/>
          ))}
        </div>
      
    )
  }
  
  export default Websites