import './cad.css';

function card(props){
    const {title , description,img} = props;
    return <div
    className="card"
    >
        <h3> {title}</h3>
        <p>{description}</p>
        <img src={img} alt="Card" id="image_card" />
    </div>
}

export default card