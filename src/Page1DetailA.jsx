// State取得時に必要なライブラリ
import { useLocation,useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
    const location = useLocation();
    console.log(location.state);
    const array = location.state;

    const navigate = useNavigate();

    const onClickBack = () => navigate(-1);

    return (
        <div>
            <h1>ページ1詳細Aです</h1>
            {/* Stateで取得したarrの中身をmap関数を使って一覧表示 */}
            {array.map( value => (
               <div key={value}  >
                    <p>{value}</p>
               </div>
            ))}
            <button onClick={onClickBack}>戻る</button>
        </div>
    )
}
