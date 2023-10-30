import { Fragment } from "react";
import styles from "./Header.module.css";
import top from "../../assests/waves.png"
import logo from "../../assests/hederLogo.png";
import arrow from "../../assests/arrow.svg"
export function Header() {
    return (
        <Fragment>

            <div className={styles.headerDiv}>
                <img alt="loading" className={styles.topLogo} src={top} />
                <div className={styles.headerNav}>
                    <p className={styles.headLogo}>Facebook</p>
                    <ul className={styles.headerList}>
                        <li>Products</li>
                        <li>Solution</li>
                        <li>Industries</li>
                        <li>Pricing</li>
                        <li>Resource</li>
                    </ul>
                    <button className={styles.headerButton}>Book a Demo</button>
                </div>
               <div className={styles.mainMid}>
                <div className={styles.midBox1}>
                    <p className={styles.mid11}><p></p>LEADS MANAGEMENT</p>
                    <p className={styles.mid12}>Welcome your <p>Facebook.</p></p>
                    <p className={styles.mid13}>Far far away, behind the word mountains, far from the countries<br /> Vokalia and Consonantia, there live the blind texts.</p>
                    <button className={styles.mid14}>Try It Now <img alt="loading" src={arrow} /> </button>
                </div>
                <img alt="loading" className={styles.midBox2} src={logo} />
                </div>


            </div>
        </Fragment>
    );
}
