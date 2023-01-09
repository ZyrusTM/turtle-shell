import { useState } from 'react';
import {
  Button,
  TextInput,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from '../styles/Home.module.css'
import defStyles from '../styles/DefaultStyles.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import RelaxImage from '../public/img/relax.png'
import ProtectionImage from '../public/img/shield.png'
import Logo from '../public/img/logo.png'

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
  tabs: string[];
}

export default function Home() {
  return <>
  {/* <HeaderTabs user={{
      "name": "Jane Spoonfighter",
      "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
    }} tabs={[
      "Home",
      "Orders",
      "Education",
      "Community",
      "Forums",
      "Support",
      "Account",
      "Helpdesk"
    ]}></HeaderTabs> */}

    <div className={styles.startPage}>
      <Header />

      <Image className={styles.logo} src={Logo} width={350} alt="Turtle Shell Logo"/>

      <div className={styles.subscription}>
          <h2>Abonniere unseren Newsletter</h2>
          <p>Wöchentliche News über die Entwicklung von Turtle Shell. Exklusive Umfragen für die Community.</p>
          <div>
            <TextInput id='email' placeholder='Email Adresse'></TextInput>
            <Button className={styles.subscribeButton}>Abonnieren</Button>
          </div>
      </div>
    </div>

    <h1 className={styles.introduction}>Turtle Shell macht Entwicklung effizient und einfach</h1>
    <p className={styles.introductionText}>
      Turtle Shell ist eines der modernsten Containerisierungs-Tools auf dem Markt. Lerne die Vorteile kennen und starte noch Heute in eine effektivere, effizientere und einfachere Entwicklung.
    </p>

    <div className={styles.container}>
      <h1>Vorteile:</h1>
      <div>
        <div className={styles.benefitListItem}>
          <Image src={RelaxImage} width={150} alt="Relaxed man"/>
          <span>Sicherheit</span>
        </div>
        <div className={styles.benefitListItem}>
          <Image src={ProtectionImage} width={150} alt="Shield"/>
          <span>Komfort</span>
        </div>
      </div>
    </div>

    <Footer />

  </>
}