export default function Home() {
  return (
    <>
    <div style={{display: "flex", backgroundColor: "yellow", width: "100%", padding: "10px"}}>
      <img src="./images/logo.jpg" style={{height: "100px", aspectRatio: "auto"}}/>
      <div style={{width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{display: "inline"}}>Corte<a href="#" style={{margin: "15px"}}>(Cambiar servicio)</a></h1>
      </div>
    </div>
    <div style={{display: "flex", margin: "0 auto", width: "90%"}}>
      <img src="./images/logo.jpg" style={{width: "40%", aspectRatio: "auto"}}/>
      <div style={{width: "30%", height: "500px", display: "flex", flexDirection :"column", justifyContent:"space-evenly"}}>
        <label><input type="radio" name="horarios" value="0" />10:00</label>
        <label><input type="radio" name="horarios" value="1" />10:15</label>
        <label><input type="radio" name="horarios" value="2" />10:30</label>
        <label><input type="radio" name="horarios" value="4" />11:00</label>
        <label><input type="radio" name="horarios" value="5" />11:15</label>
        <label><input type="radio" name="horarios" value="9" />12:15</label>
        <label><input type="radio" name="horarios" value="10" />12:30</label>
        <label><input type="radio" name="horarios" value="11" />12:45</label>
      </div>
      <div style={{width: "30%", height: "500px", display: "flex", flexDirection :"column", justifyContent:"space-evenly"}}>
        <label><input type="radio" name="barberos" value="0" />Leandro Zapata</label>
        <label><input type="radio" name="barberos" value="1" />Federico Rodriguez</label>
        <label><input type="radio" name="barberos" value="2" />Damian Zapata</label>
        <label><input type="radio" name="barberos" value="4" />Nicolás Diaz</label>
      </div>
    </div>
    <div style={{display: "flex", margin: "0 auto", width: "90%"}}>
        <input type="text" placeholder="Observaciones..." style={{width:"100%", height:"150px", margin: "20px"}}/>
    </div>
    <div style={{display: "flex", margin: "0 auto", width: "90%", justifyContent: "space-between"}}>
      <h3><a href="#" style={{margin: "15px"}}>Volver</a></h3>
      <h3>Lunes 31/07/2023 - 10:30: Perfilado (Barbero: Federico Rodriguez)</h3>
      <button style={{width: "100px"}}>Confirmar</button>
    </div>
    </>
  )
}

//     <img src="./images/logo.jpg" style={{display: "inline",height: "100px", aspectRatio: "auto", margin: "10px"}}/>

