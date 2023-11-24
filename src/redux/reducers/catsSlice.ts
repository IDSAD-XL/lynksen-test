import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as process from 'process'
import { Image } from '@thatapicompany/thecatapi/dist/types'

// Define a service using a base URL and expected endpoints
export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    headers: {
      'x-api-key': `${process.env.CATS_API_KEY}`,
    },
  }),
  endpoints: (builder) => ({
    getRandomCats: builder.query<Image[], number>({
      query: (num) => {
        return {
          url: `images/search`,
          params: {
            limit: num,
            has_breeds: 1,
          },
        }
      },
    }),
    getCatById: builder.query<Image, string | null>({
      query: (id) => {
        return {
          url: `images/${id}`,
        }
      },
    }),
  }),
})

export const { useGetRandomCatsQuery, useGetCatByIdQuery } = catsApi
