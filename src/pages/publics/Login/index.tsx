import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {useAuth} from '@context/AuthContext/hooks'

import FormInput from '@components/FormInput'
import ErrorText from '@components/ErrorText'
import Button from '@components/Button'
import Form from '@components/Form'

import {LoginLayout} from './layout'

export default function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const {login, error, isLoading} = useAuth()

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

  const handleSingUp = (): void => {
    navigate('/sing-up')
  }

  return (
    <LoginLayout>
      <h1 className='login-title'>Welcome</h1>
      <h6 className='login-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h6>
      <Form className='login-form' onSubmit={handleSubmit}>
        <FormInput
          className='login-input-user'
          required
          label='User'
          name='email'
          id='email'
          type='email'
          value={user.email}
          onChange={handleChange}
        />
        <FormInput
          className='login-input-password'
          required
          label='Password'
          name='password'
          id='password'
          type='password'
          value={user.password}
          onChange={handleChange}
        />
        {error && <ErrorText error={error} />}
        <p className='login-forgot'>Forgot your password?</p>
        <Button
          disabled={!(user && user.email && user.password && !isLoading)}
          className='login-submit-button'
          type='submit'>
          Login
        </Button>
        <Button
          type='button'
          className='login-signup-button'
          onClick={handleSingUp}>
          SingUp
        </Button>
      </Form>
    </LoginLayout>
  )
}
