import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
    Form,
    FormControl,
    FormField,
    FormMessage,
    FormItem
} from "@/components/ui/form"

export default function Page() {
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        }
    })
    const submitHandler = async (formData: z.infer<typeof loginSchema>) => {}
    return (
        <div>
            implement update product form here..
        </div>
    )
}