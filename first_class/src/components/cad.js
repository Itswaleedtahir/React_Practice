import './cad.css';

function card(props){
    const {title , description,img} = props;
    return <div
    className="card" 
    // style={{height: "300px",
    // width : "250px",
    // border : "1px solid lightgray",
    // display: "inline-block",
    // padding: "10px",
    // margin: "10px"}}
    >
        <h3> {title}</h3>
        <p>{description}</p>
        <img src={img} alt="Card" id="image_card" />
    </div>
}

export default card