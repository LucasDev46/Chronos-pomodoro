import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Styles.module.css';
import { useState, useEffect } from 'react';

type AvaliableThemes = 'dark' | 'light'

export function Menu(){

    //logica para trocar a cor do theme do site.
    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvaliableThemes || 'dark';
        return storageTheme
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // nao segue o link

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    //so vai executar essa função, quando for mudar o valor de theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme])

    return <nav className={styles.menu}>
        <a href="#" className={styles.menuLink} aria-label='Home' title='Home'>
            <HouseIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='History' title='History'>
            <HistoryIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Settings' title='Settings'>
            <SettingsIcon />
        </a>
        <a href="#" className={styles.menuLink} aria-label='Theme' title='Theme'
        onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
        </a>  
    </nav>
}