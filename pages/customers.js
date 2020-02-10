import fetch from "isomorphic-unfetch";
import Link from "next/link";

CustomersPage.getInitialProps = async ({ req, query }) => {
  const protocol = req.headers.referrer.split('://')[0];
  const host = req.header.host;
  const pageRequest = `${protocol}//${host}/api/customers`;
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json;
};

function CustomersPage({ customers }) {
  return <div>{customers.length}</div>;
}

export default CustomersPage;
