import axios from 'axios'

export const apiWrapper = async (input, { headers, ...init }, option = null) => {
  const config = {
    baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
    url: `${input}`,
    ...init,
    ...option,
    headers: {
      ...headers,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
  }
  const response = await axios(config)

  return response
}
