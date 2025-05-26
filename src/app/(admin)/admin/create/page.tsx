'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { productSchema, imageSchema } from "@/lib/form-schemas"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
    Form,
    FormControl,
    FormField,
    FormMessage,
    FormItem,
    FormLabel
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectGroup,
    SelectLabel,
    SelectValue
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { getCategories } from "@/lib/api-queries"
import Image from "next/image"

type Category = {
    id: number,
    name: string
}

export default function Page() {
    const [categories, setCategories] = useState<Category[]>([])
    const [imageSrc, setImageSrc] = useState<string|null>(null)
    const form = useForm<z.infer<typeof productSchema>>({
        resolver: zodResolver(productSchema),
        defaultValues: {
          name: "",
          description: "",
          price: '0',
          quantity: '0',
          category: "",
          image: new File([], 'x')
        }
    })

    useEffect(() => {
        async function getData () {
            const response = await getCategories()
            if (response) {
                setCategories(response.categories)
            }
        }
        getData()
    },[])

    const submitHandler = async (data: z.infer<typeof productSchema>) => {
        console.log("Form data is ", data)
        const formData = new FormData()
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                formData.append(key, data[key as keyof z.infer<typeof productSchema>]) 
            }
        }
        const response = await fetch('http://localhost:3000/api/products', {
            method: "POST",
            body: formData
        })
        console.log("The response is ---- ", response)
    }

    const imageHandler = (file:File ) => {
        const validation = imageSchema.safeParse({image: file})
        if (validation.success) {
            const url = URL.createObjectURL(file)
            setImageSrc(url)
        }
    }
    
    
    return (
        <div className="w-4/5 sm:w-1/2 lg:w-2/5 mx-auto">
        <Form { ...form }>
            <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-4 border border-zinc-300 rounded-lg p-7">
                <FormField
                    control={ form.control }
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select value={ field.value } onValueChange={ field.onChange }>
                                    <SelectTrigger className="border border-zinc-400">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            categories.map(category => (
                                                <SelectItem key={ category.id } value={`${category.id}`}>
                                                    { category.name }
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                          <FormControl>
                              <Input className="border border-zinc-400" placeholder="Product Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <FormControl>
                              <Textarea className="border border-zinc-400" rows={ 5 } { ...field } />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="price">Price</FormLabel>
                            <FormControl>
                                <Input className="border border-zinc-400" type="number" min="50" step="0.5" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="quantity">Quantity</FormLabel>
                            <FormControl>
                                <Input className="border border-zinc-400" type="number" min="1" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={ form.control }
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            {
                                imageSrc && ( 
                                    <div className="relative h-[150px] w-full mb-3">
                                        <Image className="absolute" src={ imageSrc } alt="preview" fill={ true } />
                                    </div>
                                )
                            }
                            <FormLabel htmlFor="image" className="border border-zinc-400 rounded-lg p-2 text-zinc-700 my-2">Pick product image</FormLabel>
                            <FormControl>
                                <Input 
                                    className="hidden"
                                    id="image" 
                                    type="file" 
                                    name={ field.name }
                                    onChange={ (e) => {
                                        const file = e.target.files?.[0]
                                        if (file) {
                                            field.onChange(file)
                                            imageHandler(file)
                                        }
                                    } }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                

                <div className="flex justify-center">
                  <Button className={`h-7`} type="submit">SUBMIT</Button>
                </div>
            </form>
        </Form>
      </div>
    )
}