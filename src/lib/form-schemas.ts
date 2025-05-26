import { z } from "zod"

export const signupSchema = z.object({
    name: z.string().min(1,{
               message: "Username is required." 
            }),
    email: z.string()
            .min(1,{
                message: "Email is required.",
            })
            .email({
                message: "Please provide a valid email."
            }),
    password: z.string()
                .min(5,{
                    message: "The password is required and must be minimum 5 character."
                }),
    confirmPassword: z.string({
                message: "Confirm password is required."
            }).min(5, {
                message: "Must be greater than 5 characters."
            })
}).refine(data => data.password === data.confirmPassword, {
    message: "Password didn't match.",
    path: ["confirmPassword"],
})

export const loginSchema = z.object({
    email: z.string()
            .min(1,{
                message: "Email is required.",
            })
            .email({
                message: "Please provide a valid email."
            }),
    password: z.string()
                .min(5,{
                    message: "The password is required and must be minimum 5 character."
                })
})


const MAX_FILE_SIZE = 2 * 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/jfif', 'image/jpg']


export const productSchema = z.object({
    category: z.string({
                message: "Category is required." 
            }),
    name: z.string()
            .min(1, {
                message: "Product name is required."
            }),
    description: z.string()
                .min(1, {
                    message: "Description is required."
                }),
    price: z.string({
                message: "Price is required"
            }),
    quantity: z.string({
                message: "Quantity is required."  
            }),
    image: z.instanceof(File)
            .refine((file) => file.size <= MAX_FILE_SIZE, {
                message: "The image is too large. Please choose an image smaller than 2MB"
            }).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
                message: "Please upload a valid image file (jpeg, jpg, png, webp, jfif)"
            })
})

export const imageSchema = z.object({
    image: z.instanceof(File)
            .refine((file) => file.size <= MAX_FILE_SIZE, {
                message: "The image is too large. Please choose an image smaller than 2MB"
            }).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
                message: "Please upload a valid image file (jpeg, jpg, png, webp, jfif)"
            })
})