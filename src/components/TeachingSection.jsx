import { ways } from "../data"
import WayToTeach from "./WayToTeach"

export default function TeachSection() {
    return(
      <section>
          <h3>Хто такий FullStack розробник</h3>

        <ul>
           {ways.map((way) => (
            <WayToTeach key={way.description}{...way}/>
           ))}
        {/* <WayToTeach {...ways[0]}/>
        <WayToTeach {...ways[1]}/>
        <WayToTeach {...ways[2]}/> */}
        </ul>
        </section>
    
    )
  }