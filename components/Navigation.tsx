import { IconChevronDown } from '@tabler/icons'
import styles from './Navigation.module.css'
import Link from 'next/link'

export interface NavButton {
    name: string
    url: string
}

export interface NavDropdown {
    name: string
    buttons: NavButton[]
}

export interface NavigationOptions {
    buttons: (NavButton | NavDropdown)[]
}

function renderNavigationItems(buttons: (NavButton | NavDropdown)[]) {
    return (
        <>
        {
            buttons.map((b) => {
                if("buttons" in b) {
                    return renderDropdown(b)
                }
                return renderButton(b)
            })
        }
        </>
    )
}

function renderDropdown(dropdown: NavDropdown) {
    return (<>
        <div className={styles.navItem}>
            <span>{dropdown.name}</span>
            <IconChevronDown className={styles.chevron}/>
            <div className={styles.navContent}>
                {
                    renderNavigationItems(dropdown.buttons)
                }
            </div>
        </div>
    </>)
}

function renderButton(button: NavButton) {
    return (<>
        <Link href={button.url} className={styles.navItem}>
            {button.name}
        </Link>
    </>)
}


export default function Navigation(options: NavigationOptions) {
    return (
        <>
            <div className={styles.nav}>
            {
                renderNavigationItems(options.buttons)
            }
            </div>
        </>
    )
}