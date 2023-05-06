import {useState} from 'react'
import {useAuth} from '@context/AuthContext/hooks'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const {login, error, logout} = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    await login(user.email, user.password)
    navigate('/home')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' onChange={handleChange} />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={handleChange}
      />
      <button type='submit'>Login</button>
      <button type='button' onClick={() => logout()}>
        Logout
      </button>
      {error && <p style={{color: 'white'}}>{error}</p>}
    </form>
  )
}
