import React from "react"

export default function Card(props) {
    console.log(props);
    let badgeText
    if(props.openSpots === 0) {
        badgeText='SOLD OUT'
    } else if(props.location === 'Online'){
        badgeText = "ONLINE"
    }

    return (
        <div className="card" >
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className='card__image'/>
            <div className="card__stats">
                <img src="../images/star.png" className="card__star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}