import { Header } from "../../components/common"
import "./MainLayout.module.scss"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            { children }
        </>
    )
}