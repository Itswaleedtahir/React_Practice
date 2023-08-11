function Card({children }) {
    
    return <div style={{border: "1px solid lightgray", display: "inline-block", padding: "10px", borderRadius: "10px"}}>
        {children}
    </div>
}

export default Card;