# Application de Gestion de Stock

## Table des matières
1. [Aperçu du projet](#aperçu-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Utilisation](#utilisation)

---

## Aperçu du projet

Cette application est une solution moderne et intuitive pour la gestion des stocks, conçue pour simplifier la gestion des inventaires pour les magasiniers. Elle permet aux utilisateurs de :
- Gérer rapidement les stocks à l'aide d'un scanner de code-barres ou d'une saisie manuelle.
- Suivre les produits en temps réel, avec la possibilité d'ajouter ou de retirer des quantités.
- Ajouter facilement de nouveaux produits via un formulaire interactif.
- Générer et exporter des rapports au format PDF.

L'objectif est d'optimiser la gestion des stocks tout en réduisant les erreurs humaines.

---

## Fonctionnalités

### 1. **Authentification**
- Les utilisateurs peuvent se connecter en utilisant un code secret personnel.

### 2. **Gestion des produits**
- **Identification des produits** :
   - Scanner de code-barres intégré utilisant `expo-camera`.
   - Saisie manuelle du code-barres en cas de besoin.
- **Vérification automatique dans la base de données** :
   - Produits existants : Ajouter ou retirer des quantités dans un entrepôt.
   - Nouveaux produits : Afficher un formulaire de création avec les champs suivants : nom, type, prix, fournisseur, quantité initiale, et image du produit.

### 3. **Liste des produits**
- Affichage détaillé des produits :
   - Nom, type, prix, quantité disponible, état du stock (ex : "En stock", "Rupture de stock").
- Indicateurs visuels :
   - Rouge pour les produits en rupture de stock.
   - Jaune pour les produits en faible quantité (ex : <10 unités).
- Actions disponibles :
   - Bouton "Réapprovisionner" pour augmenter la quantité.
   - Bouton "Décharger" pour retirer des unités.

### 4. **Fonctionnalités avancées**
- **Filtrage et recherche** :
   - Recherche par nom, type, prix ou fournisseur.
- **Tri dynamique** :
   - Trier les produits par prix (croissant/décroissant), nom (alphabétique) ou quantité.

### 5. **Statistiques et résumé des stocks**
- Tableau de bord affichant :
   - Nombre total de produits.
   - Nombre total de villes.
   - Produits en rupture de stock.
   - Valeur totale des stocks.
   - Produits les plus ajoutés/retirés récemment.

### 6. **Exportation des données**
- Générer et exporter des rapports de produits au format PDF en utilisant `expo-print`.

---

## Technologies utilisées

### Frontend
- **React Native** : Pour construire l'application mobile.
- **Expo** : Pour le développement et le déploiement.
- **Redux Toolkit** : Pour la gestion de l'état.
- **Expo Camera** : Pour la fonctionnalité de scan de code-barres.
- **Expo Print** : Pour générer et exporter des rapports PDF.

### Backend
- **JSON Server** : Une API REST factice pour le développement et les tests.
- **Axios** : Pour effectuer des requêtes HTTP vers le backend.

---

## Installation

### Prérequis
- Node.js (v16 ou supérieur)
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)

### Étapes
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/walid-lhaila/WAREHOUSE-APP.git
   cd WAREHOUSE-APP