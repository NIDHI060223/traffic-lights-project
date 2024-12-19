import React, { useEffect, useState } from 'react'
import { Light_Colors, Light_Duration } from './Constants'

function TrafficLights() {

    const [activeLight, setActiveLight] = useState("red");
    const [nextLight, setNextLight] = useState("yellow");

    useEffect(()=>{
        const timer = setInterval(()=>{
            switch(activeLight){
                case "green" :
                    setTimeout(()=>{
                        setActiveLight("yellow");
                        setNextLight("red");
                    });
                    break;

                case "yellow" :
                    setTimeout(()=>{
                        setActiveLight(nextLight);
                    });
                    break;
                
                case "red" : 
                setTimeout(()=>{
                    setActiveLight("yellow");
                    setNextLight("green");
                });
                break;
            
                default: break;   
            }
        }, Light_Duration[activeLight]);

        return () => clearInterval(timer);
        
    }, [activeLight, nextLight]);

  return (
    <div className='traffic-light'>
      {Light_Colors.map((color)=>(
         <div 
         key={color}
         className={`light ${color} ${activeLight === color ? "active" : ""}`}
        />
    ))}
    </div>
  )
}

export default TrafficLights
