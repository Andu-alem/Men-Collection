'use client'
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { addCategory } from "@/lib/actions"

export default function AddCategory() {
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(false)

    const onCategoryAdd = async () => {
        if (category === '') return
        setSending(true)
        const formData = new FormData()
        formData.append("name", category)
        const { error } = await addCategory(formData)
        if (error) {
            setSuccess(false)
            setMessage("Failed to create!!")
            setTimeout(() => setMessage(''), 3000)
        } else {
            setSuccess(true)
            setMessage("Created successfully.")
            setTimeout(() => {
                setMessage('')
                setCategory('')
            }, 3000)
        }
        setSending(false)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <Input className="w-[75%] my-2 py-0 h-7" type="text" placeholder="add category" value={ category } onChange={ (e) => setCategory(e.target.value) } />
            <Button className={`h-7 px-2 bg-zinc-700 ${sending ? 'animate-pulse':'animate-none'} `} onClick={ onCategoryAdd }>Create</Button>
            <p className={`text-[13px] ${success ? 'text-green-300':'text-red-300'}`}>{ message }</p>
        </div>
    )
}