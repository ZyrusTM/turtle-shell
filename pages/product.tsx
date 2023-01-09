import Image from 'next/image';
import defStyles from '../styles/DefaultStyles.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css'

export default function Product() {
    return (
        <>
        <div className={defStyles.navBorder}>
            <Header />
        </div>

        

        <Footer />
        </>
    );
}