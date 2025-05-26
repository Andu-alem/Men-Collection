import { createAuthClient } from "better-auth/react"
import { adminClient } from "better-auth/client/plugins"

const authClient = createAuthClient({ // the base url of your auth server
    plugins: [
        adminClient()
    ]
})

export { authClient }