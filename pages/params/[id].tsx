import type { NextPage } from "next";
import { useRouter } from "next/router";

const DyanmicPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <p>Id: {id}</p>;
};

export default DyanmicPage;
