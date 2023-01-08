import {
  Button,
  TextInput,
  createStyles,
} from '@mantine/core';
import defStyles from '../styles/DefaultStyles.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css'

export default function About() {
    return <>
    <div className={styles.navBorder}>
    <Header />
    </div>

    <div className={styles.textBox}>
      <h1>What is Containerization?</h1>
      <p>Turtle Shell is one of the most modern containerization technologies. But what is containerization in detail?</p><br/>
      <p>Hi</p>
    </div>
    
   

    <Footer />
    </>
}