import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className='md:flex md:min-h-screen'>

      <div className='md:w-1/4 bg-pink-300 px-5 py-10 md:rounded-xl md:m-1 shadow-xl'>
        <h2 className='text-4xl font-black text-center'>CRM - Anita Nails</h2>
        <nav className='mt-10'>
          <Link
            to="/clientes"
            className={`${urlActual === '/clientes' ? (
              'text-2xl font-semibold block mt-2 text-pink-700'
            ) : (
              'text-2xl font-semibold block mt-2 hover:text-pink-700'
            )}`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${urlActual === '/clientes/nuevo' ? (
              'text-2xl font-semibold block mt-2 text-pink-700'
            ) : (
              'text-2xl font-semibold block mt-2 hover:text-pink-700'
            )}`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className='md:w-3/4 p-10 md:h-screen overflow-y-scroll'>
        <Outlet />
      </div>

    </div>

  )
}

export default Layout