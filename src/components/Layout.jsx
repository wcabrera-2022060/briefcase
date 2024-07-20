import { Header } from './Header.jsx'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}