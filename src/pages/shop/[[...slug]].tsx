import { useRouter } from "next/router";

export default function ShopPage() {
  const { query } = useRouter();
  if (query != undefined) {
    return (
      <>
        <h1>Shop Pages</h1>
        <p>Shop: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
      </>
    );
  }
}