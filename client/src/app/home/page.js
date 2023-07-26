import './home.css'

function mostrar(pepe){
  console.log(pepe)
}

export default function Home() {
  return (
    <main className="home">
      <section className="header">
        <img src="./images/logo.jpg" />
        <div className="header-info">
          <h1>Corte y perfilado</h1>
          <a href="#">(Cambiar servicio)</a>
        </div>
      </section>
      <section className="content">
        <div style={{backgroundColor: "violet", width: "35%", aspectRatio: "1 / 1"}}></div>
        <div className="turn-list">
        <label><input type="radio" name="horarios" value="0" /><span>10:00</span></label>
          <label><input type="radio" name="horarios" value="1" /><span>10:15</span></label>
          <label><input type="radio" name="horarios" value="2" /><span>10:30</span></label>
          <label><input type="radio" name="horarios" value="3" /><span>10:45</span></label>
          <label><input type="radio" name="horarios" value="4" /><span>11:00</span></label>
          <label><input type="radio" name="horarios" value="5" /><span>11:15</span></label>
          <label><input type="radio" name="horarios" value="6" /><span>11:30</span></label>
          <label><input type="radio" name="horarios" value="7" /><span>11:45</span></label>
          <label><input type="radio" name="horarios" value="8" /><span>12:00</span></label>
          <label><input type="radio" name="horarios" value="9" /><span>12:15</span></label>
          <label><input type="radio" name="horarios" value="10" /><span>12:30</span></label>
          <label><input type="radio" name="horarios" value="11" /><span>12:45</span></label>
          <label><input type="radio" name="horarios" value="12" /><span>13:00</span></label>
          <label><input type="radio" name="horarios" value="13" /><span>13:15</span></label>
          <label><input type="radio" name="horarios" value="14" /><span>13:30</span></label>
          <label><input type="radio" name="horarios" value="15" /><span>13:45</span></label>
          <label><input type="radio" name="horarios" value="16" /><span>14:00</span></label>
          <label><input type="radio" name="horarios" value="17" /><span>14:15</span></label>
          <label><input type="radio" name="horarios" value="18" /><span>14:30</span></label>
          <label><input type="radio" name="horarios" value="19" /><span>14:45</span></label>
          <label><input type="radio" name="horarios" value="20" /><span>15:00</span></label>
          <label><input type="radio" name="horarios" value="21" /><span>15:15</span></label>
          <label><input type="radio" name="horarios" value="22" /><span>15:30</span></label>
          <label><input type="radio" name="horarios" value="23" /><span>15:45</span></label>
        </div>
      </section>
      <div style={{display: "flex", margin: "0 auto", width: "90%"}}>
          <input type="text" placeholder="Observaciones..." style={{width:"100%", height:"150px", margin: "20px"}}/>
      </div>
      <div style={{display: "flex", margin: "0 auto", width: "90%", justifyContent: "space-between"}}>
        <h3><a href="#" style={{margin: "15px"}}>Volver</a></h3>
        <h3>Lunes 31/07/2023 - 10:30: Perfilado (Barbero: Federico Rodriguez)</h3>
        <button style={{width: "100px"}}>Confirmar</button>
      </div>
    </main>
  )
}

/*             <div style={{width: "30%", display: "flex", flexDirection: "column", justifyContent:"space-evenly"}}>
<label><input type="radio" name="barberos" value="0" />Leandro Zapata</label>
<label><input type="radio" name="barberos" value="1" />Federico Rodriguez</label>
<label><input type="radio" name="barberos" value="2" />Damian Zapata</label>
<label><input type="radio" name="barberos" value="4" />Nicolás Diaz</label>
</div>*/

