import type { NextPage } from "next";
import { useRouter } from "next/router";

const DyanmicPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  return <p>Id: {pid}</p>;
};

export default DyanmicPage;
