# ApiRestLibrary

REST (Representational State Transfer) est une architecture standard pour construire et communiquer avec des services web.

Dans cette semaine, vous allez apprendre les bases de créations d'une API REST avec Express.

Le projet consiste à mettre en place une API pour une librairie, l'application dois permettre:

- de voir la liste des livres stockés sur la base données;

- d'ajouter un livre;

- de modifier un livre;

- de supprimer un livre;

- de passer une commande de livre;

- de valider une commande;

- d'afficher la liste des livres en fin de Stock(s'il reste 3 ou moins)

Pour chaque livre, vous devez enregistrer les informations suivantes:

- L'Auteur

- La Description

- La Catégorie(Science, Éducation, Religion, Tech etc..)

- La Date de sortie

- la maison d'édition

- Quantité en Stock

Note:

- à chaque fois qu'une commande est validée, nous devons diminuer la quantité en Stock;

- on peut pas vendre un livre qui est en rupture de stock

- Testez votre APi avec Postman

- pour la base de données vous êtes libres de choix
