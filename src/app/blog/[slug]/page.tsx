import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticleBySlug, getPublishedArticles } from '@/lib/articles';
import { BlockRenderer } from '@/components/blocks/BlockRenderer';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const articles = getPublishedArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return { title: 'ไม่พบบทความ' };
    }

    return {
        title: article.meta_title || article.title,
        description: article.meta_description || article.excerpt,
        keywords: article.keywords,
        openGraph: {
            title: article.meta_title || article.title,
            description: article.meta_description || article.excerpt,
            type: 'article',
            publishedTime: article.published_at || undefined,
            images: article.featured_image ? [article.featured_image] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: article.meta_title || article.title,
            description: article.meta_description || article.excerpt,
        },
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    // Schema.org Article structured data
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        datePublished: article.published_at,
        dateModified: article.updated_at,
        author: {
            '@type': 'Organization',
            name: 'Tomazing Plus2',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Tomazing Plus2',
            logo: {
                '@type': 'ImageObject',
                url: 'https://tomazingplus2.rogerherb.com/logo.png',
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <main className="min-h-screen pt-24">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 glass">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold gradient-text">
                            Tomazing Plus2
                        </Link>
                        <div className="flex gap-4 items-center">
                            <Link href="/blog" className="text-gray-300 hover:text-white transition">
                                บทความ
                            </Link>
                            <a
                                href="https://lin.ee/riWkqmk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-sm py-2 px-4"
                            >
                                สั่งซื้อเลย
                            </a>
                        </div>
                    </div>
                </nav>

                <article className="container mx-auto px-4 py-12 max-w-4xl">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm">
                        <ol className="flex items-center gap-2 text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-white transition">หน้าแรก</Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition">บทความ</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white">{article.title}</li>
                        </ol>
                    </nav>

                    {/* Article Header */}
                    <header className="mb-8">
                        <p className="text-red-400 mb-4">
                            {new Date(article.published_at || article.created_at).toLocaleDateString('th-TH', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
                        {article.excerpt && (
                            <p className="text-xl text-gray-300">{article.excerpt}</p>
                        )}
                    </header>

                    {/* Article Content - Render Blocks */}
                    <div className="article-content">
                        {article.content.map((block) => (
                            <BlockRenderer key={block.id} block={block} />
                        ))}
                    </div>

                    {/* Share buttons */}
                    <div className="border-t border-gray-800 pt-8 mt-12">
                        <p className="text-gray-400 mb-4">แชร์บทความนี้:</p>
                        <div className="flex gap-4">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://tomazingplus2.rogerherb.com/blog/${article.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary py-2 px-4"
                            >
                                Facebook
                            </a>
                            <a
                                href={`https://line.me/R/msg/text/?${encodeURIComponent(article.title + ' https://tomazingplus2.rogerherb.com/blog/' + article.slug)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary py-2 px-4"
                            >
                                LINE
                            </a>
                        </div>
                    </div>

                    {/* Related CTA */}
                    <div className="card mt-12 text-center bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500/50">
                        <h3 className="text-2xl font-bold mb-4">ต้องการปรึกษาเรื่องต่อมลูกหมาก?</h3>
                        <p className="text-gray-300 mb-6">ติดต่อผู้เชี่ยวชาญของเราได้ฟรี</p>
                        <a
                            href="https://lin.ee/riWkqmk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-block"
                        >
                            💬 ปรึกษาฟรี / สั่งซื้อ
                        </a>
                    </div>
                </article>

                {/* Footer */}
                <footer className="glass py-8 mt-12">
                    <div className="container mx-auto px-4 text-center text-gray-500">
                        <Link href="/" className="text-xl font-bold gradient-text mb-4 block">
                            Tomazing Plus2
                        </Link>
                        <p>© 2026 Tomazing Plus2. All rights reserved.</p>
                    </div>
                </footer>
            </main>
        </>
    );
}
