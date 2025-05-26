"use client"
import { authClient } from "@/lib/auth-client" //import the auth client
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from "next/link"
import Image from "next/image"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/lib/form-schemas"
import { toast } from "sonner"
import LoginForm from "@/components/LoginForm"

export default function Page() {
    const searchParams = useSearchParams()
    const [callback, setCallback] = useState<string|null>(null)
    const router = useRouter()
    const [sending, setSending] = useState(false)
    const { isPending, data } = authClient.useSession()
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: "",
        }
    })

    useEffect(() => {
      if (!isPending && data) {
        const param = searchParams.get("callback")
        if (param) {
          setCallback(callback)
          router.replace(param)
        } else {
          router.replace("/products")
        }
      }
    },[isPending])


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
    if (isPending || data) {
      return (
          <div className="w-screen h-screen flex justify-center items-center z-50">
              <p className="text-lg font-bold text-zinc-800 dark:text-zinc-100">Loading....</p>
          </div>
      )
    }

    return (
      <div className="h-screen w-screen backdrop-blur-3xl flex flex-col justify-center items-center">
            <Link className="" href="/products">
                <Image src="/logo.png" alt="logo" width={300} height={100} priority={true} />
            </Link>
          <LoginForm
            form={ form }
            submitHandler={ submitHandler }
            sending={ sending }
            callback={ callback }
           />
      </div>
    )
}