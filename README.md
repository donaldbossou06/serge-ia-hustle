# Serge IA Hustle — Site ressources

Site statique qui héberge les ressources gratuites envoyées aux personnes qui commentent les mots-clés sous les posts (système ManyChat). Une page d'accueil + une sous-page par ressource.

**En ligne (GitHub Pages) :** https://donaldbossou06.github.io/serge-ia-hustle/

## Structure

```
/                 page d'accueil (liste des ressources)
/humain/          prompt HUMAIN (avec bouton copier)
/visuel/          outil VISUEL (Reve)
/api/             clés API IA gratuites (dépôt GitHub)
/plugin/          4 plugins Claude Code
/assets/style.css charte partagée (couleurs, composants)
/.nojekyll        désactive Jekyll (sert /assets tel quel)
```

## Mots-clés ManyChat → page à envoyer en DM

| Mot-clé | Lien à envoyer |
| --- | --- |
| `HUMAIN` | https://donaldbossou06.github.io/serge-ia-hustle/humain/ |
| `VISUEL` | https://donaldbossou06.github.io/serge-ia-hustle/visuel/ |
| `API` | https://donaldbossou06.github.io/serge-ia-hustle/api/ |
| `PLUGIN` | https://donaldbossou06.github.io/serge-ia-hustle/plugin/ |

## Ajouter une nouvelle ressource (réplicable)

1. Copier un dossier existant, par exemple `visuel/`, vers `nouveau-motcle/`.
2. Modifier dans `nouveau-motcle/index.html` : le `<title>`, le badge, le titre, le texte, le bouton (lien de l'outil) et les étapes.
3. Ajouter une carte dans la page d'accueil `index.html` (bloc `<a class="card" href="nouveau-motcle/">`).
4. `git add . && git commit -m "ajout ressource X" && git push` — GitHub Pages se met à jour tout seul en une minute.
5. Créer le mot-clé correspondant dans ManyChat, avec le lien de la nouvelle page.

## Charte

Fond sombre, accent jaune `#F3E600`, la même identité que les reels. Tout est dans `assets/style.css`, aucune dépendance externe, chargement instantané. Thème clair/sombre automatique selon le téléphone.

## Migration future

Le site peut être basculé plus tard sur un domaine perso (GitHub Pages accepte les domaines personnalisés) ou reconstruit sur Vercel sans rien changer au contenu.
