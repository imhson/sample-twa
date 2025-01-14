import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import { SendTransactionRequest, TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'
import { useTonAddress } from '@tonconnect/ui-react'
const transaction: SendTransactionRequest = {
  validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
  messages: [
    {
      address: 'UQDh31UGbJuGW8xwS3Glm2eZgkIY9URdTReLIwiRsufu_JL7', // message destination in user-friendly format
      amount: '100000000', // Toncoin in nanotons
    },
  ],
}
function App() {
  const [userDataUnsafe, setUserDataUnsafe] = useState<unknown | null>(null)
  const [tonConnectUI] = useTonConnectUI()
  const address = useTonAddress()
  useEffect(() => {
    if (WebApp.initDataUnsafe) {
      console.log(WebApp.initDataUnsafe)
      setUserDataUnsafe(WebApp.initDataUnsafe)
    }
  }, [])
  return (
    <main className='p-4 w-screen text-white bg-black min-h-screen space-y-2'>
      <h1>Sample TWA</h1>
      {userDataUnsafe ? <pre className=''>{JSON.stringify(userDataUnsafe, null, 2)}</pre> : <div>Hello world!</div>}
      <div className='break-all'>{address}</div>
      <div className='flex justify-end gap-2'>
        {address && (
          <div className='bg-white px-3 text-black rounded-full flex items-center justify-center'>
            <button onClick={() => tonConnectUI.sendTransaction(transaction)}>Send 0.1 TON</button>
          </div>
        )}
        <TonConnectButton />
      </div>
    </main>
  )
}

export default App
