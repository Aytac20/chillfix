import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ProtectedRoute from "./features/Auth/ProtectedRoute";
import { routes } from "./utils/routes";
import SignIn from "./features/Auth/SignIn";
import SignUp from "./features/Auth/SignUp";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    { path: "*", element: <Error /> },
    {
      path: "/signin",
      element: <SignIn />,
      errorElement: <Error />,
    },
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <Error />,
    },
    {
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      errorElement: <Error />,
      children: routes,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        containerClassName="text-[1.5rem]"
        toastOptions={{
          style: {
            background: "#2d2f3e",
            color: "white",
            borderRadius: "8px",
            fontSize: "1.6rem",
            padding: "15px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
