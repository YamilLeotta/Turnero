import './globals.css'

export const metadata = {
  title: 'Barbería Los Ángeles - Turnos Web',
  description: 'App de turnos diseñada por: Germán y Yamil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <footer className="footer">
          Design by: Pirulo
        </footer>
      </body>
    </html>
  )
}