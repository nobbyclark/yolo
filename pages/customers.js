import fetch from "isomorphic-unfetch";

CustomersPage.getInitialProps = async ctx => {
  console.log(Object.keys(ctx.req))
  console.log(ctx.req.headers)
  const pageRequest = `https://yolonextjs.azurewebsites.net/api/customers`;
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json;
};

function CustomersPage({ customers }) {
  return <div>{customers.length}</div>;
}

export default CustomersPage;
