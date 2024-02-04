import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Toaster />
      <main className="w-screen h-screen">
        <App />
      </main>
    </ThemeProvider>
  </React.StrictMode>
);
