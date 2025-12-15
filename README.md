# RPCPaladiumBE

Un script Discord Rich Presence (RPC) pour Paladium Bedrock, créé par **Joe (l1ter4llyme)**.

Ce projet permet d'afficher une présence riche personnalisée sur votre profil Discord, montrant le statut des serveurs Paladium Bedrock et le nombre de joueurs connectés en temps réel.

## 📋 Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- Un compte Discord

## 🚀 Installation

1. Téléchargez ou clonez ce dépôt sur votre machine.
2. Ouvrez un terminal dans le dossier du projet.
3. Installez les dépendances nécessaires avec la commande suivante :

```bash
npm install
```

## ⚙️ Configuration

Avant de lancer le script, vous devez configurer le fichier `config.json`.

1. Rendez-vous sur le [Discord Developer Portal](https://discord.com/developers/applications).
2. Créez une nouvelle application.
3. Copiez l'**Application ID** (Client ID).
4. Dans l'onglet **Rich Presence** > **Art Assets**, téléversez vos images (pour `largeimage` et `smallimage`).
   > ℹ️ **Note :** Les images à utiliser sont disponibles dans le dossier `image/` de ce projet (`paladium.png` et `bedrock.png`).

Ouvrez le fichier `config.json` et modifiez les valeurs suivantes :

```json
{
  "clientid": "VOTRE_CLIENT_ID",
  "largeimage": "nom_de_votre_grande_image",
  "largetext": "Texte au survol de la grande image",
  "smallimage": "nom_de_votre_petite_image",
  "smalltext": "Texte au survol de la petite image",
  "details": "Texte de détails (ex: play.paladium-bedrock.fr)",
  "button1": "Nom du bouton 1",
  "url1": "URL du bouton 1",
  "button2": "Nom du bouton 2",
  "url2": "URL du bouton 2"
}
```

## ▶️ Utilisation

Pour lancer le RPC, vous avez deux options :

### Option 1 : Via le script de lancement (Windows)
Double-cliquez simplement sur le fichier `launch.bat`.

### Option 2 : Via le terminal
Exécutez la commande suivante dans le dossier du projet :

```bash
node index.js
```

## ✨ Fonctionnalités

- **Mise à jour automatique** : Le statut se met à jour toutes les 60 secondes.
- **Compteur de joueurs** : Affiche le nombre total de joueurs connectés sur les serveurs Paladium Bedrock (Play, Faction, Minage, Farmland).
- **Boutons personnalisés** : Ajoutez des liens vers le Wiki, le site web, ou autre.

## 👤 Auteur

Créé par **Joe (l1ter4llyme)**.
