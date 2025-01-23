import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import "aos/dist/aos.css"; // Import AOS styles

import AuthProvider from "./Provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
