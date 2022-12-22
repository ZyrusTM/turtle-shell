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
            name: 'Products',
            url: '/test'
            },
            {
            name: 'Developers',
            buttons: [
                {
                name: 'Test1',
                url: '/a'
                },
                {
                name: 'Test1',
                url: '/a'
                },
                {
                name: 'Test1',
                url: '/a'
                },
                {
                name: 'Test1',
                url: '/a'
                }
            ]
            },
            {
            name: 'Pricing',
            url: '/pricing'
            },
            {
            name: 'Blog',
            url: '/blog'
            },
            {
            name: 'Partners',
            url: '/partners'
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
            <TextInput icon={<IconSearch />} placeholder="Question" className={styles.searchInput} radius='xl' wrapperProps={{
                styles: {
                backgroundColor: 'transparent'
                }
            }}/>
            </div>
            
            <div>
            <Button variant="outline" className={styles.getStartedButton} radius="xl" size="md">Get Started</Button>
            </div>
        </MantineHeader>
        </>)
}