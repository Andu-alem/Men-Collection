import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AdminSidebar from "@/components/admin-ui/AdminSideBar"

export default function Layout({ children }:{ children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AdminSidebar />
            { children }
        </SidebarProvider>
    )
}