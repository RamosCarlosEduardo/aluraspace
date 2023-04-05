import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from './Home.module.scss'

function Home() {
  return (
    <>
      <Header />
      <main className={styles.principal}>
        <section>
          <Menu />
        </section>
		<Banner />
      </main>
    </>
  );
}

export default Home;
