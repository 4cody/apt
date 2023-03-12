import Link from "next/link";

import Layout from "../components/layout";

function AppIndex() {
  return (
    <Layout>
      <div>Welcome to Next.js!</div>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/signup">Signup</Link>
    </Layout>
  );
}

export default AppIndex;
