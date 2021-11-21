import * as ROUTES from "../../constants/routes";
import Link from "next/link";
import Image from "next/image";
const Logo = () => (
  <Link href={ROUTES.HOME} passHref>
    <Image className="logo" src="/logo.svg" layout="fill" />
  </Link>
);

export default Logo;
