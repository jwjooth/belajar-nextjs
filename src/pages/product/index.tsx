import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Product() {
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (!isLogin) {
      router.push("../auth/login")
    }
  })
  return (
    <>
      <h1>INI ADALAH PRODUCT PAGES</h1>
    </>
  )
}