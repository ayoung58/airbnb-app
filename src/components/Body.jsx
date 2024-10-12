function Body(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="flex">
            <div className="flex flex-col justify-between w-1/3 flex-wrap pl-20 pt-10">
                <h1 className='text-h1 font-poppins font-bold text-black text-shadow-sm shadow-black'>Online Experiences</h1>
                <h3 className="text-subtitle font-poppins text-black">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </h3>
            </div>
            <div>
                {
                    badgeText && 
                    <div className="card--badge">{badgeText}</div>
                }
                <img 
                    src={`../images/${props.coverImg}`} 
                    className="card--image" 
                />
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star" />
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--price">
                    <span className="bold">From ${props.price}</span> / person
                </p>
            </div>
        </div>
    )
}

export default Body;