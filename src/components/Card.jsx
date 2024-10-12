function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
    <div className="w-44 text-xs flex-auto flex flex-col relative">
        {
            badgeText && 
            <div className="absolute top-2 left-2 bg-white pl-5 pr-5 pt-7 pb-7 rounded-sm font-bold">{badgeText}</div>
        }
        <img 
            src={`../images/${props.coverImg}`} 
            className="w-full rounded-md mb-2" 
        />
        <div className="flex items-center">
            <img src="../images/star.png" className="h-3" />
            <span>{props.stats.rating}</span>
            <span className="text-gray-700">({props.stats.reviewCount}) • </span>
            <span className="text-gray-700">{props.location}</span>
        </div>
        <p className="overflow-hidden text-ellipsis">{props.title}</p>
        <p className="mt-auto">
            <span className="bold">From ${props.price}</span> / person
        </p>
    </div>
    )
}

export default Card;