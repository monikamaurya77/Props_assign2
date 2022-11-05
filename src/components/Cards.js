
const Cards = (props) => {
    return(
        <>
        <div className="cards">
<img className="logo" src={props.img}></img>
<h2 className="heading">{props.name}</h2>
<h4>{props.year}</h4>
<button className="button">{props.time}</button>
<h5>{props.type}</h5>
<p>{props.detail}</p>
<img className="bgimg" src={props.image}></img>

        </div>
        </>
    );
}

export default Cards;