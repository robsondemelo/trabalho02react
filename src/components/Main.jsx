import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <>
            
            <nav className="navbar navbar-expand-lg bg-black">
                <Link to={'/'} className="navbar-brand">
                    <img src="images/logo.png" className="w-100" alt="Logo" />
                </Link>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/sobre'} className="nav-link">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contato'} className="nav-link">Contato</Link>
                        </li>
                        <li className="nav-item">
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
              
              <iframe width="100%" height="320" src={`https://www.youtube.com/embed/${props.video}`}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <div className="card-body">
                <h3>{props.titulo}</h3>
            </div>

            
            </div>
        </div>
        </>
    )
}