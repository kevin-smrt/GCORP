# PARAMÉTRER UN SERVEUR POUR FAIRE TOURNER UNE APPLICATION SOUS NODE.JS

## **Choisir un hébergement**
La 1ère étape est de choisir un hébergement avec une solution qui convient à ce que vous allez faire.

Si vous avez besoin de plus ou moins de débit de bande passante, de stockage, etc.

J'ai opté pour une solution chez **OVH** très simple (pack Value). J'ai choisi d'installer Ubuntu sur le serveur pour la simplicité d'utilisation.

## **Se connecter au VPS**
OVH met à disposition une documentation très utile [ici](https://docs.ovh.com/fr/vps/debuter-avec-vps/).

## **Sécuriser son VPS**
Pareil pour la sécurité, OVH possède une documentation sur [ce lien](https://docs.ovh.com/fr/vps/conseils-securisation-vps/) très bien expliqué.

Une des premières choses à faire est de mettre à jour le serveur avec `apt-get update` et ensuite `apt-get upgrade`.

OVH nous recommande de modifier le port d'écoute par défaut du service SSH, qui est **22**, par un nombre compris entre **49152** et **65535**.

Pour faire ça il faut utiliser la commande `nano /etc/ssh/sshd_config`, trouver la ligne où il est marqué que le port d'écoute est **22** et le remplacer par le nombre choisi.

Ensuite redémarrer le service avec `systemctl restart sshd`.

Ne pas oublier de renseigner le nouveau port lors de la connexion ssh avec `username@VPS_address -p newPortNumber`.

Plusieurs autres consignes de sécurité sont données par OVH comme l'installation de `Fail2ban` ou `iptables`, ou encore désactiver l'accès au serveur via l'utilisateur `root`.

## **Installation de Node.js**
Le but de ce serveur est de faire tourner une application sous Node.js, il est donc obligatoire de l'installer.

La doc présente [ici](https://www.digitalocean.com/community/tutorial_collections/how-to-install-node-js) est très bien faite et permet une installation facile.

## **Installer l'application sur le serveur**
Maintenant que tout est paramétrer, il faut mettre l'application sur le serveur. Pour pouvoir la maintenir à jour, il faut s'aider de github, et donc cloner le projet sur notre serveur.

Il faut naturellement ajouter une clé sur notre serveur et l'ajouter à notre profil GitHub.

## **Faire tourner l'application en continue**
La partie la plus importante sûrement. J'ai cherché pas mal pour trouver une solution pratique et simple d'utilisation. À force de recherche, je suis tombé sur `pm2`

La documentation est disponible [ici](https://pm2.keymetrics.io/). C'est un package npm a installer dans votre application.

Je me suis aidé de [cette video](https://www.youtube.com/watch?v=cXaPkD9qCTU) pour faire fonctionner mon application.

## **Terminé**
Et voilà ! Je rajouterai des informations si je trouve d'autres petites choses utiles.