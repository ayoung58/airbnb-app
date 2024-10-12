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
            <div className="absolute top-2 left-2 bg-white pl-2 pr-2 pt-2 pb-2 rounded-md font-bold">{badgeText}</div>
        }
        <img 
            src={`../images/${props.coverImg}`} 
            className="w-full rounded-md mb-2" 
        />
        <div className="flex items-center">
            <img src="../images/star.png" className="h-3 mr-[0.125rem]" />
            <span className="mr-1">{props.stats.rating}</span>
            <span className="text-gray-700 mr-1">({props.stats.reviewCount}) • </span>
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