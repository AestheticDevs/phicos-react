import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@/assets/css/global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Work from "./pages/Work.tsx";
import Career from "./pages/Career.tsx";
import About from "./pages/About.tsx";
import Structure from "./pages/Structure.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Index />
                },
                {
                    path: "works",
                    element: <Work />
                },
                {
                    path: "career",
                    element: <Career />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "structure",
                    element: <Structure />
                }
            ]
        }
    ],
    { basename: "/phicos-react/" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
