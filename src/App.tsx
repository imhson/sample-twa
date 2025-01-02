import { useEffect, useState } from 'react'
import { User } from './models/User'
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
  const [userData, setUserData] = useState<User | null>(null)
  const [tonConnectUI] = useTonConnectUI()
  const address = useTonAddress()
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user)
    }
  }, [])
  return (
    <main className='text-green-500 p-4 w-screen space-y-2'>
      {userData ? <pre className=''>{JSON.stringify(userData, null, 2)}</pre> : <div>Hello world!</div>}
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
