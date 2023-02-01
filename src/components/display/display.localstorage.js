// https://lightrains.com/blogs/using-localstorage-hook-react/
import { useState, useEffect } from 'react'

const DisplayUseLocalStorage = (key, defaultValue) => {

    const [display, setDisplay] = useState(() => {

      let currentValue
  
      try {
        currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))

      } catch (error) {
        currentValue = defaultValue
      }
  
      return currentValue

    })
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(display))
    }, [display, key])
  
    return [display, setDisplay]

}
  
  export default DisplayUseLocalStorage