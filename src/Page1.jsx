import { Link, useHistory } from "react-router-dom/cjs/react-router-dom"

export const Page1 = () => {
    // ページ遷移時に渡すデータ
    const arr = [...Array(1000).keys()];
    console.log(arr);

    const history = useHistory();

    const onClickDetailA = () => history.push({ pathname: "/page1/detailA" ,state :arr});

    return (
        <div>
            <h1>ページ1です</h1>
            <Link to={{ pathname: "/page1/detailA" ,state :arr}}>DetailA</Link>
            <br />
            <Link to="/page1/detailB">DetailB</Link>
            <br />
            {/* ボタンをクリックしたら画面遷移する */}
            <button onClick={onClickDetailA}>DetailA</button>
        </div>
    )
}