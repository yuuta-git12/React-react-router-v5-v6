// State取得時に必要なライブラリ
import { useLocation } from "react-router-dom/cjs/react-router-dom"

export const Page1DetailA = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>ページ1詳細Aです</h1>
            {/* Stateで取得したarrの中身をmap関数を使って一覧表示 */}
            {location.state.map( value => (
               <div>
                    <p>{value}</p>
               </div>
            ))}
        </div>
    )
}
