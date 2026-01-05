import Navbar from "../Navbar"

export type AppShellProps = {
  children: React.ReactNode
}

export default function AppShell(props: AppShellProps) {
  const { children } = props
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}