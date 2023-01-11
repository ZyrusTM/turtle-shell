import Image from 'next/image';
import defStyles from '../styles/DefaultStyles.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Product.module.css'
import Logo from '../public/img/logo.png'

export default function Product() {
    return (
        <>
        <div className={defStyles.navBorder}>
            <Header />
        </div>

        <div className={styles.title}>
            <h1>Turtle Shell - Containerisierung der Zukunft</h1>
        </div>

        <ul className={styles.introductionText}>
            <li>Schnelle, lokale App-Entwicklung für Windows, Linux und MacOS</li>
            <li>Unbegrenzte öffentliche Verzeichnisse um Container-Images mit Kollegen, Kunden, oder Freunden teilen zu können</li>
            <li>Verbesserte Performance durch automatisierte App-Tests</li>
        </ul>


        <div className={styles.featureCon}>
            <div className={styles.textFeatures}>
                <h1>Features</h1>
                <ul>
                    <li>Automatische Erzeugung von betriebsbereiten Containern auf Knopfdruck</li>
                    <li>Reibungsloser Betrieb</li>
                    <li>Turtle Shell Projekt Vorlagen zur automatischen Containerisierung während der laufenden Entwicklung</li>
                    <li>Einfache Skalierung der Systemressourcen</li>
                    <li>Erzeugen Sie Container unter Windows, führen Sie sie unter Linux aus und erweitern Sie den Inhalt unter MacOS</li>
                    <li>Hohe Effizienz</li>
                    <li>Einfache Datenbankanbindung</li>
                </ul>
            </div>
            <Image className={styles.logo} src={Logo} width={350} alt="Turtle Shell Logo"/>
        </div>

        <div className={styles.extensionCon}>
            <div className={styles.tsControl}>
                <h1>Turtle Shell Control</h1>
                <ul>
                    <li>GUI für Turtle Shell zur einfachen Bedienung</li>
                    <li>Einfache Kontrolle der Container</li>
                    <li>Genaue Skalierung </li>
                    <li>Ressourcenverwaltung</li>
                    <li>Einfache Verknüpfung mit einem neuen oder bereits vorhandenem Projekt</li>
                </ul>
            </div>

            <div className={styles.tsHub}>
                <h1>Turtle Shell Hub</h1>
                <ul>
                    <li>Parallele Entwicklung auf einem zentralen Server</li>
                    <li>Communityprojekte</li>
                    <li>Einfache Veröffentlichung von Turtle Shell Projekten</li>
                    <li>Versionsverwaltung</li>
                    <li>Möglichkeit der Einbindung von Erweiterungen</li>
                </ul>
            </div>
        </div>

        <Footer />
        </>
    );
}