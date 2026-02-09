# aekoray.github.io
Portfolio personnel de Koray (@aekoray) : Cybersécurité, Administration Système, CAO &amp; Photographie.

# 🛠️ Bento Portfolio Stack — @aekoray

Dépôt source du portfolio personnel de Koray. Ce projet implémente un design "Bento Box" moderne, optimisé pour la lecture de données hétérogènes (CV, Portfolio, Liens).

## 🏗️ Stack Technique
* **Frontend :** HTML5 sémantique, CSS3 (Custom Properties & Grid Layout).
* **Interactivité :** JavaScript Vanilla (DOM manipulation).
* **Icons :** Lucide Icons (UMD via CDN).
* **Typography :** Google Fonts (Inter).

## 📂 Architecture du Projet
* `index.html` : Structure sémantique organisée en colonnes `left-column` et `right-column`.
* `style.css` : Gestion du layout via **CSS Grid**, animations d'entrée (`fadeIn`), et effets de flou (`backdrop-filter`).
* `scripts.js` : Moteur d'animation du `document.title` et initialisation des icônes.

## ⚙️ Fonctionnalités Techniques
* **Dynamic Title Animation :** Script personnalisé simulant une saisie clavier/effacement dans l'onglet du navigateur.
* **Bento Grid Responsive :** Passage d'un layout 1 colonne (mobile) à 2 colonnes (desktop > 850px) via Media Queries.
* **Glassmorphism :** Utilisation de couches `rgba` et de `blur(20px)` pour l'effet de transparence des cartes.
* **Background Animation :** Gradient animé à 400% via `@keyframes backgroundFlow`.

## 🚀 Déploiement
Le projet est configuré pour un déploiement continu via **GitHub Pages**.
1. Push sur la branche `main`.
2. Activation de GitHub Pages dans les settings du repo.
3. Le site est accessible sur : `https://aekoray.github.io/`

---
**Note :** Toutes les ressources (images, modèles SolidWorks) sont optimisées pour le Web.
