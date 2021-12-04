# pwa-ecrans-connectes

Accédez à votre emploi du temps, vos alertes, informations du département depuis votre téléphone (ou ordinateur!).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thomas-cardon/pwa-ecrans-connectes)


## Avantages
- Disponible en anglais comme en français
- Dispose d’un mode hors-ligne
- Supporte le thème sombre
- Progressive Web App, donc les ressources ne sont téléchargées qu’une fois, et se mettent a jour seulement si nécessaire
- Utilise React, donc transposable facilement en application native
- Conçu de manière à ce que vous puissiez facilement comprendre le code  (avoir des bases de React/Next.js reste recommandé)

## Comment ça fonctionne ?
Cette application est juste un “affichage”, elle permet de communiquer avec l’instance WordPress et de restituer ces informations de manière simple et efficace.

## Installation
Vous pouvez, soit:
- Déployer facilement une instance en utilisant Vercel, via le lien ci dessous (vous pouvez même fork ce projet et déployer une instance de votre fork si vous le souhaitez!)
- Installer l’application en utilisant le gestionnaire de paquets npm ou yarn.

### En cas d’installation manuelle:
Vous aurez besoin d’installer la dernière version de Node.js. Vous n’aurez ensuite qu’à initialiser le projet, en utilisant la commande npm install ou yarn install dans le répertoire du projet.


## Configurer l’application
Certaines variables d’environnement sont exposées afin de vous permettre de personnaliser certains aspects de l’app.

- ecransConnectesAddress: l’adresse web ou IP de l’instance WordPress chargée de télécharger les emplois du temps et fournir les informations
- brand: un lien vers une image pour remplacer le logo IUT
