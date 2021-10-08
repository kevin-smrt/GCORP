# LES ETAPES DE LA CREATION DU SITE WEB

## Établir les besoins avec le client.

J'ai établi avec ma cliente ses besoins qui étaient d'avoir un site web professionnel de photographe. Les pages demandées étaient :
- Une page d'accueil.
- Une page de présentation.
- Une page de contact.
- Une page d'informations concernant ses trois prestations.
- Une page galerie pour chaque prestation (3 au total).

Au fur et à mesure de l'avancement du projet, des modifications se sont faite sur les besoins et contrainte graphique.

---

## Les problématiques.

La partie que j'ai le plus aimé pendant ce projet a été de me confronter à des problèmes et de trouver le moyen de les régler.

### Galerie d'images

Mon premier problème a été d'afficher une 50aine d'images sans que le temps de chargement soit trop long. J'ai pris beaucoup de temps pour me renseigner partout sur le web pour connaître les bonnes pratiques utilisé à ce jour.

J'ai vite compris que la méthode "lazy loading" était la bonne, plusieurs manières de l'integrer s'offrait à moi. À force de recherche, j'ai pu trouver un module `NPM` qui allait me simplifier la vie: `intersection observer`.

<details>
<summary>Partie technique</summary>
Le but est de ne pas charger les images directement quand l'utilisateur arrive sur la page. Ce qui est hors du champ de vision de l'utilisateur n'a pas besoin d'être chargé tant qu'il ne le voit pas. C'est ce que fait <code>intersection observer</code>, il charge les images une fois que l'utilisateur <strong>doit</strong> les voir.
<br>
<br>
Tout se passe en javascript, à la place de l'attribut <code>src</code> de la balise <code>img</code>, il faut la remplacer par <code>data-src</code> ce qui va créer un dataset avec la variable <code>src</code> à l'intérieur. Il suffit de récupérer cette variable dans le back et ajouter l'attribut <code>src</code> avec le chemin de l'attribut <code>data-src</code> lorsque l'image apparaît dans le champ de vision de l'utilisateur.
</details>
<br>

### Ajout d'un reCAPTCHA

Je me suis vite rendu compte que des bots (robots) prenaient pour cible ma page contact pour envoyer des emails frauduleux. Comme chaque problème a sa solution, je suis allé écumer le Web à la recherche de quelque chose qui pourrait résoudre ma problématique.

Très souvent, le reCAPTCHA (case à cocher *je ne suis pas un robot*) de Google revenait, c'est ainsi que j'ai mené ma plus grande bataille : **faire fonctionner une API sans documentation de l'éditeur**.

Après beaucoup (**beaucoup**) d'essais, j'ai pu intégrer la fonctionnalité, non sans fierté. Nous avons opté avec ma cliente, d'intégrer un reCAPTCHA invisible (pas de case à cocher) qui fonctionne en arrière-plan, pour éviter de perturber l'utilisateur.

<details>
<summary>Partie technique</summary>
Je vais faire une vidéo tutoriel pour expliquer comment j'ai procédé, et je viendrais mettre le lien dans cette rubrique.
</details>
<br>

### Mettre le site en ligne

Vers la fin du projet, je me suis posé la question suivante :
> Comment mon serveur peut être actif 24h/24 si je dois manuellement le démarrer à chaque fois ?

Une fois n'est pas coutume, je suis allé me renseigner sur la toile. J'ai très vite trouvé la solution, je devais utiliser un serveur qui ne s'éteint jamais. Les serveurs virtuels (VPS) ont été créés pour ça, mais il restait un problème, je n'ai jamais touché à un serveur de près ou de loin.

Un problème ? **Une chance !** J'ai pu découvrir toute une partie du métier de développeur que je ne connaissais pas, l'administration système (AdminSys). Après avoir acheté un serveur, j'ai appris à le configurer et à le sécuriser en suivant les recommandations de mon hébergeur. J'ai beaucoup aimé cette partie qui m'a mis en difficulté, mais qui ensuite m'a permis de mieux comprendre comment fonctionner les serveurs dans leurs globalités.

Mon serveur virtuel est hébergé par **OVH**, je vais créer un guide qui explique comment je l'ai configurer et je viendrai mettre le lien ici pour les personnes qui en ont besoin.

---

## Ensuite ?

Le site n'est pas parfait, je continue de l'améliorer à chaque fois que je remarque quelque chose qui ne va pas et je ne manquerai pas de venir marquer ici les prochaines étapes qui me poseront problème !