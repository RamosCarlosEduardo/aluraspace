import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import Galery from "../../components/Galery";
import styles from './Home.module.scss'

function Home() {
  return (
    <>
      <main className={styles.principal}>
        <section>
          <Menu />
        </section>
		    <Banner />
      </main>
      <div>
        <Galery />
      </div>
    </>
  );
}

export default Home;
