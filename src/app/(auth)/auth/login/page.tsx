"use client"
import { authClient } from "@/lib/auth-client" //import the auth client
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
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
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { loginSchema } from "@/lib/form-schemas"
import { toast } from "sonner"

export default function Page() {
    const searchParams = useSearchParams()
    const callback = searchParams.get("callback")
    const router = useRouter()
    const [sending, setSending] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: "",
        }
    })

    const submitHandler = async (formData: z.infer<typeof loginSchema>) => {
        const { email, password } = formData
        await authClient.signIn.email({ 
          email, 
          password 
       }, { 
          onRequest: () => { 
           //show loading
           setSending(true)
          }, 
          onSuccess: () => { 
            //redirect to the dashboard
            setSending(false)
            if (callback) {
              router.replace(callback)
            } else {
              router.replace("/products")
            }
          }, 
          onError: (ctx: any) => { 
            toast(ctx.error.message)
          }, 
        });
    }

    return (
      <div className="w-4/5 sm:w-3/5 md:w-2/5 mx-auto border border-zinc-300 rounded-lg px-7 py-10">
        <Form { ...form }>
            <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                          <FormControl>
                              <Input className="bg-white" type="email" placeholder="johndoe@example.com" {...field} />
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
                              <Input className="bg-white" type={ showPassword ? "text":"password" } placeholder="password" {...field} />
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
                        New?<Link href={`/auth/signup${ callback ? `?callback=${callback}`:'' }`}>SIGNUP</Link>
                      </div>
                    </Button>
                  <Button className={`h-7 ${ sending ? 'animate-pulse':'animate-none'}`} type="submit">LOGIN</Button>
                </div>
            </form>
        </Form>
      </div>
    )
}