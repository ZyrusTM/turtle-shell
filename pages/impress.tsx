import Header from "../components/Header"
import Footer from "../components/Footer"
import defStyles from '../styles/DefaultStyles.module.css'

export default function Impress() {
    return <>
        <div className={defStyles.navBorder}>
            <Header />
        </div>
        
        <Footer></Footer>
    </>
}