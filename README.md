# Discord WhoIs - Librairie

*inspiré de [eslachance/discord-user-resolver](https://github.com/eslachance/discord-user-resolver)*

Une librairie, capable d'afficher des informations sur un utilisateur Discord, sans coder quoi que ce soit en JavaScript.

Certaines personnes aiment bien changer leur pseudo, mais changer le code de plusieurs sites chaque semaine peut être... long.

### Exemple

Demo : https://discordwhois-library.johanstick.fr/#exemple

### Utilisation (HTML)

C'est simple, rajouter une ligne dans votre balise `<head>` pour importer la librarie :
```html
<script src="https://cdn.jsdelivr.net/gh/johan-perso/discordwhois-library@latest/index.js"></script>
```

Et sur votre page, utiliser la balise `<discord-whois>` pour afficher des informations :
```html
<discord-whois toShow="avatar,username,display_name" discord-id="277825082334773251"></discord-whois>
```

### Utilisation (JavaScript)

*pensez à importer la librairie dans votre balise \`<head>\`*

### Détecter un élément

Malgré que la librairie devrait automatiquement détecter les balises `<discord-whois>`, vous pouvez utiliser la fonction `showDiscord_fromElement(<element>)`, exemple :
```js
document.body.innerHTML += `<div id="un_element" toShow="username" discord-id="277825082334773251"></div>`
var element = document.getElementById("un_element")

showDiscord_fromElement(element)
```

### Obtenir des informations sur un compte

Vous pouvez obtenir des informations sur un compte Discord, sans l'afficher nul part, en utilisant la fonction `showDiscord(<id du compte>)`, exemple :
```js
var discordAccount = await showDiscord("277825082334773251")
if(!discordAccount.error) console.log(discordAccount.username)
if(discordAccount.error) console.log(discordAccount.message)
```


### Personnalisation

Dans la balise `<discord-whois>`, vous pouvez inclure l'attribut `discord-id` pour spécifier quel utilisateur afficher. L'attribut `toShow` permet de choisir quoi afficher (`avatar`,`username`,`display_name`) : vous pouvez également écrire `*` pour tout afficher, ou ne rien entrer, pour ne rien afficher.

### Classe

Cette librairie n'ajoute aucun CSS, c'est à vous d'ajouter ces différentes classes dans votre style :

* `discord_whois_error` : texte d'erreur, affiché si vous ne spécifier aucun ID dans les attributs de la balise
* `discord_whois_username` : texte affichant le pseudo (commençant par un `@`)
* `discord_whois_displayName` : texte affichant le nom d'utilisateur
* `discord_whois_picture` : image affichant la photo de profil

### API

Pour la récupération d'informations, l'API de [Discord WhoIs](https://discord-whois.johanstick.fr) est utilisé par cette librairie.

## Licence

MIT © [Johan](https://johanstick.fr)
