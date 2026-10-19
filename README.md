# Discover New Zealand

Discover New Zealand shows the beauty of New Zealand using new technologies to create a website similar to those seen on the awwwards.com with smooth transitions and animations.

Check the applicaton out here: https://tourism-nz.onrender.com/

# Prerequisites

---

Before getting started, make sure you have the following software installed on your machine:

- Node.js 24 LTS (the exact version is in `.nvmrc`; run `nvm use` to switch to it)

# Getting Started

---

To run Discover New Zealand locally, follow these steps:

**1.** Clone the repository:

    git clone https://github.com/YinhuC/tourism-nz.git

**2.** Install dependencies:

    npm install

**3.** Start the Vite dev server, then open http://localhost:5173:

    npm start

**4.** Build for production into `build/`, and preview the build locally:

    npm run build
    npm run preview

# Deploying

---

The site deploys to Vercel as a static Vite build. `vercel.json` sets the output directory to `build/`, sends every route to `index.html` so client-side routes like `/location/...` load on refresh, and caches the hashed files in `build/assets/` for a year.

**1.** Import the GitHub repository at https://vercel.com/new. The settings come from `vercel.json` and the Node version from `engines` in `package.json`, so the defaults can be left as they are.

**2.** Every push to `master` then deploys to production, and other branches get preview deployments.

**3.** Turn on Web Analytics in the project's Analytics tab. The `<Analytics />` component in `src/App.jsx` then records page views, including client-side route changes.

To deploy from the terminal instead:

    npx vercel        # preview deployment
    npx vercel --prod # production deployment
