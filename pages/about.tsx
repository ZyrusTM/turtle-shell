import Image from 'next/image';
import defStyles from '../styles/DefaultStyles.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css'
import TraditionellerAufbau from '../public/img/traditionellerAufbau.png';
import Container from '../public/img/container.png';
import Virtualisierung from '../public/img/virtualisierungAufbau.png';
import Vergleich from '../public/img/vergleichConVir.png';

export default function About() {
    return (<>
    <div className={defStyles.navBorder}>
    <Header />
    </div>

    <div className={styles.text}>
      <h1>Was ist Containerisierung?</h1>
      <p>
        Mit Hilfe von Containerisierung ist es möglich, Software mit all ihren Abhängigkeiten, Konfigurationsdateien und Bibliotheken zu bündeln, sodass diese
        unabhängig von dem Betriebssystem ausführbar sind. Die Containerisierung ist damit eine Form der Betriebssystemvirtualisierung.
      </p>
    </div>

    <div className={styles.containerVergleichAufbau}>
      <Image className={styles.imgTraditionellerAufbau} src={TraditionellerAufbau} alt="Traditioneller Aufbau des Computers"/>
      <Image className={styles.imgContainer} src={Container} alt="Aufbau des Computers mit Containern"/>
    </div>

    <div className={styles.textBoxVorteile}>
      <h1>Welche Vorteile bietet sie?</h1>
      <ul>
        <li><b>Geringe Systemressourcen</b> - Container benötigen weniger Overhead als herkömmliche Hardware oder virtuelle Umgebungen.</li>
        <li><b>Sicherheit</b> - Durch die Isolation der Container von einander, wirkt sich bösartiger Code in einem Container nicht auf die anderen aus.</li>
        <li><b>Skalierbarkeit</b> - Container können bei Bedarf bereitgestellt, gepatcht und skaliert werden.</li>
        <li><b>Portabilität</b> - Container funktionieren immer gleich, egal, wann und wo sie eingesetzt werden.</li>
        <li><b>Geschwindigkeit</b> - Einzelne Funktionen können als kleine, unabhängige Softwareeinheiten entwickelt und getestet werden.</li>
      </ul>
    </div>

    <div className={styles.boxVirtualisierung}>
      <h1>Virtualisierung</h1>
      <Image className={styles.imgVirtualisierung} src={Virtualisierung} alt="Aufbau des Computers mit virtuellen Maschinen"/>
      <p className={styles.textVirtualisierung}>Virtuelle Maschinen (VMs) sind Umgebungen, die ähnlich wie Container Betriebssystemvirtualisierung ermöglichen. Sie werden auf einem physischen Rechner erstellt
         und können lokal oder extern betrieben werden. Im Vergleich zu Containern sind virtuelle Maschinen viel größer, enthalten
         eigene Betriebssysteme und können Funktionen wie die Emulation ganzer Systeme übernehmen.
      </p>
    </div>

    <div className={styles.vergleichConVir}>
      <h1>Containerisierung vs. Virtualisierung</h1>
      <Image className={styles.imgVergleich} src={Vergleich} alt="Vergleich Containerisierung/Virtualisierung"/>
    </div>

    <Footer />
    </>);
}