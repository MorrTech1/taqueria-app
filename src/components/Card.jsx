function Card ({ titulo, cantidad}) {
    return (
        <div 
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                width: "200px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",

            }}
        >
            <h3>{titulo}</h3>
            <h2>{cantidad}</h2>
            </div>
    );  
}

export default Card;