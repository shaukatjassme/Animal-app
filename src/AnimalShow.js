import "./AnimalShow.css";
import { useState } from "react"
import bird  from "./svg/bird.svg"
import cat  from "./svg/cat.svg"
import cow  from "./svg/cow.svg"
import dog  from "./svg/dog.svg"
import gator  from "./svg/gator.svg"
import heart from "./svg/heart.svg"
import horse from "./svg/horse.svg"


const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}


function AnimalShow({ type }) {

    
  const [clicks, setClicks] = useState(0);

  function handleClick() {
  
    setClicks(clicks + 1);
  
  }
  

      return (
        <div className="animal-show" onClick={handleClick}  >
        <img src={svgMap[type]} className="animal" alt=""  />
        <img src={heart} className="heart" alt="" style={{ width: `${10 + 10 * clicks}px`, marginLeft: '10px' }} />
      </div>
      )
}

export default AnimalShow