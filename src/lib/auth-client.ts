import { createAuthClient } from "better-auth/react"
import { adminClient } from "better-auth/client/plugins"

const authClient = createAuthClient({
    baseURL:"https://mencollection.vercel.app", // the base url of your auth server
    plugins: [
        adminClient()
    ]
})

export { authClient }