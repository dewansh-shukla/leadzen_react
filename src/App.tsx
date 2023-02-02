import React, { useEffect, useState } from "react"
import Card from "./components/Card"

const App = () => {
  const [loading, setLoading] = useState<Boolean>(true)
  const [data, setData] = useState<any>(null)
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setData(data)
    console.log(data)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    getData()
  }, [])

  return (
    <div className='w-full flex flex-col items-center pl-10 pr-10'>
      <div className='w-full mt-10 flex flex-col items-center'>
        {loading ? (
          "Loading..."
        ) : (
          <>
            <p className='font-bold'>Details</p>
            {data?.length > 0 &&
              data.map((item: any) => {
                return <Card info={item} />
              })}
          </>
        )}
      </div>
    </div>
  )
}

export default App
