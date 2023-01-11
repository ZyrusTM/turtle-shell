import Image from 'next/image';
import defStyles from '../styles/DefaultStyles.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Pricing.module.css';
import Education from '../public/img/mortarboard.png'
import Personal from '../public/img/user.png'
import Commercial from '../public/img/value.png'

export default function Pricing() {
    return ( <>

        <div className={defStyles.navBorder}>
            <Header />
        </div>

        <div className={styles.title}>
            <h1 >Preismodell</h1>
        </div>

        <div className={styles.firstCon}>
            <div className={styles.education}>
                <h2>Turtle Shell zu Bildungszwecken</h2>
                <ul>
                    <li>Kostenlos für alle Schüler, Studenten und Bildungseinrichtungen</li>
                    <li>Alle wesentlichen Turtle Shell Funktionen, Turtle Shell Control und Turtle Shell Hub frei verfügbar zur nicht-kommerziellen Nutzung</li>
                    <li>Registriere dich jetzt für Turtle Shell Education</li>
                </ul>
            </div>

            <Image className={styles.imgEdu} src={Education} width={200} alt="Education"/>
        </div>

        <div className={styles.secondCon}>
            <div className={styles.personal}>
                <h2>Turtle Shell zur privaten Nutzung</h2>
                <ul>
                    <li>Kostenlos nutzbar zur nicht-kommerziellen Nutzung</li>
                    <li>Alle wesentlichen Turtle Shell Funktionen und Turtle Shell Control frei verfügbar</li>
                    <li>Begrenzung auf 20 Verzeichnisse, die je nach gewählter Einstellung privat oder öffentlich nutzbar sind</li>
                </ul>
            </div>

            <Image className={styles.imgPersonal} src={Personal} width={200} alt="Personal"/>
        </div>

        <div className={styles.thirdCon}>
            <div className={styles.commercial}>
                <h2>Turtle Shell zur kommerziellen Nutzung</h2>
                <ul>
                    <li>Kostenpflichtig für Unternehmen zur kommerziellen Nutzung</li>
                    <li>Alle Funktionen von Turtle Shell, Turtle Shell Control und Turtle Shell Hub mit unbegrenzten privaten- und öffentlichen Verzeichnissen</li>
                    <li>Kontaktiere uns jetzt für ein individuelles Beratungsgespräch</li>
                </ul>
            </div>

            <Image className={styles.imgCommercial} src={Commercial} width={200} alt="Commercial"/>
        </div>

        <Footer />
    </>);
}