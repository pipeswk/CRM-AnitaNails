import Formulario from '../Components/Formulario'

const NuevoCliente = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-pink-900'>Nuevo Cliente</h1>
      <p className='font-semibold text-lg text mt-3'>Llena los siguientes campos para registrar un cliente <span className='text-pink-600 font-bold text-2xl'>Nuevo.</span></p>
      
      <Formulario />
    </>
  )
}

export default NuevoCliente