import React, {useState} from 'react'
//Llamar todos los hooks necesarios para interactuar con el estado
import { useDispatch } from 'react-redux' //esto ejecuta las acciones
import { useNavigate } from 'react-router-dom' // esto redirige segun una ruta
import { login } from '../api/authApi' //se importa la acción del reducer para ejecución
import { setCredentials } from '../slices/authSlice' //se importa la acción del reducer para ejecución

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const {user, token} = await login({email,password}) //aqui paso los credenciales
            dispatch(setCredentials({user,token})) //si todo sale bien, aqui seteo los datos del usuario
            navigate('/dashboard') //redirecciona a la vista

        }catch(error){
            console.error("Error al iniciar sesión: ", error)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Iniciar sesión</button>
    </form>
  )
}

export default Login
