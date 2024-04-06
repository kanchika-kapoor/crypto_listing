import React, {useEffect, useState} from 'react'
import { useGetCryptosMutation } from '../../services/cryptoApi'
import {Link} from 'react-router-dom'
import { CoinType } from '../../common/types'
import Items from '../../components/Items'

const Home = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState<string>("10")
  const [getCryptos, {data: cryptos}] = useGetCryptosMutation()
  const pages = ["5","10","15","20","25","30"]

  useEffect(()=>{
    const fetchCoinData = async () => {
      await getCryptos({page, perPage})
    }
    fetchCoinData()
  },[page, perPage])

  const handlePage = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setPerPage(e.target.value)
  }

  // console.log(data)
  return (
    <div className='max-w-screen-lg m-auto'>
      <div>
        <div className='flex flex-row justify-between items-center bg-gray-900 rounded-lg font-bold mx-4 my-8 py-3 px-4 shadow-sm'>
          <p>#</p>
          <p className=''>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>
        {cryptos?.map((coin:CoinType)=>{
          return (<Link to={`/coin/${coin.id}`} key={coin.id}>
            <Items coin={coin}/>
          </Link>)
        })}
        <div className='flex items-center justify-center'>
          <button
          onClick={()=>setPage(page=>page-1)}
          disabled={page === 1? true:false}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
          >Prev</button>
          <p className='text-lg font-bold'> {page}</p>
          <button
          onClick={()=>setPage(page=>page+1)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'
          >Next</button>
          <div className="dropdown inline-block relative ml-8">
            <span>Per Page:</span>
            <select value={perPage} onChange={handlePage}>
              {pages.map((page, index)=>{
                return (
                  <option key={index}>{page}</option>
                )
              })}
            </select>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
