import RoutesApp from '@routes/index'
import AuthProvider from '@context/AuthContext'

function App(): JSX.Element {
  return (
    <>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </>
  )
}

export default App
