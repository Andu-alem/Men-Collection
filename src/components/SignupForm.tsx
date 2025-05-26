'use client'
import { useState } from 'react'
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
import { signupSchema } from "@/lib/form-schemas"


interface Props {
    submitHandler: (formData: z.infer<typeof signupSchema>) => void,
    form: UseFormReturn<z.infer<typeof signupSchema>>,
    callback: string|null,
    sending: boolean
}

export default function SignupForm({ form, submitHandler, callback, sending }:Props) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="w-4/5 sm:w-3/5 lg:w-2/5 mx-auto border border-zinc-300 rounded-lg px-7 py-10 bg-gray-200 dark:bg-zinc-900">
            <Form { ...form }>
                <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input className="text-[15px]" placeholder="User Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input className="text-[15px]" type={ showPassword ? "text":"password" } placeholder="Confirm Password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-1 text-zinc-900 dark:text-zinc-100 text-[15px] items-center">
                    {
                        showPassword ? (
                        <EyeOffIcon className="cursor-pointer" onClick={ () => setShowPassword(false)} />
                        ):(
                        <EyeIcon className="cursor-pointer" onClick={ () => setShowPassword(true) } />
                        )
                    } show password
                    </div>

                    <div className="flex justify-center">
                        <Button className="text-[15px]" variant="link" asChild>
                            <div>
                                Already registered?<Link href={`/auth/login${ callback ? `?callback=${callback}`:'' }`}>LOGIN</Link>
                            </div>
                        </Button>
                    <Button className={`h-7 text-[15px] font-semibold ${ sending ? 'animate-pulse':'animate-none'}`} type="submit">SIGNUP</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}