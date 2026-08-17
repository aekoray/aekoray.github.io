# ⚡ aekoray.github.io — Bento Portfolio

Portfolio personnel de **Koray** ([@aekoray](https://github.com/aekoray)) : Cybersécurité, Systèmes & Réseaux, CAO & Création.

Ce projet implémente un design **Bento Box Glassmorphism 2.0** moderne, sobre et immersif, optimisé pour la présentation structurée de projets, compétences, parcours et liens sociaux.

---

## 🏗️ Stack Technique

* **Structure & Sémantique :** HTML5 sémantique, balisage accessible (ARIA) et métadonnées SEO complètes.
* **Styles & Animations :** CSS3 Vanilla (Custom Properties, CSS Grid, Glassmorphism 2.0 `backdrop-filter`, orbes luminescents animés).
* **Interactivité :** JavaScript Vanilla (DOM natif, gestion du clavier, visionneuse d'images).
* **Icônes :** Logos SVG vectoriels intégrés (Instagram, TikTok, YouTube, GitHub, Email) & Lucide Icons (CDN).
* **Typographies :** [Google Fonts](https://fonts.google.com/) (*Plus Jakarta Sans* pour le texte & *JetBrains Mono* pour les badges et détails techniques).

---

## 📂 Architecture du Projet

```text
├── index.html       # Structure sémantique (Header, Bento Grid, CV, Galerie, Modale)
├── style.css        # Système de design Glassmorphism, typographie, thèmes et responsive
├── scripts.js       # Titre dynamique de l'onglet, initialisation Lucide, Lightbox clavier
├── profile.png      # Photo de profil
├── karambit.png     # Modèle 3D SolidWorks (CAO)
├── batiment.png     # Cliché photographique
├── dessin.png       # Illustration graphique
└── README.md        # Documentation du projet
```

---

## ⚙️ Fonctionnalités Principales

* **Bento Grid Responsive :** Disposition adaptative en 1 colonne sur mobile/tablette et en 2 colonnes asymétriques sur desktop (> 880px).
* **Glassmorphism 2.0 :** Effet de verre dépoli haute définition avec `backdrop-filter: blur(24px) saturate(180%)`, bordures sub-pixel lumineuses et micro-relief au survol.
* **Arrière-plan Cosmique Animé :** Orbes de lumière diffuses (`.ambient-glow`) avec dégradés indigo, pourpre et cyan en pulsation douce.
* **Galerie & Lightbox Accessible :** Zoom plein écran sur les créations visuelles avec légendes, navigation et fermeture au clavier (`Échap` / `Entrée`).
* **Animation Dynamique de Titre :** Simulation de frappe et d'effacement en temps réel dans l'onglet du navigateur (`@aekoray`).
* **Optimisation SEO & OpSec :** Balises OpenGraph, Twitter Cards, balisage Schema.org (`Person`) et respect de la confidentialité.

---

## 🚀 Déploiement

Le site est hébergé et déployé automatiquement via **GitHub Pages** :

1. Push sur la branche `main`.
2. Activation de GitHub Pages dans les réglages du dépôt (*Settings > Pages*).
3. Le portfolio est accessible directement sur : **[https://aekoray.github.io/](https://aekoray.github.io/)**

---

© 2026 Koray (@aekoray) — Code sous licence MIT.
