import ReactPaginate from 'react-paginate';

const Pagination = ({info, setPage}) => {

const countPage = Math.ceil(info.count / 10);

    return(
        <ReactPaginate 
            nextLabel="Siguiente" previousLabel="Anterior"        
            className='justify-content-center gap-4 my-4 text-yellow-500 items-center flex flex-row' 
            pageCount={countPage}
            nextClassName="btn  " 
            previousClassName='btn '
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'         
            onPageChange={(data)=>setPage(data.selected+1)}
        />
    )
}

export default Pagination;