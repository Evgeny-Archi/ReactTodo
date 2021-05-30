import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url)
        setData(result.data)
      } catch (e) {
        setError(e)
      }

      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}
