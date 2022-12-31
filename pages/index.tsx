import { useState } from 'react';
import {
  Button,
  TextInput,
  createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

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

      <div className={styles.container}>
          <h2>Subcribe to our newsletter</h2>
          <p>Weekly news about the development of turtle shell. Exclusive polls for the community.</p>
          
          <div>
            <TextInput id='email' placeholder='Email address'></TextInput>
            <Button className={styles.subcribeButton}>Subcribe</Button>
          </div>
        </div>

        <Footer />
        
    </div>


  </>
}