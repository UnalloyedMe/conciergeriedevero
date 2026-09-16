# NomConciergerie — squelette de site

Squelette statique multi-pages (HTML / CSS / JS séparés), sans framework, prêt à personnaliser.

## Arborescence

```
conciergerie-site/
├── index.html                     Page d'accueil
├── css/
│   └── style.css                  Styles partagés par toutes les pages
├── js/
│   └── main.js                    Comportements partagés (nav mobile, reveal, configurateur, FAQ, formulaire)
└── pages/
    ├── prestations.html           Détail de toutes les prestations
    ├── comment-ca-marche.html     Détail du déroulé en 4 étapes
    ├── zone-intervention.html     Carte + tableau des communes couvertes
    ├── avis.html                  Tous les témoignages clients
    ├── faq.html                   FAQ complète, classée par thème
    └── contact.html                Formulaire de contact + coordonnées
```

## À personnaliser

- Tous les textes entre crochets `[...]` ou marqués "placeholder".
- Les blocs `.ph` : à remplacer par de vraies images (mêmes dimensions, `border-radius` déjà géré).
- `js/main.js` : le formulaire de contact (`#contactForm`) ne fait qu'une simulation — à connecter à un vrai service d'envoi (backend, Formspree, etc.).
- Le configurateur "durée d'absence" (tarifs `TIERS` dans `main.js`) : à ajuster avec vos vrais tarifs.

## Lancer en local

Aucune dépendance : ouvrez `index.html` dans un navigateur, ou servez le dossier avec un serveur statique, par ex. :

```
python3 -m http.server 8000
```

puis ouvrez `http://localhost:8000`.
