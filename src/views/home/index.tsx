import { useEffect } from "react"
import { getList } from '@mock/api/index'
export default function Home() {
  useEffect(() => {
    getList().then((res) => {
      console.log(res)
    })
  }, [])
  return <span>home</span>
}