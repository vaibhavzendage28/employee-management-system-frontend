# Employee Management System

A modern, responsive Employee Management System (EMS) web application built with React and Vite. This application provides an intuitive interface for managing employee data, streamlining HR operations, and maintaining employee records efficiently.

## 🌐 Live Demo

The application is deployed and live at: **[https://employee-management-system-frontend-snowy.vercel.app/](https://employee-management-system-frontend-snowy.vercel.app/)**

## ✨ Features

- **Employee Management**: Create, read, update, and delete employee records
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with Tailwind CSS styling
- **Dark Theme**: Professional dark-themed interface for comfortable viewing
- **Authentication**: Secure login system with local credential storage
- **Fast Performance**: Built with Vite for instant HMR and optimized builds

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.2.1
- **Routing**: React Router DOM 7.13.1
- **Linting**: ESLint with React plugins
- **Deployment**: Vercel

## 📦 Project Structure

```
EMS/
├── src/
│   ├── components/       # React components
│   │   └── Auth/        # Authentication components
│   ├── context/         # React Context for state management
│   ├── utils/           # Utility functions
│   ├── assets/          # Images and static assets
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static files
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd EMS
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🔐 Authentication

The application uses a local credential storage system for authentication. Credentials are securely stored locally and can be used for login purposes.

## 🎨 Styling

The project uses **Tailwind CSS** for styling, providing:

- Responsive utility classes
- Dark theme support
- Custom color schemes
- Smooth transitions and animations

## 🚢 Deployment

The application is deployed using **Vercel** for optimal performance and reliability. The deployment is automated and updates with each push to the main branch.

**Live URL**: [https://employee-management-system-frontend-snowy.vercel.app/](https://employee-management-system-frontend-snowy.vercel.app/)

## 📋 Features in Detail

### Employee Management

- View all employees with detailed information
- Add new employees to the system
- Edit existing employee records
- Delete employees from the database
- Search and filter employee data

### Dashboard

- Quick overview of employee statistics
- Visual representation of company data
- Real-time data updates

### User Interface

- Clean, modern design with dark theme
- Intuitive navigation
- Mobile-responsive layout
- Smooth animations and transitions

## 🔧 Configuration

### Vite Configuration

Configured with React plugin for optimal HMR and build performance.

### Tailwind CSS

Integrated using `@tailwindcss/vite` for seamless development experience.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vaibhav Zendage**

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve the project.

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ using React and Vite**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
