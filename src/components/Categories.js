import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube } from '@fortawesome/fontawesome-free-brands'
import {faHome , faSuitcase , faMusic , faBasketballBall, faChess, faFilm, faPencilAlt} from '@fortawesome/fontawesome-free-solid'
import '../style/App.css';
import '../style/Video.css';
import '../style/Responsive.css';
const Categories = ({selectedCategory , setSelectedCategory}) => {
    const categories = [
        {name: "New" , iconName: faHome},
        {name: "Coding" , iconName: faSuitcase},
        {name: "Music" , iconName: faMusic},
        {name: "Sport" , iconName: faBasketballBall},
        {name: "Gaming" , iconName: faChess},
        {name: "Movie" , iconName: faFilm},
        {name: "Education" , iconName: faPencilAlt}
    ]
  return (
    <div className='categories'>
        {categories.map((category)=>(
            <button onClick={() => setSelectedCategory(category.name)} key={category.name}>
                <FontAwesomeIcon icon={category.iconName} className='icon'/>
                <div className=" icon-name icon-margin">{category.name}</div>
            </button>
        ))}
    </div>
  )
}

export default Categories