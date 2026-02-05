import Link from 'next/link';
import type { Metadata } from 'next';
import { getPublishedArticles } from '@/lib/articles';

export const metadata: Metadata = {
    title: 'บทความสุขภาพ',
    description: 'บทความความรู้เกี่ยวกับโรคต่อมลูกหมากโต วิธีดูแลสุขภาพ และข้อมูลผลิตภัณฑ์ Tomazing Plus2',
    openGraph: {
        title: 'บทความสุขภาพ | Tomazing Plus2',
        description: 'บทความความรู้เกี่ยวกับโรคต่อมลูกหมากโต วิธีดูแลสุขภาพ',
    },
};

export default function BlogPage() {
    const articles = getPublishedArticles();

    return (
        <main className="min-h-screen pt-24">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold gradient-text">
                        Tomazing Plus2
                    </Link>
                    <div className="flex gap-4 items-center">
                        <Link href="/blog" className="text-white font-medium">
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

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">บทความ</span>สุขภาพ
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        ความรู้เกี่ยวกับโรคต่อมลูกหมากโต วิธีดูแลสุขภาพ และข้อมูลที่เป็นประโยชน์
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.slug}`}
                            className="card block hover:border-red-500 transition-all group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                <span className="text-6xl group-hover:scale-110 transition-transform">📚</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-red-400">
                                    {new Date(article.published_at || article.created_at).toLocaleDateString('th-TH', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </p>
                                <h2 className="text-xl font-semibold group-hover:text-red-400 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-gray-400 line-clamp-2">{article.excerpt}</p>
                            </div>
                            <div className="mt-4 text-red-400 flex items-center gap-2 group-hover:gap-4 transition-all">
                                อ่านเพิ่มเติม <span>→</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {articles.length === 0 && (
                    <div className="text-center py-20">
                        <span className="text-6xl mb-4 block">📝</span>
                        <p className="text-gray-400">ยังไม่มีบทความ</p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="card max-w-3xl mx-auto text-center bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500/50">
                        <h2 className="text-2xl font-bold mb-4">มีคำถามเกี่ยวกับต่อมลูกหมาก?</h2>
                        <p className="text-gray-300 mb-6">
                            ปรึกษาผู้เชี่ยวชาญของเราได้ฟรี ไม่มีค่าใช้จ่าย
                        </p>
                        <a
                            href="https://lin.ee/riWkqmk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-block"
                        >
                            💬 ปรึกษาฟรี
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="glass py-8">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <Link href="/" className="text-xl font-bold gradient-text mb-4 block">
                        Tomazing Plus2
                    </Link>
                    <p>© 2026 Tomazing Plus2. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
