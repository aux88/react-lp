import { Button } from "../../Button/Button";
import style from "./Page404.module.css";

export const Page404 = () => {

    return (
        <section className={style.page404}>
            <div className={style.container}>
                <h1>404</h1>
                <h2>ページが見つかりません</h2>
                <p>申し訳ありませんが、お探しのページは存在しないか、移動した可能性があります。</p>
                <Button path="/">ホームに戻る</Button>
            </div>
        </section>
    )
}