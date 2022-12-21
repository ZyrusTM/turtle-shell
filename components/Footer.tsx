import styles from './Footer.module.css'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.table}>
                    <section className={styles.footerSection}>
                        <h2>About us</h2>
                        <a className={styles.link}>Test</a>
                        <a className={styles.link}>Test1</a>
                        <a className={styles.link}>Test2</a>
                    </section>
                    <section className={styles.footerSection}>
                        <h2>Project</h2>
                        <a className={styles.link}>Test</a>
                        <a className={styles.link}>Test1</a>
                        <a className={styles.link}>Test2</a>
                    </section>
                    <section className={styles.footerSection}>
                        <h2>Community</h2>
                        <a className={styles.link}>Test</a>
                        <a className={styles.link}>Test1</a>
                        <a className={styles.link}>Test2</a>
                    </section>
                </div>

            </div>

            <br></br>
            <hr></hr>
            <br></br>

            <div className={styles.table + " "+ styles.test}>
                <span>&#169; Turtle Shell</span>
                <span>|</span>
                <span>Terms of Service</span>
                <span>|</span>
                <span>Privacy</span>
                <span>|</span>
                <span>Legal</span>
            </div>
        </footer>
    )
}