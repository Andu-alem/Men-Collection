import AdminHeader2 from "@/components/admin-ui/AdminHeader2"

export default function Layout({ children }:{ children: React.ReactNode }) {
    return (
        <div className="w-full sm:w-[calc(100vw-17rem)] flex flex-col">
            <AdminHeader2 />
            { children }
        </div>
    )
}