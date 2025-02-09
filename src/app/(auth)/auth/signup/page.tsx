"use client"
import { authClient } from "@/lib/auth-client"
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from "next/navigation"
import Link from 'next/link'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signupSchema } from "@/lib/form-schemas"
import { toast } from "sonner"
import SignupForm from "@/components/SignupForm"

export const dynamic = 'force-dynamic'

export default function Page() {
    const searchParams = useSearchParams()
    const { isPending, data } = authClient.useSession()
    const [callback, setCallback] = useState<string|null>(null)
    const router = useRouter()
    const [sending, setSending] = useState(false)
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
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
            setSending(false)
            toast("Failed to signup. Please try again."); 
          }, 
        });
    }

    if (isPending || data) {
      return (
          <div className="w-screen h-screen flex justify-center items-center bg-white z-50">
              <p className="text-lg font-bold text-zinc-700">Loading....</p>
          </div>
      )
    }

    return (
      <div className="min-h-screen w-screen backdrop-blur-3xl flex flex-col justify-center items-center mb-5">
          <Link className="" href="/products">
              <Image src="/logo.png" alt="logo" width={300} height={100} />
          </Link>
          <SignupForm
            form={ form }
            submitHandler={ submitHandler }
            sending={ sending }
            callback={ callback }
          />
      </div>
    )
}