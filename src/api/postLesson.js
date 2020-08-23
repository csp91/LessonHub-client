import { apiWrapper } from './apiWrapper'

const postLesson = async (lesson) => {
    const resp = await apiWrapper('/lesson', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        data: lesson,
    })

    if (resp.status == 200) {
        const data = await resp.data
        return data
    }
    throw new Error(`Unable to get current user\nStatusCode\t ${resp.status}`)
}

export default postLesson
