import React, {useEffect} from 'react'
import { useGetCryptosMutation } from '../../services/cryptoApi'

const Home = () => {
  const [getCryptos, {data}] = useGetCryptosMutation()

  useEffect(()=>{
    const fetchCoinData = async () => {
      await getCryptos(0)
    }
    fetchCoinData()
  },[])

  console.log(data)
  return (
    <div>
      <h2>Crypto coinlst</h2>
    </div>
  )
}

export default Home
