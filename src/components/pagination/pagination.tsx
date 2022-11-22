
import './pagination.css'


export const Pagination = (props: any , value: any) => {
    const li = preparePages(props.total_pages, props.actual_page)
    return (
        <>
            <nav>
                <footer>
                    <ul>
                        {li ? li.map((item: any | Number) =>
                            item.selected ?
                                <li  key={item.pageNumber}>{item.pageNumber}</li> :
                                <li
                                    key={item.pageNumber}
                                    value={item.pageNumber}
                                    onClick={(e:any) => {
                                        props.action(e.target.value.toString())
                                    }}>
                                    {item.pageNumber}
                                </li>
                        ) : void 0}
                    </ul>
                </footer>

            </nav>
        </>
    )
}

const preparePages = ( totalPages: number, actual_page:number, pagesArray:any = []) => {
    for (let  i = 1; i <= totalPages; i++) {
        actual_page === i ? pagesArray.push(  { pageNumber:  i, selected: true }) :
            pagesArray.push({ pageNumber: i, selected: false })
    }
    return pagesArray
}