# Gestion de Livraison Microservices

## Description
Ce projet est une application de gestion des livraisons qui permet aux utilisateurs de suivre leurs commandes en temps réel. Il est structuré en plusieurs microservices indépendants qui communiquent via des API REST.

## Microservices inclus
- **Service Client** : Gère les informations et les authentifications des clients.
- **Service Commande** : Gère le processus de commande, de la création à la modification.
- **Service Transporteur** : Gère les informations des transporteurs et leur affectation aux livraisons.
- **Service Notification** : Envoie des notifications par mail ou SMS aux clients et transporteurs.

## Technologies Utilisées
- Node.js pour les microservices
- MongoDB comme base de données
- Docker pour le déploiement
- Kubernetes pour l'orchestration

## Installation
1. Clonez le dépôt.
2. Exécutez `docker-compose up` pour démarrer les services.
3. Accédez à `http://localhost:3000` pour utiliser l'application.

## Aide
Pour toute question, ouvrez une issue dans le dépôt GitHub.
