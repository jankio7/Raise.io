import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
            <div className="text-center">
                <img src="/assets/images/gallery-1.jpg" className="d-block mx-auto rounded-circle" style={{width:"200px"}}/>
                <h1>404</h1>
                <h1>Page Not found!!!</h1>
                <Link to="/">Back to HOME!!</Link>
            </div>
        </>
    )
}