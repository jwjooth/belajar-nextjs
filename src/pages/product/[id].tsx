import { useRouter } from "next/router";

export default function DetailProductPage() {
  const router = useRouter();
  // ambil id
  const { id } = router.query
  return (
    <>
      <h1>Detail Product Page</h1>
      <p>Product: {id}</p>
    </>
  )
}