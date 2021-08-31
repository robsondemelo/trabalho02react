import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <>
            
            <nav className="navbar navbar-expand-lg bg-black">
                <Link to={'/'} className="navbar-brand">
                    <img src="images/logo.png" className="w-100" alt="Logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to={'/sobre'} className="nav-link">Sobre</Link>
                        </li>
                        <li>
                            <Link to={'/contato'} className="nav-link">Contato</Link>
                        </li>
                        <li>
                            <Link to={'/Hobbies'} className="nav-link">Hobbies</Link>
                        </li>
                        
                    </ul>
                </div>

               
            </nav>
        
        </>
    )
}

export const Footer = () => {
    return(
        <>
            <footer className="text-center">
              
                <p>Desenvolvido por Robson Melo</p>

            </footer>
        </>
    )
}

export const Video = props => {
    return (
        <>
        <div className="col-12 col-md-4">
            <div className="card">
              
              <iframe width="100%" height="320" src={`https://www.youtube.com/embed/${props.video}`}></iframe>
              
              <div className="card-body">
                <h3>{props.titulo}</h3>
            </div>
            </div>
        </div>
        </>
    )
}