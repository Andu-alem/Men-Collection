import { Button } from "../ui/button"
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

export default function DeleteProduct() {
    return (
        <Dialog>
            <DialogTrigger>Delete</DialogTrigger>
            <DialogOverlay>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Alert</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        Are you sure you want to delete this product?
                    </DialogDescription>
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}