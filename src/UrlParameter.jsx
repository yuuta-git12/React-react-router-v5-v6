import { useParams, useLocation } from "react-router-dom/cjs/react-router-dom"

export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    // queryのパラメータを確認
    console.log(query);
    return (
        <div>
            <h1>UrlParameterページです</h1>
            <p>パラメーターは{ id }です</p>
            <p>パラメーターは{ query.get("name") }です</p>
            <p>パラメーターは{ query.getAll("name") }です</p>
        </div>
    )
}