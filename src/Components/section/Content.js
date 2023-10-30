import { Fragment } from "react";
import styles from "./Content.module.css";
import cloud from "../../assests/cloud.svg"
import mid from "../../assests/mid.png";
import hand from "../../assests/hand.png";
import pig from "../../assests/pig.png";
import house from "../../assests/house.png";
import money from "../../assests/money.png";
import map from "../../assests/map.png";
import last from "../../assests/last.png";
import left from "../../assests/leftLeaves.png";
import right from "../../assests/rightleaves.png";
export function Content() {
    return (
        <Fragment>
            <div className={styles.contentBox}>
<img src={left} className={styles.left1} alt="loading"/>
<img src={left} className={styles.left2} alt="loading"/> 
<img src={right} className={styles.right1} alt="loading"/> 

                <p className={styles.toptxt}>Why Choose Our Wxyz<br />
                    Management Software</p>

                <img alt="loading" className={styles.cloud1} src={cloud} />
                <img alt="loading" className={styles.cloud2} src={cloud} />
                <img alt="loading" className={styles.cloud3} src={cloud} />
                <img alt="loading" className={styles.cloud4} src={cloud} />
                <img alt="loading" className={styles.cloud5} src={cloud} />
                <img alt="loading" className={styles.cloud6} src={cloud} />
                <img alt="loading" className={styles.cloud7} src={cloud} />
                <div className={styles.contentBoxBottom}>
                    <img alt="loading" className={styles.midWave} src={mid} />
                    <div className={styles.Bottom1}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.handtxt1}>Teamwork Made Easier</h3>
                            <p className={styles.handtxt2}>Neque porro quisquam est qui dolorem ipsum quia<br />dolor sit amet, consectetur, adipisci velit Neque porro <br />quisquam est qui dolorem ipsum quia dolor sit amet,<br /> consectetur, adipisci velit</p>
                        </div>
                        <img alt="loading" className={styles.hand} src={hand} />
                    </div>
                    <div className={styles.Bottom1}>

                        <img alt="loading" className={styles.hand} src={pig} />
                        <div className={styles.textContainer}>
                            <h3 className={styles.handtxt1}>Budget Friendly</h3>
                            <p className={styles.handtxt2}>Neque porro quisquam est qui dolorem ipsum quia<br /> dolor sit amet, consectetur, adipisci velit Neque porro <br />quisquam est qui dolorem ipsum quia dolor sit amet, <br />consectetur, adipisci velit</p>
                        </div>
                    </div>
                    <div className={styles.Bottom1}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.handtxt1}>Higher sales productivity from <br />all your teams</h3>
                            <p className={styles.handtxt2}>Neque porro quisquam est qui dolorem ipsum quia<br /> dolor sit amet, consectetur, adipisci velit
                            </p>
                        </div>
                        <img alt="loading" className={styles.hand} src={house} />
                    </div>
                    <div className={styles.Bottom1}>
                        <img alt="loading" className={styles.hand} src={money} />

                        <div className={styles.textContainer}>
                            <h3 className={styles.handtxt1}>Grows as Your Business Grows</h3>
                            <p className={styles.handtxt2}>Neque porro quisquam est qui dolorem ipsum quia<br /> dolor sit amet, consectetur, adipisci velitNeque porro<br /> quisquam est qui dolorem ipsum quia dolor sit amet,<br /> consectetur, adipisci velit</p>
                        </div>

                    </div>
                    <div className={styles.Bottom1}>


                        <div className={styles.textContainer}>
                            <h3 className={styles.handtxt1}>From leads to successful sales</h3>
                            <p className={styles.handtxt2}>Neque porro quisquam est qui dolorem ipsum quia<br /> dolor sit amet, consectetur, adipisci velit</p>
                        </div>
                        <img alt="loading" className={styles.hand} src={map} />
                    </div>
                    <div className={styles.Bottom1}>
                        <img alt="loading"className={styles.hand} src={last} />

                        <div className={styles.textContainer}>
                            <h3 className={styles.handtxt1}>Best Support which you desire for</h3>
                            <p className={styles.handtxt2}>If you are looking for the best support, you have come <br />to the right place. We are here to provide you with the<br /> assistance you need</p>
                        </div>

                    </div>

                </div>
                <button className={styles.lastButton}>Try It Now</button>
            </div>
        </Fragment>
    )
}