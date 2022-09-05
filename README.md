<!DOCTYPE html>
<html style="background-color: #0d1117;">
<head>
	<!-- Quelques trucs -->
	<title>Discord WhoIs - Librarie</title>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" >
	<script src="https://cdn.jsdelivr.net/gh/johan-perso/discordwhois-library/index.js"></script>

	<!-- Meta tag pour les réseaux -->
	<meta property="og:title" content="Discord WhoIs - Librarie">
	<meta property="og:description" content="Une librairie pour afficher des informations sur un compte Discord, dans son site.">

	<!-- CSS -->
	<link href="https://firebasestorage.googleapis.com/v0/b/storage-bf183.appspot.com/o/otherContent%2Fgh-markdown.css?alt=media" rel="stylesheet">
	<style>
		body {
			box-sizing: border-box;
			min-width: 200px;
			max-width: 980px;
			margin: 0 auto;
			padding: 45px;
		}
		::-webkit-scrollbar {
			width: 8px;
			height: 8px;
			cursor: pointer;
		}
		::-webkit-scrollbar-thumb {
			cursor: pointer;
			background-color: #30353a;
		}
	</style>
</head>
<body>
	<article class="markdown-body">
		<h1><a id="discord-whois---librairie" class="anchor" href="#discord-whois---librairie" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Discord WhoIs - Librairie</h1><p><em>inspiré de <a href="https://github.com/eslachance/discord-user-resolver">eslachance/discord-user-resolver</a></em></p>
		<p>Une librairie, capable d'afficher des informations sur un utilisateur Discord, depuis votre HTML.</p>
		<p>Certaines personnes aiment bien changer leur pseudo, mais changer le code de plusieurs sites chaque semaine peut être... long.</p>
		<h3>
		<a id="exemple" class="anchor" href="#exemple" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Exemple</h3>
		<p>Cette librarie a été faite par : <strong><discord-whois toShow="username,discriminator" discord-id="277825082334773251"></discord-whois></strong></p>
		<div class="highlight highlight-text-html-basic"><pre><span class="pl-kos">&lt;</span><span class="pl-ent">p</span><span class="pl-kos">&gt;</span>Cette librarie a été faite par : <span class="pl-kos">&lt;</span><span class="pl-ent">discord-whois</span> <span class="pl-c1">toShow</span>="<span class="pl-s">username,discriminator</span>" <span class="pl-c1">discord-id</span>="<span class="pl-s">277825082334773251</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">discord-whois</span><span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">p</span><span class="pl-kos">&gt;</span></pre></div>
		<h3>
		<a id="utilisation-html" class="anchor" href="#utilisation-html" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Utilisation (HTML)</h3>
		<p>C'est simple, rajouter une ligne dans votre balise <code>&lt;head&gt;</code> pour importer la librarie :</p>
		<div class="highlight highlight-text-html-basic"><pre><span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">src</span>="<span class="pl-s">https://cdn.jsdelivr.net/gh/johan-perso/discordwhois-library/index.js</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></pre></div>
		<p>Et sur votre page, utiliser la balise <code>&lt;discord-whois&gt;</code> pour afficher des informations :</p>
		<div class="highlight highlight-text-html-basic"><pre><span class="pl-kos">&lt;</span><span class="pl-ent">discord-whois</span> <span class="pl-c1">toShow</span>="<span class="pl-s">avatar,username,discriminator</span>" <span class="pl-c1">discord-id</span>="<span class="pl-s">277825082334773251</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">discord-whois</span><span class="pl-kos">&gt;</span></pre></div>
		<h3>
		<a id="utilisation-javascript" class="anchor" href="#utilisation-javascript" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Utilisation (JavaScript)</h3>
		<p><em>pensez à importer la librairie dans votre balise <code>&lt;head&gt;</code></em></p>
		<h3>
		<a id="détecter-un-élément" class="anchor" href="#d%C3%A9tecter-un-%C3%A9l%C3%A9ment" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Détecter un élément</h3>
		<p>Malgré que la librairie devrait automatiquement détecter les balises <code>discord-whois</code>, vous pouvez utiliser la fonction <code>showDiscord_fromElement(&lt;element&gt;)</code>, exemple :</p>
		<div class="highlight highlight-source-js"><pre><span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-c1">body</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">+=</span> <span class="pl-s">`&lt;div id="un_element" toShow="username" discord-id="277825082334773251"&gt;&lt;/div&gt;`</span><br><span class="pl-k">var</span> <span class="pl-s1">element</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"un_element"</span><span class="pl-kos">)</span><br><span class="pl-en">showDiscord_fromElement</span><span class="pl-kos">(</span><span class="pl-s1">element</span><span class="pl-kos">)</span></pre></div> 
		<h3>
		<a id="obtenir-des-informations-sur-un-compte" class="anchor" href="#obtenir-des-informations-sur-un-compte" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Obtenir des informations sur un compte</h3>
		<p>Vous pouvez obtenir des informations sur un compte Discord, sans l'afficher nul part, en utilisant la fonction <code>showDiscord(&lt;id du compte&gt;)</code>, exemple :</p>
		<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> <span class="pl-s1">discordAccount</span> <span class="pl-c1">=</span> <span class="pl-k">await</span> <span class="pl-en">showDiscord</span><span class="pl-kos">(</span><span class="pl-s">"277825082334773251"</span><span class="pl-kos">)</span><br><span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">discordAccount</span><span class="pl-kos">.</span><span class="pl-c1">error</span><span class="pl-kos">)</span> <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">discordAccount</span><span class="pl-kos">.</span><span class="pl-c1">username</span><span class="pl-kos">)</span><br><span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">discordAccount</span><span class="pl-kos">.</span><span class="pl-c1">error</span><span class="pl-kos">)</span> <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">discordAccount</span><span class="pl-kos">.</span><span class="pl-c1">message</span><span class="pl-kos">)</span></pre></div>        
		<h3>
		<a id="personnalisation" class="anchor" href="#personnalisation" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Personnalisation</h3>
		<p>Dans la balise <code>&lt;discord-whois&gt;</code>, vous pouvez inclure l'attribut <code>discord-id</code> pour spécifier quel utilisateur afficher. L'attribut <code>toShow</code> permet de choisir quoi afficher (<code>avatar</code>,<code>username</code>,<code>discriminator</code>) : vous pouvez également écrire <code>*</code> pour tout afficher, ou ne rien entrer, pour ne rien afficher.</p>
		<h3>
		<a id="classe" class="anchor" href="#classe" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Classe</h3>  
		<p>Cette librairie n'ajoute aucun CSS, à vous d'ajouter ces différentes classes dans votre style :</p>
		<ul>
		<li>
		<code>discord_whois_error</code> : texte d'erreur, affiché si vous ne spécifier aucun ID dans les attributs de la balise</li>
		<li>
		<code>discord_whois_username</code> : texte affichant le pseudo</li>
		<li>
		<code>discord_whois_discriminator</code> : texte affichant le tag</li>
		<li>
		<code>discord_whois_picture</code> : image affichant la photo de profil</li>
		</ul>
		<h3>
		<a id="api" class="anchor" href="#api" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API</h3>
		<p>Pour la récupération d'informations, l'API de <a href="https://discord-whois.johanstick.me" rel="nofollow">Discord WhoIs</a> est utilisé par cette librairie.</p>
		<h2>
		<a id="licence" class="anchor" href="#licence" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Licence</h2>
		<p>MIT © <a href="https://johanstick.me" rel="nofollow">Johan</a></p>
	</article>
</body>
</html>
