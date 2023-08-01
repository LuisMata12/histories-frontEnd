import { Link } from "react-router-dom"
import "./styles/login.css"

export const Register = () => {
  return (
    <>
    <div className="row">
        <div className="col-6">
            <img src="https://cdn.leonardo.ai/users/6cbc50c7-0af8-42ea-beb1-68d1dae2a4fa/generations/3d2382bf-9583-4ca8-a412-c84ce950cdb3/Leonardo_Diffusion_a_scroll_that_says_the_following_create_the_0.jpg" alt="histories-login" className="img-login" />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center">Register</h2>
            <form className="form-container">
                <div className="mb-3">
                    <label className="form-label">User name</label>
                    <input type="text" className="form-control" id="userId" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>  
            <p>if you have a count <Link to='/login'>click</Link> here</p>
        </div>        
    </div>
  </>
  )
}
