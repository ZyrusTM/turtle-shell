import Header from "../components/Header"
import Footer from "../components/Footer"
import defStyles from '../styles/DefaultStyles.module.css'
import styles from '../styles//Legal.module.css'

export default function Impress() {
    return <>
        <div className={defStyles.navBorder}>
            <Header />
        </div>

        <div className={styles.impressText}>
            <h1>Impressum</h1>
            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Max Mustermann<br />Musterstra&szlig;e 111<br />Geb&auml;ude 44<br />90210 Musterstadt</p>
            <h2>Kontakt</h2>
            <p>Telefon: +49 (0) 123 44 55 66<br />Telefax: +49 (0) 123 44 55 99<br />E-Mail: mustermann@musterfirma.de</p>
            <h2>Redaktionell verantwortlich</h2>
            <p>Erik Einfallsreich<br />Musterstra&szlig;e 110<br />90210 Musterstadt</p>
            <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
            <br/>
            <p className={styles.legalNote}>Bei der vorliegenden Seite handelt es sich um eine ausschliesslich privat genutzte Seite zur Präsentation. 
            Das Produkt &quot;Turtle Shell&quot; wird nicht angeboten und existiert auch nicht.</p>
        </div>
        
        <Footer></Footer>
    </>
}