import './Pagination.css'

export default function Pagination({ currentPage, cakesPerPage, totalCakes, paginate }) {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalCakes / cakesPerPage); index++) {
        pageNumbers.push(index)
    }


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a  onClick={() => {paginate(number);}} 
                        className={"page-link " + (number === currentPage ? "pagination-indicator-active" : "pagination-indicator")}> 
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}