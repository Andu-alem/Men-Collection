'use client'
import { useState, useEffect } from 'react'
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
    Form,
    FormControl,
    FormField,
    FormMessage,
    FormItem
} from "@/components/ui/form"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { UseFormReturn } from "react-hook-form"
import { loginSchema } from "@/lib/form-schemas"


interface Props {
    submitHandler: (formData: z.infer<typeof loginSchema>) => void,
    form: UseFormReturn<z.infer<typeof loginSchema>>,
    callback: string|null,
    sending: boolean
}

export default function LoginForm({ form, submitHandler, callback, sending }:Props) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="w-4/5 sm:w-3/5 md:w-2/5 mx-auto border border-zinc-300 rounded-lg px-7 py-10 bg-gray-200 dark:bg-zinc-900">
            <Form { ...form }>
                <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input className="text-[15px]" type="email" placeholder="JohnDoe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input className="text-[15px]" type={ showPassword ? "text":"password" } placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-1 text-zinc-800 dark:text-zinc-100 text-[15px] items-center">
                    {
                        showPassword ? (
                        <EyeOffIcon className="cursor-pointer" onClick={ () => setShowPassword(false)} />
                        ):(
                        <EyeIcon className="cursor-pointer" onClick={ () => setShowPassword(true) } />
                        )
                    } Show password
                    </div>
                    <div className="flex justify-center">
                        <Button className="text-[15px]" variant="link" asChild>
                        <div>
                            New?<Link href={`/auth/signup${ callback ? `?callback=${callback}`:'' }`}>SIGNUP</Link>
                        </div>
                        </Button>
                    <Button className={`h-7 text-[15px] font-semibold ${ sending ? 'animate-pulse':'animate-none'}`} type="submit">LOGIN</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}