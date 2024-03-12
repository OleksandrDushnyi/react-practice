import { useState } from "react"
import Button from "./Button/Button"
import { differences } from "../data"

export default function DifferencesSection() {

    const [content, setContent] = useState(null)

    function handleClick(type) {
        setContent(type)
      }
      let tabContent = null
if (content) {
  tabContent =  <p>{differences[content]}</p>
} else{
  tabContent = <p>Натисни на кнопку</p>
}

    return(
        <section>
        <h3>
        Які технології потрібно вивчити
        </h3>
         <Button 
         isActive={content === 'css'} 
         onClick={() => handleClick('css')}>
          Мови верстання 
         </Button>
         <Button 
         isActive={content === 'js'} 
         onClick={() => handleClick('js')}>JavaScript</Button>
         <Button 
         isActive={content === 'git'} 
         onClick={() => handleClick('git')}>Git</Button>
         <Button 
         isActive={content === 'react'} 
         onClick={() => handleClick('react')}>React</Button>
         <Button 
         isActive={content === 'mysql'} 
         onClick={() => handleClick('mysql')}>MySQL</Button>
         <Button 
         isActive={content === 'nodejs'} 
         onClick={() => handleClick('nodejs')}>Node.js</Button>
      
     {/* {content ? (
      // <p>{differences[content]}</p>
      // ) : (
      //   <p>Натисни на кнопку</p>
      // )}  */}


      {tabContent}
      </section>
    )
}