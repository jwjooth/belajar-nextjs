import Link from "next/link"
import { useRouter } from "next/router"
import style from '../login.module.css'

const LoginViews = () => {
  const router = useRouter()

  const handlingLogin = () => {
    router.push("../product")
  }
  return (
    <>
      <div className={style.login} style={{ gap: "10px" }}>
        <h1>Login Page</h1>
        <p style={{
          color: "blue",
          border: "2px solid red",
          borderRadius: "5px",
          backgroundColor: "white",
          margin: "5px",
          padding: "5px"
        }}> Belum punya akun? <Link href={"./register"}> <strong>Registrasi Disini</strong></Link></p>
        <button onClick={handlingLogin}>product page</button>
      </div>
    </>
  )
}

export default LoginViews