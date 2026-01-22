import logo from "../assets/logo.png"

export const Header = () => {
  return (
    <>
    <header>
      <div className="logo">
        <img src={logo} alt="Task Handler Logo" />
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium activeTheme"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
    </>
  )
}
