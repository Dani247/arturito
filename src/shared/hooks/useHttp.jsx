import { useState, useEffect } from 'react'

// * get hook
export const useGet = (url) => {
  // * handles every fetch state
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ err, setErr ] = useState(null)

  // * fetch method
  const fetchData = async (url) => {
    setIsLoading(true)
    try {
      const res = await window.fetch(url)
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    } catch (e) {
      console.log('%c GET ERROR', 'color:red', e)
      setErr(e.toString())
      setIsLoading(false)
    }
  }

  // * re fetch method
  const reFetch = () => {
    fetchData(url)
  }

  // * component did mount
  useEffect(() => {
    fetchData(url)
  }, [])

  // * returns the state object of the fetch and re fetch method
  return [ { data, isLoading, err }, reFetch ]
}

// * post hook
export const usePost = (url) => {
  // * handles every Post state
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ err, setErr ] = useState(null)

  // * fetch method
  const postData = async (body) => {
    setIsLoading(true)
    try {
      const res = await window.fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      })
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    } catch (e) {
      console.log('%c GET ERROR', 'color:red', e)
      setErr(e.toString())
      setIsLoading(false)
    }
  }

  // * returns the post state object and re fetch method
  return [ { data, isLoading, err }, postData ]
}
