import { Link, useLocation } from 'react-router-dom'
import React from 'react'

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname } = useLocation()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'><span>🕯</span></Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to='/tarot/reading' className='navbar-item'>Tarot Reading</Link>
            <Link to='/tarot' className='navbar-item'>All Cards</Link>
            <Link to='/tarot/today' className='navbar-item'>Card of the Day</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav