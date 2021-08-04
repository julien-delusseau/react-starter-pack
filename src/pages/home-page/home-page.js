import {Link} from "react-router-dom";
import './home-page.css'

const HomePage = ({users}) => {
    return (
        <section id="home">
            <h1>Page d'accueil</h1>

            <div>
                <ul>
                    {
                        // Nous faisons une loop sur la props users, et ainsi afficher les noms
                        // avec les liens associés
                        users.map(user => (
                            <li key={user.id}><Link to={`users/${user.id}`}>{user.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default HomePage