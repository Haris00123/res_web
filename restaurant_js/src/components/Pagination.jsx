import '../styles/pagination.css';

const Pagination = () => {
    const pages = 5;
    const currentPage = 1 ;

    return (
        <ul className='pagination'>
            {
                [...Array(pages).keys()].map(page => (
                    <li 
                    key={page}
                    className={`${page+1 === currentPage ? 'paginate-item active-page' : 'paginate-item'}`}
                    // onClick={() => fetchProducts(page+1)}
                    >
                        {page + 1}
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination