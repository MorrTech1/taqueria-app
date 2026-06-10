function Header() {

  const logo = "/public/logo.png";
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
     
      
        <img
src={logo}
alt="Logo"
style={{
width:"48px",
height:"48px",
borderRadius:"50%"
}}
/>

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