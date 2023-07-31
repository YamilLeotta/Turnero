import Link from 'next/link';
import './landing.css';

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
          <Link href="/booking/1"><button>Corte $154</button></Link>
          <Link href="/booking/2"><button>Corte $154</button></Link>
          <Link href="/booking/3"><button>Corte $154</button></Link>
          <Link href="/booking/4"><button>Corte $154</button></Link>
          <Link href="/booking/5"><button>Corte $154</button></Link>
          <Link href="/booking/6"><button>Corte $154</button></Link>
          <Link href="/booking/7"><button>Corte $154</button></Link>
          <Link href="/booking/8"><button>Corte $154</button></Link>
          <Link href="/booking/9"><button>Corte $154</button></Link>
          <Link href="/booking/10"><button>Corte $154</button></Link>
        </div>
      </section>
    </main>
  )
}
