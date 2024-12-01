import { Link } from "react-router-dom/cjs/react-router-dom"

export const Page2 = () => {
    return (
        <div>
            <h1>ページ2です</h1>
            <Link to="/page2/999">URL Parameter</Link>
        </div>
    )
}