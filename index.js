/*
v3.0.0
https://github.com/johan-perso/discordwhois-library
*/

// Créer un élément HTML pour afficher les informations sur un utilisateur Discord
class DiscordWhois extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		showDiscord_fromElement(this);
	}
}

// Afficher les infos sur un utilisateur Discord à partir d'un élement
async function showDiscord_fromElement(element){
	// Obtenir l'ID
	let discord_id = element.getAttribute("discord-id");

	// Ne pas continuer si l'utilisateur a déjà été vérifié
	if(element.getAttribute("finishedLoading") === "true") return;

	// Si il n'y a pas d'identifiant
	if(!discord_id) return element.innerHTML = '<span class="discord_whois_error">Erreur : Aucun identifiant Discord spécifié</span>'

	// Sinon, faire une requête à l'API de Discord WhoIs pour obtenir les infos
	let discordInfo = await fetch(`https://discord-whois.vercel.app/api/getDiscord?discordId=${discord_id}`).then(res => res.json())

	// Si aucune information sur la personne n'a été trouvée
	if(!discordInfo?.advancedInfo?.id) return element.innerHTML = '<span class="discord_whois_error">Erreur : Aucun compte trouvé</span>'

	// Ajouter des informations dans les attributs de l'élément
	element.setAttribute("discord-avatar", discordInfo.advancedInfo.avatar);
	element.setAttribute("discord-avatar_url", discordInfo.advancedInfo.avatar_url);
	element.setAttribute("discord-banner", discordInfo.advancedInfo.banner);
	element.setAttribute("discord-bot", discordInfo.advancedInfo.bot);
	element.setAttribute("discord-created_at", discordInfo.advancedInfo.created_at);
	element.setAttribute("discord-username", discordInfo.advancedInfo.username);
	element.setAttribute("discord-display_name", discordInfo.advancedInfo.display_name);

	// Obtenir les éléments à afficher sous forme d'array
	let toShow = element?.getAttribute("toShow")?.split(",");

	// Si la liste des attributs contient "*", la remplacer par... tout
	if(toShow?.includes("*")){
		toShow = ['avatar','username','display_name']
		element.setAttribute("toShow", toShow);
	}

	// Sinon, afficher des informations
	element.innerHTML = `
		${toShow?.includes("username") ? `<span class="discord_whois_username">@${discordInfo?.advancedInfo?.username?.replace(/</g, "&lt;").replace(/>/g, "&gt;")}${discordInfo?.advancedInfo?.discriminator != '0' ? '#' + discordInfo?.advancedInfo?.discriminator : ''}</span>`:``}
		${toShow?.includes("display_name") ? `<span class="discord_whois_displayName">${discordInfo?.advancedInfo?.display_name?.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`:``}
		${toShow?.includes("avatar") ? `<img class="discord_whois_picture" src="${discordInfo?.advancedInfo?.avatar_url}">`:``}
	`

	// Ajouter un attribut
	element.setAttribute("finishedLoading", true);
}

// Afficher les infos sur un utilisateur Discord à partir de son ID
async function showDiscord_fromId(discord_id){
	// Si il n'y a pas d'identifiant
	if(!discord_id) return { error: true, message: "Aucun identifiant n'a été donné" }

	// Sinon, faire une requête à l'API de Discord WhoIs pour obtenir les infos
	var discordInfo = await fetch(`https://discord-whois.vercel.app/api/getDiscord?discordId=${discord_id}`).then(res => res.json())

	// Si aucune information sur la personne n'a été trouvée
	if(!discordInfo?.advancedInfo?.id) return { error: true, message: "Aucun compte trouvé avec cet ID" }

	// Retourner les informations sur le profil
	return { error: false, account: discordInfo.advancedInfo }
}

// Définir l'élément HTML
customElements.define('discord-whois', DiscordWhois);