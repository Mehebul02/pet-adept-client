import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProviders from "./AuthProviders/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
