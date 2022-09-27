import React from 'react'

function Rendertask2(props) {
    if (props.task2.is_task2){
        return(
        <>
        <div className="row row-cols-1 row-cols-md-2 justify-content-center mt-5">
            <div className="col">
            <div className="card">
            {props.task2.form_data?
            <div className="card-header alert-danger">
                {props.task2.form_data.map((item)=>(
                    <div className="text-center" key={item.key}>
                        <div className="card-title">
                        <span className="fw-bold">Email:</span> <span className="text-success"> {item.email}</span>
                        </div>
                        <div className="card-title">
                        <span className="fw-bold">Password:</span> <span className="text-success"> {item.password}</span>
                        </div>
                    </div>
                    ))}
            </div>:<></>}
            <div className="card-body text-dark">
                <div className="text-center h3">Sign In</div>
                <form onSubmit={props.formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' onChange={props.handleChange} value={props.task2.email} className="form-control" />
                        <span className="form-label text-danger">{props.task2.email_error}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' onChange={props.handleChange} value={props.task2.password} className="form-control"/>
                        <span className="form-label text-danger">{props.task2.password_error}</span>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" name='checkbox' onChange={props.handleChange}  checked={props.task2.checkbox} className="form-check-input"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to terms and conditions</label>
                    </div>
                    <p className="text-danger">{props.task2.checkbox_error}</p>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
            </div>
        </div>
        </>
        )
    }else{
        return(
            <></>
        )
    }
}

export default Rendertask2