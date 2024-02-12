import Button from "./components/Button/Button"
import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import { useState } from "react"
import { ways, differences } from "./data"


function App() {
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
  
  return (
    <div>
      <Header />
       <main>
        <section>
          <h3>Хто такий FullStack розробник</h3>

        <ul>
           
        <WayToTeach {...ways[0]}/>
        <WayToTeach {...ways[1]}/>
        <WayToTeach {...ways[2]}/>
        </ul>
        </section>
        <section>
          <h3>
          Які технології потрібно вивчити
          </h3>
           <Button buttonClicked={() => handleClick('css')}>Мови верстання </Button>
           <Button buttonClicked={() => handleClick('js')}>JavaScript</Button>
           <Button buttonClicked={() => handleClick('git')}>Git</Button>
           <Button buttonClicked={() => handleClick('react')}>React</Button>
           <Button buttonClicked={() => handleClick('mysql')}>MySQL</Button>
           <Button buttonClicked={() => handleClick('nodejs')}>Node.js</Button>
        
       {/* {content ? (
        // <p>{differences[content]}</p>
        // ) : (
        //   <p>Натисни на кнопку</p>
        // )}  */}
        

        {tabContent}
        </section>
       </main>
    </div>
  )
}

export default App
