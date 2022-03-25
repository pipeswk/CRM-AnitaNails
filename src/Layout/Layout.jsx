import { Outlet, NavLink, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>

      <div className='md:w-1/4 bg-pink-300 px-5 py-10 rounded-xl m-1 shadow-xl'>
        <h2 className='text-4xl font-black text-center'>CRM - Clientes</h2>
        <nav className='mt-10'>
          <Link
            to="/clientes"
            className='text-2xl font-semibold block mt-2 hover:text-pink-700'
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className='text-2xl font-semibold block mt-2 hover:text-pink-700'
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className='md:w-3/4'>
        <Outlet />
      </div>

    </div>

  )
}

export default Layout