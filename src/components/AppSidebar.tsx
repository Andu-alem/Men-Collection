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
import { Progress } from "./ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { getAllCategories } from "@/lib/queries"


const AppSidebar = async () => {
    const { categories } = await getAllCategories()

    return (
        <Sidebar side="right" className="top-[70px]">
            <SidebarHeader>
                Additional Filters
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>By price range</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <Progress value={ 40 } />
                    </SidebarGroupContent>
                </SidebarGroup>
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                By Category 
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {
                                        categories?.map((category:any, index:number) => (
                                            <SidebarMenuItem key={ index }>
                                                <SidebarMenuButton>
                                                    <Link href={`/products/category/${category.id}`}>{ category.name }</Link>
                                                </SidebarMenuButton>
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

export default AppSidebar