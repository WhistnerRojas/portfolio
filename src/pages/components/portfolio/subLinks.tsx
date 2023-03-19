import "../css/portfolio.css"

export default function SubLinks(props:any) {
    return (
        <button className="btn bg-white p-1 mx-1 subLinks_child px-3 bg-opacity-25 text-white">
            {props && props.acc || 'script'}
        </button>
    )
}