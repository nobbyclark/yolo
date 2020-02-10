import fetch from "isomorphic-unfetch";
import Link from "next/link";

CustomersPage.getInitialProps = async ctx => {
  console.log(Object.keys(ctx))
  const pageRequest = `https://yolonextjs.azurewebsites.net/api/customers`;
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json;
};

function CustomersPage({ customers }) {
  return <div>{customers.length}</div>;
}

export default CustomersPage;
