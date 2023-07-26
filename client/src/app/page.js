import './landing.css'

export default function Landing() {
  return (
    <main className="landing">
      <section className="header">
        <img src="./images/logo.jpg" />
        <div className="header-info">
          <h1>Barbería Los Ángeles</h1>
          <h4>Ituzaingó 1534, Laferrere. Pcia. de Buenos Aires</h4>
          <h3>(011) 15 1234 5678</h3>
        </div>
      </section>
      <section className="content">
        <h2>Elije el servicio para solicitar turno</h2>
        <div>
          <button>Corte $154</button>
          <button>Corte $154</button>
          <button>Corte $154</button>
          <button>Corte $154</button>
        </div>
      </section>
    </main>
  )
}
