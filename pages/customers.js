import fetch from "isomorphic-unfetch";

CustomersPage.getInitialProps = async ({ req }) => {
  const { headers } = req;
  const pageRequest = `${headers['x-forwarded-proto']}://${headers.host}/api/customers`;
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json;
};

function CustomersPage({ customers }) {
  return <div>{customers.length}</div>;
}

export default CustomersPage;
