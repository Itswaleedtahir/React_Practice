import Card from "./cad"

function CityCard({title , description , img , changename , resetHandler}){
    const defaulttitle = "Lahore";
    const defaultdescription = " City Of Food"
    const defaultimg = "https://cdn.pixabay.com/photo/2018/04/20/20/04/lahore-fort-3336909_640.png"
    return <Card>
        <img src={img ? img: "https://alsadatmarketing.com/wp-content/uploads/2022/11/PESHAWAR.png"} alt="Card" id="image_card"/>
        <h3>{title}</h3>
        <p>{    description}</p>
        <button onClick={changename}>CityChange</button>
        <button onClick={()=>{
            resetHandler({defaulttitle,defaultdescription , defaultimg})
        }}>Reset</button>
    </Card>
}

export default CityCard