import { IconSearch } from "@tabler/icons";
import Navigation from "./Navigation";
import { Button, Header as MantineHeader, TextInput } from "@mantine/core";
import styles from './Header.module.css'


export function renderNavigation(hasNav: boolean) {
    if(!hasNav)
        return;
    return <Navigation buttons={
        [
            {
                name: 'Home',
                url: '/'
            },
            {
                name: 'Produkt',
                url: '/product'
            },
            {
                name: 'Preismodell',
                url: '/pricing'
            },
            {
                name: 'Entwickler',
                buttons: [
                    {
                    name: 'Documentation',
                    url: '/test1'
                    },
                    {
                    name: 'Getting Started',
                    url: '/test2'
                    },
                    {
                    name: 'Turtle Shell Extensions',
                    url: '/test3'
                    }
                ]
                },
            {
                name: 'Containerisierung',
                url: '/about'
            }
        ]
        } />
}


export default function Header() {
    return (
        <>
            <MantineHeader height={110} className={styles.header}>
                <h2>Turtle Shell</h2>

                {renderNavigation(true)}

                <div className={'search ' + styles.search}>
                <TextInput icon={<IconSearch />} placeholder="Suche" className={styles.searchInput} radius='xl' wrapperProps={{
                    styles: {
                    backgroundColor: 'transparent'
                    }
                }}/>
                </div>
                
                <div>
                <Button variant="outline" className={styles.getStartedButton} radius="xl" size="md">Starte jetzt</Button>
                </div>
            </MantineHeader>
        </>)
}