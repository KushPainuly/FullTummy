import { Link } from "react-router-dom";

const PrivacyPolicy = () =>{
    return(
        <>
        <div className="container">
            <div className="text-bold text-center mb-2 fs-3 fw-large">
                <h2>Terms Conditions & Privacy Policy for FullTummy</h2>
            </div>
            <div className="text-center mt-3 mb-4">
                <div className="row gt-2">
                    <div className="col">
                    <Link to="https://www.freeprivacypolicy.com/live/4db0ba20-414a-4081-a124-8a5f55651eb1" className="btn btn-danger">Terms and Conditions</Link>
                    </div>
                    <div className="col">
                        <Link to="https://www.freeprivacypolicy.com/live/2bf5b6b4-a047-4f27-8692-69f6f48dd8f3" className="btn btn-danger">Privacy Policies</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default PrivacyPolicy;