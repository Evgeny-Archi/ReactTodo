import axios from 'axios'

export async function fetchTodos({ method = 'get', url, data = {} }) {
  const response = await axios({
    method: method,
    url: url,
    data: data,
  }).catch((error) => {
    if (error.response) {
      throw new Error(error)
    } else if (error.request) {
      throw new Error('Ошибка сети - ' + error.message)
    } else {
      throw new Error(error.message)
    }
  })

  return response
}
