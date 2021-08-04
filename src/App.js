import {Fragment, useEffect, useState} from "react";
import {apiGetter} from "./utils/api";
import Header from "./components/header/header";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import LoginPage from "./pages/login-page/login-page";
import UserPage from "./pages/user-page/user-page";

const App = () => {
    // Nous utilisons le hook useState, pour définir l'état (state) de notre app
    const [users, setUsers] = useState([])

    // Nous utilisons le hook useEffect, pour charger notre liste lorsque le composant se charge (mount)
    useEffect(() => {
        // Utilisez la fonction utilitaire apiGetter, afin de faire appel à vos endpoints, cf README
        apiGetter('https://jsonplaceholder.typicode.com/users')
            .then(result => setUsers(result))
    }, [])

    // Vérifiez que votre liste soit bien chargée dans votre navigateur
    console.log(users)

    return (
        <Fragment>
            {/* Component Header, qui se trouve dans le dossier 'src/components' */}
            <Header />
            <main className="container">
                {/* Insérez vos routes à l'intérieur du component Switch */}
                <Switch>
                    {/* Component Route, qui encapsule votre page */}
                    <Route exact path={"/"}>
                        {/* Page HomePage, qui se trouve dans le dossier 'src/pages', avec la liste des utilisateurs en props */}
                        <HomePage users={users} />
                    </Route>
                    <Route exact path={"/login"}>
                        {/* Page LoginPage, qui se trouve dans le dossier 'src/pages' */}
                        <LoginPage />
                    </Route>
                    {/* Vous pouvez ajouter un paramètre à votre URL, ici le paramètre id */}
                    <Route exact path={"/users/:id"}>
                        <UserPage users={users} />
                    </Route>
                </Switch>
            </main>
        </Fragment>
    )
}

export default App