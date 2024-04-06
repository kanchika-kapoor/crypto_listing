import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { CoinType } from '../common/types';

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coingecko.com/api/'
    }),
    endpoints: (builder)=>({
        getCryptos: builder.mutation({
            query:({page,perPage})=>{
                return {
                    url: `v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&locale=en`,
                    method:'get'
                }
            }
        }),
        getAllCryptos: builder.query<CoinType[], void>({
            query:()=>
                 `v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en`
        })
    })
})

export const {useGetCryptosMutation, useGetAllCryptosQuery} = cryptoApi