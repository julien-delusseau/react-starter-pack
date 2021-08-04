import {useParams} from "react-router-dom";

const UserPage = ({users}) => {
    // Pour afficher correctement la page utilisateur, nous aurons besoin d'avoir accès au paramètre 'id'
    // qui se trouve dans notre url.
    // Pour se faire, nous utiliserons le hook: useParams
    const params = useParams()
    // Regardez le résultat dans votre console
    console.log(params)
    // Il existe d'autre hooks vraiment utiles avec react-router-dom
    // N'hésitez pas à aller voir leur documentation

    // Grâce à notre objet params, nous pouvons récupérer l'id, donc afficher le correct utilisateur
    const correctUser = users.find(u => u.id.toString() === params.id)

    return (
        <section id="user-section">
            <h1>Page de l'utilisateur</h1>
            <h4>Nom: {correctUser.name}</h4>
            <h5>Email: {correctUser.email}</h5>
        </section>
    )
}

export default UserPage