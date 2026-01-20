import { Button } from "../../Button/Button";
import styles from "./Page404.module.css";

export const Page404 = () => {

    return (
        <section className={styles.page404}>
            <div className={styles.container}>
                <h1>404</h1>
                <h2>ページが見つかりません</h2>
                <p>申し訳ありませんが、お探しのページは存在しないか、移動した可能性があります。</p>
                <Button path="/">ホームに戻る</Button>
            </div>
        </section>
    )
}