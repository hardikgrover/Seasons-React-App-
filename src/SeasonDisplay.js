import React from 'react'
import './SeasonDisplay.css'

function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth())
    const{text,iconName} = seasonConfig[season]
    
    console.log(season)
    return (
        <div className ={`season-display ${season}`} >
            <i className = {`icon-left massive ${iconName} icon`}/>
            <h1 className = {`season`}>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon` }/>
        </div>
    )
}

const seasonConfig = {
    summer:{
        text:'lets hit the beach',
        iconName:'sun'
    },
    winter:{
        text:'Burr its chilly',
        iconName:'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}




export default SeasonDisplay
