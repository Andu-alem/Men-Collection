import AdminHeader2 from "@/components/admin-ui/AdminHeader2"

export default function Layout({ children }:{ children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full">
            <AdminHeader2 />
            { children }
        </div>
    )
}