import { MetadataRoute } from 'next';
import { getPublishedArticles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tomazingplus2.rogerherb.com';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ];

    // Dynamic article pages
    const articles = getPublishedArticles();
    const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(article.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...articlePages];
}
