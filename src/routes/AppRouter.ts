import {createHashRouter} from "react-router";
import {ROUTE_PATHS} from "./routePaths.ts";
import {HomePage} from "@/pages";

export const AppRouter = createHashRouter([
    {
        path: ROUTE_PATHS.HOME,
        Component: HomePage
    }
])