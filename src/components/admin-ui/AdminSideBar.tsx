import { getCategories } from "@/lib/api-queries"
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
import { Button } from "../ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Input } from "../ui/input"

const AdminSidebar = async () => {
    const { categories } = await getCategories()

    return (
        <Sidebar className="top-0 bg-zinc-900 text-gray-200">
            <SidebarHeader>
                <div className="flex justify-between pr-1">
                    <span className="font-bold">Men's Collection</span>
                    <Button className="text-[15px] h-7 bg-zinc-700">LOGOUT</Button>
                </div>
            </SidebarHeader>
            <SidebarContent className="scrollbar-hide">
                <Collapsible defaultOpen className="group/collapsible">
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
                                            <CollapsibleContent className="flex flex-col justify-center items-center" asChild>
                                                <Input className="w-[75%] my-2 py-0" type="text" placeholder="add category" />
                                                <Button className="h-7 px-2 bg-zinc-700">Create</Button>
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
                                        categories.map((category:any) => (
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