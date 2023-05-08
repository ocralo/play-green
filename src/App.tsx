import RoutesApp from '@routes/index'
import AuthProvider from '@context/AuthContext'
import SportProvider from './context/SportContext'

function App(): JSX.Element {
  return (
    <>
      <AuthProvider>
        <SportProvider>
          <RoutesApp />
        </SportProvider>
      </AuthProvider>
    </>
  )
}

export default App
