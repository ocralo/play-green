import {useState} from 'react'
import {useAuth} from '@context/AuthContext/hooks'
import {useNavigate} from 'react-router-dom'

export default function SingUp(): JSX.Element {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const {signUp, error} = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signUp(user.email, user.password)
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
      {error && <p style={{color: 'white'}}>{error}</p>}
    </form>
  )
}
