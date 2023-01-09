import styles from './Footer.module.css'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.table}>
                    <section className={styles.footerSection}>
                        <h2>Über uns</h2>
                        <a className={styles.link}>GitHub</a>
                        <a className={styles.link}>Spenden</a>
                    </section>
                    <section className={styles.footerSection}>
                        <h2>Projekt</h2>
                        <a className={styles.link}>Unterstützer</a>
                        <a className={styles.link}>Q & A</a>
                    </section>
                    <section className={styles.footerSection}>
                        <h2>Community</h2>
                        <a className={styles.link}>Block</a>
                        <a className={styles.link}>Twitter</a>
                    </section>
                </div>

            </div>

            <br></br>
            <hr></hr>
            <br></br>

            <div className={styles.table + " "+ styles.test}>
                <span>&#169; Turtle Shell</span>
                <span>|</span>
                <span>AGB</span>
                <span>|</span>
                <span>Datenschutz</span>
                <span>|</span>
                <a href='/impress'>Impressum</a>
            </div>
        </footer>
    )
}