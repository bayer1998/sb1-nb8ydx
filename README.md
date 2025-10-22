# BEDOUX - LyfPay PWA

Super-app de paiement mobile, wallet digital et commerce connecté.

## 🎯 Fonctionnalités

### Paiement
- **QR Code** : Paiement dynamique sécurisé
- **NFC/Tap-to-Pay** : Paiement sans contact
- **Pay by Link** : Partage de lien de paiement

### Wallet Digital
- Solde en temps réel
- Historique des transactions
- Recharge et retrait instantanés
- Gestion des moyens de paiement

### Transferts & Cagnottes
- Transferts P2P instantanés
- Cagnottes collaboratives gratuites
- Partage simplifié

### Fidélité & Récompenses
- Cartes de fidélité dématérialisées
- Cumul de points automatique
- Récompenses personnalisées

### Coupons & Promotions
- Coupons digitaux
- Offres géolocalisées
- Marketplace de réductions

### Tickets Dématérialisés
- Conservation automatique
- Tickets de caisse digitaux
- Export comptable

## 🚀 Technologies

- **Frontend**: React 18 + TypeScript
- **Build**: Vite 5
- **Routing**: React Router v7
- **State**: Zustand + React Query
- **UI**: TailwindCSS
- **PWA**: Vite-plugin-PWA + Workbox
- **Icons**: Lucide React

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 🔐 Sécurité

- Authentification forte (SCA / 3DS2)
- Chiffrement end-to-end
- Conformité PCI DSS & RGPD
- Authentification biométrique
- KYC intégré

## 📱 Installation PWA

L'application est installable sur mobile et desktop. Les utilisateurs verront une invite d'installation lors de la première visite.

## 🏛️ Architecture

```
src/
├── features/           # Modules fonctionnels
│   ├── auth/          # Authentification & KYC
│   ├── payment/       # Paiements
│   ├── wallet/        # Portefeuille
│   ├── transfers/     # Transferts & Cagnottes
│   ├── loyalty/       # Fidélité
│   ├── coupons/       # Coupons
│   ├── tickets/       # Tickets
│   └── profile/       # Profil utilisateur
├── shared/            # Code partagé
│   ├── components/    # Composants UI
│   ├── services/      # Services API
│   ├── store/         # State management
│   └── types/         # Types TypeScript
├── layouts/           # Layouts
└── router/            # Configuration routing
```

## 📄 Licence

Propriétaire - BEDOUX © 2025