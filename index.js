/*
v2.0.0
https://github.com/johan-perso/discordwhois-library
*/

// Au chargement de la page
window.onload = () => {
	// Vérifier pour tout les élements déjà présent
	document.querySelectorAll("discord-whois").forEach(discord_whois => showDiscord_fromElement(discord_whois));

	// Détecter les nouveaux élements sur la page
	const observer = new MutationObserver(mutations_list => {
		mutations_list.forEach(mutation => {
			mutation.addedNodes.forEach(added_node => {
				if(added_node.tagName && added_node.tagName.toLowerCase() === "discord-whois") showDiscord_fromElement(added_node);
			});
		});
	});
	observer.observe(document.body, { subtree: true, childList: true });
}

// Afficher les infos sur un utilisateur Discord à partir d'un élement
async function showDiscord_fromElement(element){
	// Obtenir l'ID
	var discord_id = element.getAttribute("discord-id");

	// Ne pas continuer si l'utilisateur a déjà été vérifié
	if(element.getAttribute("finishedLoading") === "true") return;

	// Si il n'y a pas d'identifiant
	if(!discord_id) return element.innerHTML = '<span class="discord_whois_error">Erreur : Aucun identifiant Discord spécifié</span>'

	// Sinon, faire une requête à l'API de Discord WhoIs pour obtenir les infos
	var discordInfo = await fetch(`https://discord-whois.johanstickman.com/api/getDiscord?discordId=${discord_id}`).then(res => res.json())

	// Si aucune information sur la personne n'a été trouvée
	if(!discordInfo?.advancedInfo?.id) return element.innerHTML = '<span class="discord_whois_error">Erreur : Aucun compte trouvé</span>'

	// Ajouter des informations dans les attributs de l'élément
	element.setAttribute("discord-avatar", discordInfo.advancedInfo.avatar);
	element.setAttribute("discord-avatar_url", discordInfo.advancedInfo.avatar_url);
	element.setAttribute("discord-banner", discordInfo.advancedInfo.banner);
	element.setAttribute("discord-bot", discordInfo.advancedInfo.bot);
	element.setAttribute("discord-created_at", discordInfo.advancedInfo.created_at);
	element.setAttribute("discord-discriminator", discordInfo.advancedInfo.discriminator);
	element.setAttribute("discord-username", discordInfo.advancedInfo.username);

	// Obtenir les éléments à afficher sous forme d'array
	var toShow = element?.getAttribute("toShow")?.split(",");

	// Si la liste des attributs contient "*", la remplacer par... tout
	if(toShow?.includes("*")){
		toShow = ['avatar','discriminator','username']
		element.setAttribute("toShow", toShow);
	}

	// Sinon, afficher des informations
		// Préparer l'élement
		var elementHTML = `%AVATAR%%USERNAME%%DISCRIMINATOR%`

		// Le modifier en fonction des choses à afficher
		if(toShow?.includes("username")) elementHTML = elementHTML.replace(/%USERNAME%/g, `<span class="discord_whois_username">${discordInfo?.advancedInfo?.username?.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`)
		if(toShow?.includes("discriminator")) elementHTML = elementHTML.replace(/%DISCRIMINATOR%/g, `<span class="discord_whois_discriminator">#${discordInfo?.advancedInfo?.discriminator?.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`)
		if(toShow?.includes("avatar")) elementHTML = elementHTML.replace(/%AVATAR%/g, `<img class="discord_whois_picture" src="${discordInfo?.advancedInfo.avatar_url}">`)

		// Enlever tout ce qui est inutile
		elementHTML = elementHTML.replace(/%AVATAR%/g, "").replace(/%USERNAME%/g, "").replace(/%DISCRIMINATOR%/g, "")

		// Modifier l'élement par le code HTML préparé
		element.innerHTML = elementHTML

		// Ajouter un attribut
		element.setAttribute("finishedLoading", true);
}

// Afficher les infos sur un utilisateur Discord à partir de son ID
async function showDiscord_fromId(discord_id){
	// Si il n'y a pas d'identifiant
	if(!discord_id) return { error: true, message: "Aucun identifiant n'a été donné" }

	// Sinon, faire une requête à l'API de Discord WhoIs pour obtenir les infos
	var discordInfo = await fetch(`https://discord-whois.johanstickman.com/api/getDiscord?discordId=${discord_id}`).then(res => res.json())

	// Si aucune information sur la personne n'a été trouvée
	if(!discordInfo?.advancedInfo?.id) return { error: true, message: "Aucun compte trouvé avec cet ID" }

	// Retourner les informations sur le profil
	return { error: false, account: discordInfo.advancedInfo }
}
