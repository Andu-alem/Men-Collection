import path from "path"
import fs from 'fs'

export async function upload(file:File): Promise<string> {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir,{
            recursive: true
        })
    }
    const fileName = `${Date.now()}-${file.name}`
    const filePath = path.join(uploadDir, fileName)

    const buffer = Buffer.from(await file.arrayBuffer())
    fs.writeFileSync(filePath, buffer)

    return `/uploads/${fileName}`
}