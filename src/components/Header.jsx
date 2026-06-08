function Header() {
  return (
    <div
      style={{
        
        top: 0,
        background: "inherit",
        zIndex: 10,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "30px", 
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "1px solid #ddd"
      }}
    >
      <button
        style={{
          fontSize: "24px",
          border: "none",
          background: "none",
          cursor: "pointer"
        }}
      >
        ☰
      </button>
     
      
        <img src="/public/logo.png" alt="Taquería Los Güeros" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
        <h1 style={{ margin: 0, fontSize: "24px" }}>Taquería Los Güeros</h1>
      

        <button style={{
          fontSize: "24px",
          
          background: "none",
          cursor: "pointer"
        }}

onClick={()=>{

document.body.classList.toggle(
"dark"
)

}}

>

🌙

</button>
    </div>
  );
}

export default Header;