Cette Application permet de visualiser une liste d'appartements, qui comprennent chacun :

- une image
- un nom
- une adresse
- un prix
- une description

Via l'onglet "Ajouter un appartement", en pressant le bouton "+", il est possible d'ajouter un nouvel appartement à la liste via l'apparition d'un formulaire.

Il est également possible de modifier les informations d'un appartement en pressant le bouton "Modifier", il suffira de compléter les informations du formulaire.

Enfin, il est possible de supprimer un appartement de la liste en pressant le bouton "Supprimer".

Cette application ne fait pas appel à une base de données et n'utilise pas le localstorage du navigateur, toutes les changements effectués sur la page disparaissent à l'actualisation de la page.

Voici les instructions pour lancer l'application en local :

git clone https://github.com/timonicolaux/chez-nestor.git
git checkout dev
git pull
npm i
npm start
