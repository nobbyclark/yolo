import fetch from "isomorphic-unfetch";
import Link from "next/link";

CustomersPage.getInitialProps = async ({ req, query }) => {
  const protocol = req
    ? `${req.headers["x-forwarded-proto"]}:`
    : location.protocol;
  const host = req ? req.headers["x-forwarded-host"] : location.host;
  const pageRequest = `${protocol}//${host}/api/customers`;
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json;
};

function CustomersPage({ customers }) {
  return <div>{customers.length}</div>;
}

export default CustomersPage;
