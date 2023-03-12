import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '75cf023171msh243d5183377856ap1073aajsn3e1c8ccfd3e6');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '75cf023171msh243d5183377856ap1073aajsn3e1c8ccfd3e6',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.co',
//   },
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
