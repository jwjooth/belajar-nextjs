import { useRouter } from "next/router";

export default function ShopPage() {
  const router = useRouter();
  const { slug } = router.query;
  if(slug != undefined){
    return (
      <>
        <h1>Shop Web Pages</h1>
        <p>Jumlah Level Path: {slug?.length}</p>
        <p>Product: {Array.isArray(slug) ? slug.join(" ") : slug}</p>
        {/* <p>{slug[0]}</p>
        <p>{slug[1]}</p>
        <p>{slug[2]}</p> */}
      </>
    );
  }
}