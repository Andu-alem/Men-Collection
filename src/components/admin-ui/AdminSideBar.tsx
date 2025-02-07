import { getAllCategories } from "@/lib/queries"
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import AddCategory from "./AddCategory"
import AdminSidebarHeader from "./AdminSidebarHeader"
import { Category } from "@/lib/types"

const AdminSidebar = async () => {
    const { categories } = await getAllCategories()

    return (
        <Sidebar className="top-0 bg-zinc-900 text-gray-200">
            <SidebarHeader>
                <AdminSidebarHeader />
            </SidebarHeader>
            <SidebarContent className="scrollbar-hide">
                <Collapsible className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                <span className="text-gray-400">Create New</span> 
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-gray-400" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton className="text-[17px]" asChild>
                                            <Link href="/admin/create">Product</Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <Collapsible>
                                            <SidebarMenuButton className="w-full" asChild>
                                                <CollapsibleTrigger className="flex justify-between">
                                                    <span className="text-[17px] text-gray-300">Category</span>
                                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-gray-400" />
                                                </CollapsibleTrigger>
                                            </SidebarMenuButton>
                                            <CollapsibleContent>
                                                <AddCategory />
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
                <Collapsible defaultOpen={ false } className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                <span className="text-gray-400">By Category</span> 
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-gray-400" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {
                                        categories?.map((category:Category) => (
                                            <SidebarMenuItem key={ category.id }>
                                                <SidebarMenuButton className="text-[17px]">{ category.name }</SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))
                                    }
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
            </SidebarContent>
        </Sidebar>
    )
}

export default AdminSidebar