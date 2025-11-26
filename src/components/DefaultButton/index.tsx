import styles from './Styles.module.css'

type DefaultButtonProps = {
    color?: 'green' | 'red'
    icon: React.ReactNode; // <= qualquer coisa que o react possa redenrizar na tela
} & React.ComponentProps<'button'>

export function DefaultButton({icon, color = 'green', ...props}: DefaultButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}>
                {icon}
            </button>
        </>   
    );
}