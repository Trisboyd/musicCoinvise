import { Card, Heading, Text, ThemeProvider } from 'degen';
import styles from './main.module.css';

function Main() {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.titleWrap}>
                <Card>
                    <Heading color='white' as='h1'>TBCoin</Heading>
                    <Text color='white'>Where musicians earn by listening to great music</Text>
                </Card>
            </div>
            {/* <div className={styles.stakeBlock}></div> */}
        </section>
    )
}

export default Main;
