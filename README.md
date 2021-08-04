# Starter Pack Documentation

Ce starter pack va vous aider à la mise en place de votre projet.  
Téléchargez ce projet depuis Github, et exécuter la commande _npm install_ à l'intérieur du dossier racine afin d'installer les dépendances.

## Sommaire

* components
* routes
* links
* useState
* useEffect
* helpers

## Components

Les composants sont le coeur même de React.  
Afin d'être le plus modulaire, vous pouvez découper votre code en plusieurs parties.  
Ces même parties peuvent êtres réutilisées plus tard, et modifiables à volonté grâce aux _Props_.  
La convention veut que ces composants soient rangés dans le dossier **src/components** du projet.  
Vous y trouverez l'exemple de composent _Header_.

## Routes

Afin d'accéder à vos différentes pages, utiliser le component **Route**, de react-router-dom.  
Ces même routes devront se trouver à l'intérieur du component **Switch**.  
Voir le fichier _App.js_ pour quelques exemples.

## Links

Nous utilisons une SPA (single page application), et nous ne voulons pas recharger notre page.
Ainsi, pour la navigation, nous utilisons le component **Link** de react-router-dom.  
Ce component agit de la même anière qu'une balise hypertext, à l'exception qu'il ne rafraichit pas notre application.

## useState

React fonctionne avec un système d'état (state), voir vos cours pour plus d'informations.  
Afin de modifier notre state, nous utilisons le hook useState().  
Ce hook prend 3 paramètres:
1. le nom de votre variable
2. la fonction pour modifier cette variable
3. la valeur initiale de la variable
```javascript
const [users, setUsers] = useState([])
```
La variable se nomme _users_, la fonction est _setUsers_, et la valeur de base est un tableau vide.

## useEffect

Lorsque que l'on souhaite accéder à des données lors du chargement de notre component, nous utilisons le hook useEffect().  
useEffect() prend 2 paramètres:  
1. une fonction callback
2. une liste de dépendances sous forme de tableau.
```javascript
useEffect(() => {
    {/* Utilisez la fonction utilitaire apiGetter, afin de faire appel à vos endpoints, cf README */}
    apiGetter('https://jsonplaceholder.typicode.com/users')
        .then(result => setUsers(result))
}, [])
```
Ici nous appelons la fonction apiGetter lors du chargement de notre component.
La liste de dépendance reste vide ([]), ce qui signifie que cette fonction ne s'exécute qu'une seule fois.

## Helpers

Je vous ai créé la fonction **apiGetter**, qui appele pour vous une api externe.  
Je vous invite à l'utiliser et à l'analyser pour voir comment elle fonctionne.  
Attention: cette fonction n'est définie que pour une méthode de type 'GET'.