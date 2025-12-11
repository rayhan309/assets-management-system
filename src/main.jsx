import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <QueryClientProvider client={QueryClient}> */}
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>  
    {/* </QueryClientProvider>   */}
  </StrictMode>
);
