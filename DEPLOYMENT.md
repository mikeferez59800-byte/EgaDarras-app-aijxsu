
# Déploiement EgaDarras 🩷 sur GitHub Pages

## Méthode de déploiement : /docs

Cette application utilise la méthode `/docs` pour le déploiement sur GitHub Pages, qui est la plus simple et ne nécessite aucune configuration de workflow.

## Étapes de déploiement

### 1. Préparer le repository GitHub

1. Créez un nouveau repository sur GitHub (par exemple: `egadarras-app`)
2. Clonez le repository localement ou initialisez Git dans votre projet:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: EgaDarras application"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/egadarras-app.git
   git push -u origin main
   ```

### 2. Build de l'application pour le web

1. Assurez-vous que toutes les dépendances sont installées:
   ```bash
   npm install
   ```

2. Buildez l'application pour le web:
   ```bash
   npm run build:web
   ```

3. Copiez le contenu du dossier de build dans le dossier `/docs`:
   ```bash
   cp -r dist/* docs/
   ```

### 3. Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu latéral, cliquez sur **Pages**
4. Sous **Source**, sélectionnez:
   - **Branch**: `main`
   - **Folder**: `/docs`
5. Cliquez sur **Save** (Enregistrer)

### 4. Accéder à votre application

Après quelques minutes, votre application sera disponible à l'adresse:
```
https://VOTRE-USERNAME.github.io/egadarras-app/
```

## Structure des fichiers dans /docs

Le dossier `/docs` contient tous les fichiers nécessaires pour le déploiement:

- `index.html` - Page principale avec `<base href="./">`
- `manifest.webmanifest` - Configuration PWA
- `service-worker.js` - Service worker pour le mode hors ligne
- `offline.html` - Page affichée hors ligne
- `404.html` - Page pour le routing SPA
- `assets/` - CSS, JS, images, fonts
- `icons/` - Icônes PWA (192×192, 512×512, apple-touch-icon 180×180)

## Fonctionnalités PWA

L'application est configurée comme une Progressive Web App (PWA) avec:

- ✅ Installation sur l'écran d'accueil
- ✅ Fonctionnement hors ligne
- ✅ Icônes pour tous les appareils
- ✅ Thème personnalisé (#FF69B4)
- ✅ Mode standalone

## Mise à jour de l'application

Pour mettre à jour l'application déployée:

1. Faites vos modifications dans le code
2. Rebuilder l'application:
   ```bash
   npm run build:web
   cp -r dist/* docs/
   ```
3. Committez et pushez les changements:
   ```bash
   git add .
   git commit -m "Update application"
   git push
   ```

GitHub Pages se mettra automatiquement à jour en quelques minutes.

## Dépannage

### L'application ne se charge pas
- Vérifiez que tous les chemins dans `index.html` sont relatifs (`./`)
- Assurez-vous que le dossier `/docs` contient tous les fichiers nécessaires
- Vérifiez la console du navigateur pour les erreurs

### Les icônes ne s'affichent pas
- Vérifiez que le dossier `icons/` contient les fichiers PNG requis
- Assurez-vous que les chemins dans `manifest.webmanifest` sont corrects

### Le service worker ne fonctionne pas
- GitHub Pages nécessite HTTPS pour les service workers (automatiquement fourni)
- Vérifiez la console du navigateur pour les erreurs de service worker
- Essayez de vider le cache et recharger la page

## Support

Pour toute question ou problème, consultez la documentation de GitHub Pages:
https://docs.github.com/en/pages

---

**Note**: Cette application est conçue pour être éducative et professionnelle, abordant des sujets importants comme le consentement, l'égalité hommes-femmes et les stéréotypes de genre.
