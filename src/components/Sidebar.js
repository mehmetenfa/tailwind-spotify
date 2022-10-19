import logo from '../img/logo.svg'
import Menu from './Sidebar/Menu'

const Sidebar = () => {
  return (
    <aside className="w-60 py-6 flex flex-col">
      <a href="#" className='mb-5 px-6'>
        <img src={logo} alt="" className="h-10" />
      </a>

      <nav>
        <Menu />
      </nav>
    </aside>
  )
}

export default Sidebar
