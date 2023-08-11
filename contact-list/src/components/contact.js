function Contact({contact}){

    console.log(contact)

    return (
        <div className="conatct-card" style={{border: "1px solid lightgray", display: "inline-block", padding: "10px", borderRadius: "10px"}}> 
        <img alt="contact" src={contact?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWUjJBF3-HVIQD4wMf392fE8Lz3HaOE__Tg&usqp=CAU"} />
        <h3>{contact?.firstname}{contact?.lastname}</h3>
        <p>{contact?.phoneNumber}</p>
        <p>{contact?.relation}</p>
        <p>{contact?.email}</p>
        </div>
    );
}

export default Contact