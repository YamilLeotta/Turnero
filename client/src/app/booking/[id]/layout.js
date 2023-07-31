import './booking.css'

export default function BookingLayout({ children, params }) {
  return (
    <main className="booking">
      <section className="header">
        <img src="../images/logo.jpg" />
        <div className="header-info">
          <h1>{params.id}</h1>
          <a href="/">(Cambiar servicio)</a>
        </div>
      </section>
      {children}
    </main>
  )
}