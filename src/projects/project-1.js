import React,{ useState} from "react"
import data from "../data/birthday-data"
import "../index.css"

function BirthdayComponent(){
    const [people,setPeople] = useState(data)
    const [length,setLength] = useState(data.length)
    function  removeEl(id){
        setPeople(people.filter((person)=>{
            if(person.id !== id){
                return true
            }
            else{
                return false
            }
        }))
        setLength(length - 1)
    }

    function clearAll(){
        setPeople([])
        setLength(0)
    }

   return(
    <>
    <nav className="nav-container">
        <h2>{length} Birthdays Today</h2>
    </nav>
     {people.map((person)=>{
        const {id,image,name,age} = person
          return (
            <section key={id}  className="person">
                <div className="image-container">
                    <img src={image} alt="" className="image"/>
                </div>
                <div className="person-details-container">
                    <h3>{name}</h3>
                    <h4>{age} years</h4>
                    <button className="remove" onClick={()=> removeEl(id)}>remove</button>
                </div>
            </section>
          )
       })}
       <button className="clear" onClick={clearAll}>Clear All</button>
   </>
    )
}

export default BirthdayComponent