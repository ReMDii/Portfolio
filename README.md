# Portfolio — BUT Informatique, parcours AGED

Portfolio de compétences pour la soutenance de stage / d'alternance (S4 et S6),
en HTML + Tailwind CSS (compilé en CLI, pas de CDN), pensé pour être hébergé sur GitHub Pages.

## Structure

```
.
├── index.html                 Accueil (hero + aperçu des 6 compétences)
├── a-propos.html              Présentation personnelle, PPP
├── projets.html                SAÉ / projets tutorés / projets perso
├── contact.html
├── competences/
│   ├── developper.html         C1 — Réaliser un développement d'application
│   ├── optimiser.html          C2 — Optimiser des applications informatiques
│   ├── administrer.html        C3 — Administrer des systèmes informatiques communicants complexes
│   ├── gerer-donnees.html      C4 — Gérer des données de l'information
│   ├── conduire-projet.html    C5 — Conduire un projet
│   └── travailler-equipe.html  C6 — Travailler dans une équipe informatique
├── stages/
│   ├── s4.html                 Fiche mission de stage S4
│   └── s6.html                 Fiche mission de stage/alternance S6
├── assets/                     Images, cv.pdf, captures d'écran, schémas...
├── src/input.css               Source Tailwind (@tailwind base/components/utilities)
├── css/style.css               CSS compilé — c'est CE fichier qui est chargé par les pages HTML
└── tailwind.config.js          Couleurs, polices personnalisées
```

## Installation

Il faut Node.js installé (vérifie avec `node -v`).

```bash
npm install
```

## Développement

Lance le compilateur Tailwind en mode watch : il recompile `css/style.css`
à chaque fois que tu modifies une classe dans un fichier `.html` ou dans `src/input.css`.

```bash
npm run dev
```

Ouvre ensuite `index.html` dans le navigateur (ou utilise l'extension VS Code
**Live Server** pour avoir le rechargement automatique de la page).

## Build final avant de publier

```bash
npm run build
```

Ça régénère `css/style.css` en version minifiée. **Pense à le committer** :
GitHub Pages sert des fichiers statiques, il n'exécute pas Tailwind — le CSS
compilé doit donc être dans le dépôt.

## Ajouter une nouvelle page compétence

Il n'y a pas de système d'inclusion en HTML pur, donc la sidebar est dupliquée
dans chaque page. Le plus simple pour ajouter/modifier une page :

1. Duplique `competences/administrer.html` (c'est le gabarit le plus complet).
2. Change le `<title>`, le code de compétence (`tag-mono`), le titre `<h1>`,
   la citation officielle du référentiel, les apprentissages critiques.
3. Dans la sidebar, retire `is-active text-accent` du lien C3 et ajoute-les
   au lien de ta nouvelle page.
4. Remplis les sections "Mission S4" / "Mission S6" / "Montée en compétence"
   avec tes propres contenus et captures d'écran (dans `assets/`).

## Déploiement sur GitHub Pages

1. Pousse le dépôt sur GitHub.
2. Dans **Settings → Pages**, choisis la branche `main` et le dossier `/root`.
3. Le site sera disponible à `https://<ton-pseudo>.github.io/<nom-du-repo>/`.

## Rappel — contenu à ne pas oublier

- Remplacer "Prénom Nom" partout (recherche globale dans VS Code : `Ctrl+Shift+F`).
- Remplacer les liens LinkedIn/GitHub/email dans `contact.html` et la sidebar.
- Ajouter ton vrai CV dans `assets/cv.pdf`.
- Vérifier les intitulés exacts des apprentissages critiques dans TON référentiel
  de formation local (adaptation à 30% possible selon l'IUT).
