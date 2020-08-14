import React from 'react'

export const Modals = ({ selectedImg, setSelectedImg }) => {
    
    const handleClick = (e) =>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
     
    }
    
    
    return (
        <div className="backdrop" onClick={handleClick}>

            <img src={selectedImg} alt="enlarge-pic"/>
            
        </div>
    )
}

export default Modals;