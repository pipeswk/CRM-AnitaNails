import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Error from './Error'

const Formulario = () => {

    const navigate = useNavigate();

    const nuevoClienteSchema = Yup.object().shape({
        nombres: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo')
            .required('El nombre es obligatorio'),
        apellidos: Yup.string()
            .min(3, 'El apellido es muy corto')
            .max(20, 'El apellido es muy largo')
            .required('El apellido es obligatorio'),
        email: Yup.string()
            .email('Email invalido')
            .required('El email es obligatorio'),
        telefono: Yup.number()
            .integer('Numero invalido')
            .positive('Numero invalido')
            .min(3000000000, 'Numero invalido')
            .typeError('Solo se admiten caracteres numericos'),
        nacimiento: Yup.date()
            .required('La fecha de cumpleaños es obligatoria')
    })

    const handleSubmit = async (values) => {
        try {
            const url = 'http://localhost:4000/clientes';
            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            console.log(respuesta);
            const resultado = await respuesta.json();
            console.log(resultado);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-3/4 mx-auto'>
        
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center mb-6'>Agregar cliente</h1>

        <Formik
            initialValues={{
                nombres: '',
                apellidos: '',
                email: '',
                telefono: '',
                nacimiento: ''
            }}

            onSubmit={ async (values, {resetForm}) => {
                await handleSubmit(values);
                resetForm();
                navigate('/clientes');
            } }

            validationSchema={nuevoClienteSchema}
        >

            {( { errors, touched } ) => {
                
                return (
                    <Form>
    
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor='nombres'
                            >
                                Nombres:
                            </label>
                            <Field
                                name='nombres'
                                id='nombres'
                                type='text'
                                className='m-2 block w-full border-2 rounded-md bg-gray-50 p-2'
                                placeholder='  Ej: Ana Mayerly'
                            />
                            {errors.nombres && touched.nombres ? (
                                <Error error={errors.nombres} />
                            ) : null}
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor='apellidos'
                            >
                                Apellidos:
                            </label>
                            <Field
                                name='apellidos'
                                id='apellidos'
                                type='text'
                                className='m-2 block w-full border-2 rounded-md bg-gray-50 p-2'
                                placeholder='  Ej: Gomez Moreno'
                            />
                            {errors.apellidos && touched.apellidos ? (
                                <Error error={errors.apellidos} />
                            ) : null}
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor='email'
                            >
                                Email:
                            </label>
                            <Field
                                name='email'
                                id='email'
                                type='email'
                                className='m-2 block w-full border-2 rounded-md bg-gray-50 p-2'
                                placeholder='  Ej: maye1018@gmail.com'
                            />
                            {errors.email && touched.email ? (
                                <Error error={errors.email} />
                            ) : null}
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor='telefono'
                            >
                                Telefono:
                            </label>
                            <Field
                                name='telefono'
                                id='telefono'
                                type='tel'
                                className='m-2 block w-full border-2 rounded-md bg-gray-50 p-2'
                                placeholder='  Ej: 3153162748'
                                maxLength="10"
                            />
                            {errors.telefono && touched.telefono ? (
                                <Error error={errors.telefono} />
                            ) : null}
                        </div>
                        <div className='mb-4'>
                            <label
                                className='text-gray-800'
                                htmlFor='nacimiento'
                            >
                                Fecha de Nacimiento:
                            </label>
                            <Field
                                name='nacimiento'
                                id='nacimiento'
                                type='date'
                                className='m-2 block w-full border-2 rounded-md bg-gray-50 p-2'
                            />
                            {errors.nacimiento && touched.nacimiento ? (
                                <Error error={errors.nacimiento} />
                            ) : null}
                        </div>
        
                        <input
                            type="submit"
                            value={'Agregar cliente'}
                            className='w-full bg-pink-400 p-2 m-2 rounded-lg cursor-pointer font-black text-white hover:bg-pink-500 uppercase'
                        />
    
                    </Form>
                )
            }}


        </Formik>

    </div>
  )
}

export default Formulario