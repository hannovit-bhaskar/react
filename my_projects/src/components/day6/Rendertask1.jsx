import React from 'react'

function Rendertask1(props){
    if (props.task1.is_task1){
        return(
            <>
            <form className='mt-5'>
                <input type="text" onChange={props.getSearch} className="form-control"  placeholder='Search Results' />
            </form>
            <table className="table table-dark table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
            <tbody>
                {props.data.filter((item) => {return props.search.toLowerCase()===''?item:item.first_name.toLowerCase().includes(props.search)}).map((item)=>(
                <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.Phone}</td>
                </tr>
                ))}
            </tbody>
            </table>
            </>
        )
    }else{
        return(
            <>
            </>
        )
    }
}
export default Rendertask1