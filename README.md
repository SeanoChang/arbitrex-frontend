# Starter

## Clone Repo

Clone our repo

```bash
git clone <our_repo>
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## File Structure

**Overview**

```bash
.
├── app.vue
├── assets
│  └── css
│     └── main.css
├── components
├── composables
├── layouts
├── pages
│  ├── checkout
│  ├── index.vue
│  ├── products
│  ├── subscriptions
│  └── user
├── public
├── README.md
├── server
└── utils
```

**Routes**

```bash
.
└── pages
   ├── index.vue
   ├── checkout
   │  ├── cart.vue
   │  ├── confirmation.vue
   │  ├── index.vue
   │  ├── payment.vue
   │  └── review.vue
   ├── products
   │  ├── [id].vue
   │  └── index.vue
   ├── subscriptions
   │  ├── [id].vue
   │  └── index.vue
   └── user
      ├── login.vue
      ├── me.vue
      ├── payment
      │  ├── account.vue
      │  └── index.vue
      ├── register.vue
      └── settings
         ├── index.vue
         ├── notification.vue
         └── password.vue
```

## What we use

- Vue
- Nuxt
- Nuxt UI
- Tailwind CSS
