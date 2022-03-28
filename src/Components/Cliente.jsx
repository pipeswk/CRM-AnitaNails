import { useNavigate } from 'react-router-dom'

const Cliente = ( { cliente } ) => {

    const { nombres, apellidos, email, telefono, nacimiento, id } = cliente;

    const clickEdiar = () => {
        console.log('click en editar')
    }

    const clickVer = () => {
        console.log('click en ver')
    }

  return (
    <tr className='cursor-pointer hover:bg-slate-200'>
        <td className='p-3' onClick={clickVer}>{`${nombres} ${apellidos}`}</td>
        <td className='p-3' onClick={clickVer}>
            <p><span className='text-gray-800 font-bold'>Email: </span>{email}</p>
            <p><span className='text-gray-800 font-bold'>Telefono: </span>{telefono}</p>
        </td>
        <td className='p-3' onClick={clickVer}>{nacimiento}</td>
        <td className='p-3'>
            <button type='button' className='bg-green-600 text-center p-0 text-white font-semibold mx-2 my-1 rounded-md block w-full' onClick={clickEdiar}>
                Editar
            </button>
            <button type='button' className='bg-red-600 text-center p-0 text-white font-semibold ml-2 my-1 rounded-md block w-full'>
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Cliente