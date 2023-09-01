function Figure(props) {
    return (
        <figure className="border border-2 border-dark rounded-3 bg-info p-2 my-2 d-flex align-items-center gap-1">
            <img className="img-thumbnail" src={props.imgSrc} alt={`Image of ${props.imgName}`} />
            <figcaption style={{textTransform: "capitalize"}} className="display-6">{props.imgName}</figcaption>
        </figure>
    );
}

export default Figure