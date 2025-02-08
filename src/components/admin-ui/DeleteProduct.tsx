'use client'
import { useRouter } from 'next/navigation'
import { 
    Dialog,
    DialogHeader,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
    DialogOverlay
} from "../ui/dialog"
import { deleteProduct } from "@/lib/actions"
import { toast } from 'sonner'

export default function DeleteProduct({ id }:{ id:number }) {
    const router = useRouter()
    const onDelete = async () => {
        const { error } = await deleteProduct(id)
        if (!error) {
            toast("Product deleted successfuly.")
            router.refresh()
        } else {
            toast("Failed to delete.")
        }
    }
    return (
        <Dialog>
            <DialogTrigger className="text-[15px] hover:text-amber-500">Delete</DialogTrigger>
            <DialogOverlay>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Alert</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this product?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center gap-5">
                        <DialogClose className="px-5 bg-black text-white rounded-lg hover:opacity-75" onClick={ onDelete }>Yes</DialogClose>
                        <DialogClose className="border border-zinc-400 px-5 rounded-lg hover:bg-gray-100">No</DialogClose>
                    </div>
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}