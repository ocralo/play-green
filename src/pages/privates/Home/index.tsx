import useSport from '@context/SportContext/hooks'

export default function Home() {
  const {getSports, sports} = useSport()
  const handleRequest = async () => {
    await getSports()
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleRequest}>Get All sports</button>
      <code>{JSON.stringify(sports)}</code>
    </div>
  )
}
