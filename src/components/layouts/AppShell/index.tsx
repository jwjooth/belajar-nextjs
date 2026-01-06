import { useRouter } from "next/router"
import Navbar from "../Navbar"

export type AppShellProps = {
  children: React.ReactNode
}

const disabledNavbar = [
  '/auth/login',
  '/auth/register',
  '/404'
]

export default function AppShell(props: AppShellProps) {
  const router = useRouter()
  const { children } = props
  return (
    <>
      {!disabledNavbar.includes(router.pathname) && <Navbar/>}
      {children}
    </>
  )
}