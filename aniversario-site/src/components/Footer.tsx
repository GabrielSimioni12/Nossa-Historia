export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span>feito com carinho · {year}</span>
    </footer>
  )
}
