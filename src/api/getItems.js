import { apiWrapper } from './apiWrapper'

const getItems = async (id) => {
    const resp = await apiWrapper('/lesson/' + id + '/items', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
    })

    if (resp.status == 200) {
        const data = await resp.data
        return data
    }
    throw new Error(`Unable to get current user\nStatusCode\t ${resp.status}`)
}

export default getItems
