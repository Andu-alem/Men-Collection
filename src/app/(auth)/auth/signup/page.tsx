"use client"
import { authClient } from "@/lib/auth-client"
import { useState } from 'react'
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { z } from "zod"
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
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { signupSchema } from "@/lib/form-schemas"
import { toast } from "sonner"

export default function Page() {
    const searchParams = useSearchParams()
    const callback = searchParams.get("callback")
    const router = useRouter()
    const [sending, setSending] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        }
    })

    const submitHandler = async (formData: z.infer<typeof signupSchema>) => {
        const { name, email, password } = formData
        await authClient.signUp.email({ 
          email, 
          password, 
          name
       }, { 
          onRequest: () => { 
           //show loading
           setSending(true)
          }, 
          onSuccess: () => { 
            //redirect to the callback page or products page
            setSending(false)
            if (callback) {
              router.replace(callback)
            } else {
              router.replace("/products")
            }
          }, 
          onError: (ctx: any) => { 
            toast(ctx.error.message); 
          }, 
        });
    }

    return (
      <div className="w-4/5 sm:w-3/5 md:w-2/5 mx-auto border border-zinc-300 rounded-lg p-4">
        <Form { ...form }>
            <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                          <FormControl>
                              <Input placeholder="username" {...field} />
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
                              <Input type="email" placeholder="johndoe@example.com" {...field} />
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
                              <Input type={ showPassword ? "text":"password" } placeholder="password" {...field} />
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
                              <Input type={ showPassword ? "text":"password" } placeholder="confirm password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-1 text-zinc-700 text-[17px] items-center">
                  {
                    showPassword ? (
                      <EyeOffIcon className="text-zinc-700 cursor-pointer" onClick={ () => setShowPassword(false)} />
                    ):(
                      <EyeIcon className="text-zinc-700 cursor-pointer" onClick={ () => setShowPassword(true) } />
                    )
                  } show password
                </div>

                <div className="flex justify-center">
                    <Button className="text-[17px]" variant="link" asChild>
                      <div>
                        Already registered?<Link href={`/auth/login${ callback ? `?callback=${callback}`:'' }`}>LOGIN</Link>
                      </div>
                    </Button>
                  <Button className={`h-7 ${ sending ? 'animate-pulse':'animate-none'}`} type="submit">SIGNUP</Button>
                </div>
            </form>
        </Form>
      </div>
    )
}