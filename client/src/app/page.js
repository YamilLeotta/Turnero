export default function Landing() {
  return (
    <main>
      <div className="container">
        <div className="landing-header">
          <img src="./images/logo.jpg" style={{height: "145px", width: "154px"}}/>
          <div className="landing-description">
            <h2>Barbería Los Ángeles</h2>
            <h4>Ituzaingó 1534, Laferrere. Pcia. de Buenos Aires</h4>
            <h3>(011) 15 1234 5678</h3>
          </div>
        </div>
        <div className="landing-container">
          <p>Elije el servicio para solicitar turno</p>
          <div style={{width: "100%"}}>
            <button>Corte $154</button>
            <button>Corte $154</button>
            <button>Corte $154</button>
            <button>Corte $154</button>
          </div>
        </div>
        <div className="landing-footer">
          <p>Design by: Pirulo</p>
        </div>
      </div>
    </main>
  )
}
