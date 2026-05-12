export type CertificationType = {
    id: number
    title: string
    issuer: string 
    url: string
    icon: string
    image: string
    is_active: boolean
    achieved_at: string
}

export type ProjectType = {
    id: number
    name: string
    slug: string
    tags: {
        tag: string
    }[]
    description: string
    images: {
        url: string
    }[]
    is_active: boolean
    developed_at: string
    preview_url?: string
    github_url?: string
}

export type Chat = {
    role: "user" | "model"
    message: string
}