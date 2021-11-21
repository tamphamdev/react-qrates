import Link from "next/link";
import { NavLink, Button, Logo } from "../../components";
import * as ROUTES from "../../constants/routes";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { name: "discover" },
  { name: "search" },
  { name: "why trates" },
  { name: "cart" },
];

const renderTextLink = (item, index) => {
  return (
    <Link key={index} href={item.name}>
      <a className={styles.header}>{item.name}</a>
    </Link>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header-public}>
        <Logo />
        <nav className="header-public__nav">
          <NavLink
            links={NAV_LINKS}
            renderItems={(item, index) => renderTextLink(item, index)}
          />
        </nav>
        <div className="header-public__login">
          <NavLink
            links={[{ name: "login" }]}
            renderItems={(item, index) => renderTextLink(item, index)}
          />

          <Button styleClass="btn-primary">
            <Link href={ROUTES.PROJECTS}>make a record</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
