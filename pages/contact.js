import Link from "next/link";
import MainLayout from "../js/components/MainLayout";

export default () => (
  <MainLayout>
    <p>This is the Contact page</p>
    <Link href="/">
      <a>Home</a>
    </Link>
  </MainLayout>
);
