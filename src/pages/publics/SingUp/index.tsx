import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {useAuth} from '@context/AuthContext/hooks'

import FormInput from '@components/FormInput'
import ErrorText from '@components/ErrorText'
import Button from '@components/Button'
import Form from '@components/Form'

import {SingUpLayout} from './layout'

export default function SingUp(): JSX.Element {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const {error, signUp} = useAuth()

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
    await signUp(user.email, user.password)
    navigate('/home')
  }

  const handleLogin = (): void => {
    navigate('/login')
  }

  return (
    <SingUpLayout>
      <h1 className='singup-title'>Create User</h1>
      <h6 className='singup-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h6>
      <Form className='singup-form' onSubmit={handleSubmit}>
        <FormInput
          className='singup-input-user'
          label='User'
          name='email'
          id='email'
          type='email'
          value={user.email}
          onChange={handleChange}
        />
        <FormInput
          className='singup-input-password'
          label='Password'
          name='password'
          id='password'
          type='password'
          value={user.password}
          onChange={handleChange}
        />
        {error && <ErrorText error={error} />}
        <Button className='singup-submit-button' type='submit'>
          SingUp
        </Button>

        <Button
          type='button'
          className='singup-login-button'
          onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </SingUpLayout>
  )
}
