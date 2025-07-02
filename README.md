# Dev Dashboard

A modern, fullstack developer productivity dashboard built with Angular 20+ and Express. Features include Kanban tasks, notes, focus timer, code snippets, user authentication, and more.

## 🚀 Live Demo

<https://dev-dashboard-y4gk.onrender.com/>

## Disclaimer

> **Note:** This app is hosted on Render's free tier. Free web services on Render [spin down after 15 minutes of inactivity and may take up to a minute to start up again when you visit the site](https://render.com/docs/free). If the app takes a while to load, please be patient while the server wakes up. This is expected behavior for free-tier deployments. [[source](https://render.com/docs/faq)]

---

## Features
- **User Authentication** (register, login, email verification)
- **Kanban Board** for task management
- **Notes** with Markdown support
- **Focus Timer** (Pomodoro-style)
- **Code Snippets** manager
- **Stats Dashboard**
- **Settings** for user preferences
- **Responsive Material UI**
- **Data persistence** (localStorage + backend API)

## Tech Stack
- **Frontend:** Angular 20+, Angular Material, RxJS
- **Backend:** Express 5, Node.js
- **Database:** JSON file storage (for demo; replaceable with real DB)
- **Other:** JWT Auth, Nodemailer, Helmet, CORS, Rate Limiting

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Clone the Repository
```sh
git clone https://github.com/maksimKV/dev-dashboard.git
cd dev-dashboard
```

### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file in the root with:
```
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
FRONTEND_URL=http://localhost:4200
```

### Development
#### 1. Start the Backend
```sh
npm run start
# or
node server.js
```

#### 2. Start the Frontend (in another terminal)
```sh
ng serve
```
- Frontend: [http://localhost:4200](http://localhost:4200)
- Backend API: [http://localhost:4000/api](http://localhost:4000/api)

### Production Build & Deployment
#### 1. Build Angular for Production
```sh
ng build --configuration production
```
#### 2. Start the Server (serves static files from dist/)
```sh
npm run start
```
- The app will be available at the configured port (default: 4000 or as set by your host).

#### 3. Deploy to Render (or similar)
- Push your code to GitHub.
- Connect your repo to Render and set up a Node service.
- Set environment variables in Render dashboard.
- Render will run `npm install` and `npm run build` automatically.

## Troubleshooting
- **NG0908/Zone.js errors:** Ensure `zone.js` is imported in both `polyfills.ts` and at the top of `main.ts`.
- **Wrong API URL in production:** Make sure you build with `--configuration production` and your `angular.json` has correct fileReplacements.
- **CORS or CSP errors:** Check server.js CORS and Helmet configuration.
- **Service worker/404 errors:** Remove all service worker code if not using PWA.

## License
MIT

---

## Demo
[https://dev-dashboard-y4gk.onrender.com/](https://dev-dashboard-y4gk.onrender.com/)

[GitHub Repository](https://github.com/maksimKV/dev-dashboard)
