import styles from './footer.module.scss'
export function Footer() {
    return (
        <footer className={styles.footer}>
            <main className={styles.bkcolor}>
                <h3>Entre em contato concosco!</h3>
                <div className={styles.dev}>
                    <div className={styles.nomesite}>
                        <p>4Rent</p>
                        
                    </div>
                    <div className={styles.nomenomes}>
                        <a href='https://www.linkedin.com/in/bruna-bettiol'>Bruna</a>
                        <a href='https://www.linkedin.com/in/luan-cordeiroo/'>Luan</a>
                        <a href='https://www.linkedin.com/in/felipedegoes/'>Felipe</a>
                        <a href='https://www.linkedin.com/in/aline-dos-santos-pinhelli-844079160'>Aline</a>
                    </div>
                </div>
            </main>
        </footer>
    )
}