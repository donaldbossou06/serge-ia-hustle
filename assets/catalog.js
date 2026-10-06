/* Catalogue Serge IA Hustle : la seule source à mettre à jour.
   Nouveau guide gratuit  -> l'ajouter EN HAUT de "guides".
   Nouveau produit payant -> l'ajouter EN HAUT de "products".
   c = catégorie (1 Démarrer, 2 Économiser, 3 Équiper ton IA, 4 Créer et vendre). */
window.SERGE = {
  cats: {
    1: { n: "Démarrer", col: "#cf5f34" },
    2: { n: "Économiser", col: "#1f9d57" },
    3: { n: "Équiper ton IA", col: "#6d5ae6" },
    4: { n: "Créer et vendre", col: "#d99a00" }
  },
  guides: [
    { s: "agent-skills", k: "Agent Skills", c: 3, t: "Ton IA code comme un dev senior", d: "Le pack gratuit qui fait cadrer, tester et relire ton assistant avant de livrer." },
    { s: "markitdown", k: "MarkItDown", c: 2, t: "Économise tes tokens et ton argent", d: "L'outil gratuit de Microsoft qui transforme tes documents en texte léger que l'IA lit d'un coup." },
    { s: "5-skills", k: "5 skills", c: 3, t: "Une équipe IA complète, gratuite", d: "Cinq packs gratuits qui jouent tes rôles : gestion de projet, documents, design et contenu." },
    { s: "ecc", k: "ECC", c: 3, t: "Sécurise et donne une mémoire à ton IA", d: "Le pack gratuit qui alerte avant le danger et garde ton projet d'une session à l'autre." },
    { s: "superpowers", k: "Superpowers", c: 3, t: "Ton agent IA cadre avant de coder", d: "Le plugin gratuit qui fait cadrer, planifier et tester ton agent de code avant qu'il écrive une ligne." },
    { s: "opendesign", k: "OpenDesign", c: 4, t: "Le studio de design IA gratuit", d: "L'alternative libre à Claude Design : sites, présentations, images et vidéos à ta charte, sur ton ordi." },
    { s: "omniroute", k: "OmniRoute", c: 2, t: "Une passerelle vers 1200+ modèles IA", d: "150+ modèles gratuits derrière un seul point d'accès, avec bascule automatique quand un quota se vide." },
    { s: "produit-digital", k: "Produit digital", c: 4, t: "Transforme ton savoir en produit à vendre", d: "La méthode pour emballer ton savoir en produit digital et le vendre en continu, avec l'IA à chaque étape." },
    { s: "veille-web", k: "Veille web", c: 3, t: "Claude accède à tout internet", d: "Le skill gratuit qui donne à Claude accès au web, même LinkedIn et YouTube, pour ta veille et tes clients." },
    { s: "systeme-claude", k: "Système", c: 3, t: "Un Claude qui s'améliore seul", d: "Les 6 compétences pour transformer Claude en un assistant qui devient meilleur au fil du temps." },
    { s: "creer-site-ia", k: "Créer un site", c: 1, t: "Créer un vrai site avec l'IA", d: "La procédure en 3 étapes pour créer de vrais sites et applications avec l'IA, comme les pros." },
    { s: "mots-magiques", k: "Mots magiques", c: 1, t: "Les mots magiques pour Claude", d: "Les mots qui forcent Claude à utiliser de vrais modèles de décision et à mieux réfléchir pour toi." },
    { s: "auto-continue", k: "Reprise auto", c: 2, t: "Reprendre après ta limite", d: "Claude reprend ton travail tout seul, pile où il s'était arrêté, quand ta limite se recharge." },
    { s: "modifier-site", k: "Pointer", c: 1, t: "Modifier ton site en pointant", d: "Change un élément de ton site en cliquant dessus, sans avoir à le décrire avec des mots." },
    { s: "mode-auto", k: "Mode Auto", c: 1, t: "Le mode Auto, avec tes règles", d: "Laisse Claude bosser seul en gardant le contrôle, avec tes propres règles écrites en français." },
    { s: "design-claude", k: "/design", c: 1, t: "Créer un design avec /design", d: "Transforme une idée ou une capture en vraies maquettes éditables, directement dans Claude Code." },
    { s: "memoire", k: "Mémoire", c: 2, t: "La mémoire infinie de Claude", d: "Donne à Claude une mémoire permanente et gratuite avec NotebookLM. Fini de repartir de zéro." },
    { s: "design", k: "Skills design", c: 3, t: "4 skills design pour Claude", d: "Quatre skills qui donnent à Claude un vrai goût de designer et des yeux pour voir ce qu'il code." },
    { s: "voix", k: "Voix off", c: 4, t: "La voix off IA gratuite", d: "L'IA qui transforme ton texte en voix off réaliste, sans micro ni visage. 600+ voix, 100+ langues." },
    { s: "skills", k: "Skills officiels", c: 3, t: "4 skills officiels pour Claude Code", d: "Quatre skills gratuits qui donnent à Claude Code un vrai design, du code propre et le test de tes apps." },
    { s: "plugin", k: "Plugins", c: 2, t: "4 plugins pour Claude Code", d: "Quatre plugins gratuits qui réduisent ta consommation de tokens et font durer ton abonnement." },
    { s: "api", k: "Clés API", c: 2, t: "Les clés API IA gratuites", d: "Le dépôt qui donne accès gratuitement aux meilleurs modèles, à brancher dans Claude Code." },
    { s: "visuel", k: "Visuel", c: 4, t: "Des visuels de vente de niveau pro", d: "L'intelligence artificielle gratuite pour créer des visuels de vente de niveau pro." },
    { s: "humain", k: "Humain", c: 4, t: "Le prompt HUMAIN", d: "Le prompt qui rend tes textes IA totalement humains, dans ChatGPT ou Claude." }
  ],
  products: [
    { u: "/ebook/", k: "Livre + skills", t: "Lance ton business avec Claude Code", d: "De l'idée à ta première vente en Mobile Money, sans coder. Le livre, 3 skills Claude Code, les prompts, le modèle de page de vente et le plan de 30 jours.", img: "/ebook/img/couverture.webp", cta: "Découvrir le guide" }
  ]
};
