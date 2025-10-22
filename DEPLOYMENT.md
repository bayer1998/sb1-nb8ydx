# Guide de Déploiement - BEDOUX LyfPay PWA

Ce projet peut être déployé sur plusieurs plateformes gratuites. Voici les options disponibles :

## 🚀 Option 1 : Vercel (Recommandé)

**Avantages :** Déploiement automatique, SSL gratuit, CDN global, Analytics

### Étapes :

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Import Project"
4. Sélectionnez le repository `bayer1998/sb1-nb8ydx`
5. Choisissez la branche `claude/lyf-pay-pwa-init-011CUP2n8ydJkAciwmZjwier`
6. Les paramètres sont déjà configurés dans `vercel.json`
7. Cliquez sur "Deploy"

**URL finale :** `https://sb1-nb8ydx.vercel.app` (ou personnalisée)

---

## 🌐 Option 2 : Netlify

**Avantages :** Interface simple, Forms gratuits, Functions serverless

### Étapes :

1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur "Add new site" → "Import an existing project"
3. Connectez votre compte GitHub
4. Sélectionnez le repository `bayer1998/sb1-nb8ydx`
5. Choisissez la branche `claude/lyf-pay-pwa-init-011CUP2n8ydJkAciwmZjwier`
6. Les paramètres sont déjà configurés dans `netlify.toml`
7. Cliquez sur "Deploy site"

**URL finale :** `https://bedoux-lyfpay.netlify.app` (ou personnalisée)

---

## 📄 Option 3 : GitHub Pages

**Avantages :** Gratuit, intégré à GitHub, automatique via GitHub Actions

### Étapes :

1. Allez sur votre repository GitHub : `github.com/bayer1998/sb1-nb8ydx`
2. Allez dans **Settings** → **Pages**
3. Dans "Source", sélectionnez **GitHub Actions**
4. Le workflow `.github/workflows/deploy.yml` est déjà configuré
5. Mergez votre branche dans `main` ou `master`
6. Le déploiement se lance automatiquement

**URL finale :** `https://bayer1998.github.io/sb1-nb8ydx/`

---

## 🔧 Configuration des Variables d'Environnement

Pour toutes les plateformes, configurez ces variables :

```
VITE_API_URL=https://api.lyf.eu/api
VITE_ENV=production
```

### Sur Vercel :
Settings → Environment Variables

### Sur Netlify :
Site settings → Environment variables

### Sur GitHub Pages :
Settings → Secrets and variables → Actions

---

## 🧪 Test Local du Build

Pour tester le build localement :

```bash
npm run build
npm run preview
```

Puis ouvrez `http://localhost:4173`

---

## 📱 Test PWA

Une fois déployé, testez l'installation PWA :

1. Ouvrez l'URL sur mobile (Chrome/Safari)
2. Vous devriez voir une invitation "Installer l'application"
3. L'icône apparaîtra sur l'écran d'accueil

---

## 🔍 Vérification PWA

Utilisez ces outils pour vérifier :

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (dans Chrome DevTools)
- [PWA Builder](https://www.pwabuilder.com/)
- Test : `https://votre-url.com/manifest.webmanifest`

---

## 🆘 Dépannage

### Erreur 404 sur les routes

Les redirections sont configurées pour Vercel et Netlify. Pour d'autres plateformes, assurez-vous que toutes les routes redirigent vers `index.html`.

### Service Worker ne se met pas à jour

Videz le cache et rechargez : `Ctrl+Shift+R` (ou `Cmd+Shift+R` sur Mac)

### Icons PWA manquantes

Générez les icônes avec [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) et placez-les dans `/public`

---

## 📊 Analytics (Optionnel)

Ajoutez Google Analytics ou Plausible dans `index.html` si nécessaire.

---

## 🎉 Déploiement Réussi !

Votre PWA LyfPay est maintenant en ligne et accessible à tous !
