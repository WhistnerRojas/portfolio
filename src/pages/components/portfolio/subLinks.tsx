import "../css/portfolio.css"

export default function SubLinks({acc, onClick, active}:any) {
    return (
        <button className={`btn bg-white p-1 mx-1 px-3 bg-opacity-25 text-white subLinks_child ${active.toLowerCase() === acc.toLowerCase() && "active"}`} onClick={onClick}>
            {acc}
        </button>
    )
}