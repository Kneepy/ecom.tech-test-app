import "./MainLayout.module.scss"
import {Header} from "@components/common";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            { children }
        </>
    )
}