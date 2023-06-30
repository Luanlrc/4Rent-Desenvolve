import styles from './footer.module.scss'
export function Footer() {
    return (
        <footer className={styles.footer}>
            <main className={styles.bkcolor}>
                <h3>Entre em contato concosco!</h3>
                <div className={styles.dev}>
                    <div className={styles.nome}>
                        <p>Luan</p>
                        <a href='https://www.linkedin.com/in/luan-cordeiroo/'>Linkedin</a>
                    </div>
                    <div className={styles.nome}>
                        <p>Aline</p>
                        <a href='https://www.linkedin.com/in/aline-dos-santos-pinhelli-844079160'>Linkedin</a>
                    </div>
                    <div className={styles.nome}>
                        <p>Felipe</p>
                        <a href='https://www.linkedin.com/in/felipedegoes/'>Linkedin</a>
                    </div>
                    <div className={styles.nome}>
                        <p>Bruna</p>
                        <a href='https://www.linkedin.com/in/bruna-bettiol'>Linkedin</a>
                    </div>
                </div>
            </main>
        </footer>
    )
}