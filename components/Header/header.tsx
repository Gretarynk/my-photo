import styles from "../Header/header.module.css";
import NavBar from "../NavBar/navbar";
import { links } from "@/constans/links";
import "@/app/globals.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
        <img src="/imperfect.svg" alt="Imperfect Logo" className={styles.logoImage} />
        </div>
      {/* <h1 className={styles.logo}>Imperfect Perfect Photo </h1> */}
      <nav>
        <NavBar links={links} />
      </nav>
    </header>
  );
};
export default Header;
