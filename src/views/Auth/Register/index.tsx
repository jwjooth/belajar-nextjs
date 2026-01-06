import Link from "next/link"
import style from "../login.module.css"

const RegisterViews = () => {
  return (
    <>
      <div className={style.login}>
        <h1>Register Page</h1>
        <p>Sudah punya akun? <Link href={"./login"}>Login Disini</Link></p>
      </div>
    </>
  )
}

export default RegisterViews