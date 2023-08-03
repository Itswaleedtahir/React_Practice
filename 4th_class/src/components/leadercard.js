import Card from './cad'

function LeaderCard({name , description, points ,img  }){
    console.log(points)
    return (
        <Card className= {"mt-3 w-90"}>
        <div className='flex justify-content-between'>
            <div className='flex'>
            <img className='card-image' src={img ? img:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'} alt='avatar'/>
            <div style={{marginLeft:"20px" , textAlign:"left"}}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            </div>
            <div>
            <h2 style={{marginRight:"20px" , color:"orange"}}>{points}</h2>
            </div>
        </div>
  </Card>
    )   

}

export default LeaderCard