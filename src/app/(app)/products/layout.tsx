import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Classic Men's Products",
    description: "Classic men's collection store. You can find suits, watches, shoes, perfumes, and more."
}

export default function Layout({ children }:{ children: React.ReactNode }) {
    return (
        <SidebarProvider>
            { children }
            <AppSidebar />
        </SidebarProvider>
    )
}