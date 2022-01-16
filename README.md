# Discord WhoIs - Librairie

*inspiré de [eslachance/discord-user-resolver](https://github.com/eslachance/discord-user-resolver)*

Une librairie, capable d'afficher des informations sur un utilisateur Discord, sans coder quoi que ce soit en JavaScript.

Certaines personnes aiment bien changer leur pseudo, mais changer le code de plusieurs sites chaque semaine peut être... long.

### Exemple

Demo : https://discordwhois-library.johanstickman.com

### Utilisation

C'est simple, rajouter une ligne dans votre balise `<head>` pour importer la librarie :
```html
<script src="https://cdn.jsdelivr.net/gh/johan-perso/discordwhois-library/index.js"></script>
```

Et sur votre page, utiliser la balise `<discord-whois>` pour afficher des informations :
```html
<discord-whois toShow="avatar,username,discriminator" discord-id="277825082334773251"></discord-whois>
```

### Personnalisation

Dans la balise `<discord-whois>`, vous pouvez inclure l'attribut `discord-id` pour spécifier quel utilisateur afficher. L'attribut `toShow` permet de choisir quoi afficher (`avatar`,`username`,`discriminator`) : vous pouvez également écrire `*` pour tout afficher, ou ne rien entrer, pour ne rien afficher.

### Classe

Cette librairie n'ajoute aucun CSS, à vous d'ajouter ces différentes classes dans votre style :

* `discord_whois_error` : texte d'erreur, affiché si vous ne spécifier aucun ID dans les attributs de la balise
* `discord_whois_username` : texte affichant le pseudo
* `discord_whois_discriminator` : texte affichant le tag
* `discord_whois_picture` : image affichant la photo de profil

### API

Pour la récupération d'informations, l'API de [Discord WhoIs](https://discord-whois.johanstickman.com) est utilisé par cette librairie.

## Licence

MIT © [Johan](https://johanstickman.com)
