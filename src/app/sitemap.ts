import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://albertorodriguez.link/',
            lastModified: new Date(),
        },
    ]
}