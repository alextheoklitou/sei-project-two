import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>Home</Link>
          <Link to='/tarot/reading' className='navbar-item'>Tarot Reading</Link>
          <Link to='/tarot' className='navbar-item'>Index</Link>
          <Link to='/tarot/today' className='navbar-item'>Card of the Day</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav