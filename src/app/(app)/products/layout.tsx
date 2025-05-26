import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"

export default function Layout({ children }:{ children: React.ReactNode }) {
    return (
        <SidebarProvider>
            { children }
            <AppSidebar />
        </SidebarProvider>
    )
}