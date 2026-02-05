import Link from 'next/link';
import { mockArticles } from '@/lib/articles';

export default function AdminPage() {
    const articles = mockArticles;
    const publishedCount = articles.filter((a) => a.status === 'published').length;
    const draftCount = articles.filter((a) => a.status === 'draft').length;

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-gray-950 border-r border-gray-800 p-6">
                <Link href="/" className="text-xl font-bold gradient-text block mb-8">
                    Tomazing Plus2
                </Link>
                <p className="text-gray-500 text-xs uppercase mb-4">Admin Panel</p>
                <nav className="space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/20 text-red-400"
                    >
                        <span>📊</span>
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/articles"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300 transition"
                    >
                        <span>📝</span>
                        บทความ
                    </Link>
                    <Link
                        href="/admin/blocks"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300 transition"
                    >
                        <span>🧩</span>
                        Webblocks
                    </Link>
                </nav>
                <div className="absolute bottom-6 left-6 right-6">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-400 transition"
                    >
                        <span>🌐</span>
                        ดูเว็บไซต์
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="card bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-500/50">
                        <p className="text-gray-400 mb-2">บทความทั้งหมด</p>
                        <p className="text-4xl font-bold">{articles.length}</p>
                    </div>
                    <div className="card bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-500/50">
                        <p className="text-gray-400 mb-2">เผยแพร่แล้ว</p>
                        <p className="text-4xl font-bold text-green-400">{publishedCount}</p>
                    </div>
                    <div className="card bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-yellow-500/50">
                        <p className="text-gray-400 mb-2">ฉบับร่าง</p>
                        <p className="text-4xl font-bold text-yellow-400">{draftCount}</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card mb-8">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="flex gap-4">
                        <Link
                            href="/admin/articles/new"
                            className="btn-primary"
                        >
                            + สร้างบทความใหม่
                        </Link>
                        <Link
                            href="/admin/blocks"
                            className="btn-secondary"
                        >
                            จัดการ Webblocks
                        </Link>
                    </div>
                </div>

                {/* Recent Articles */}
                <div className="card">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">บทความล่าสุด</h2>
                        <Link href="/admin/articles" className="text-red-400 hover:text-red-300">
                            ดูทั้งหมด →
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-800 text-left text-gray-400">
                                    <th className="pb-4">ชื่อบทความ</th>
                                    <th className="pb-4">สถานะ</th>
                                    <th className="pb-4">วันที่</th>
                                    <th className="pb-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.slice(0, 5).map((article) => (
                                    <tr key={article.id} className="border-b border-gray-800/50">
                                        <td className="py-4">
                                            <p className="font-medium">{article.title}</p>
                                            <p className="text-sm text-gray-500">/{article.slug}</p>
                                        </td>
                                        <td className="py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs ${article.status === 'published'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-yellow-500/20 text-yellow-400'
                                                    }`}
                                            >
                                                {article.status === 'published' ? 'เผยแพร่' : 'ฉบับร่าง'}
                                            </span>
                                        </td>
                                        <td className="py-4 text-gray-400">
                                            {new Date(article.created_at).toLocaleDateString('th-TH')}
                                        </td>
                                        <td className="py-4">
                                            <Link
                                                href={`/admin/articles/${article.id}`}
                                                className="text-red-400 hover:text-red-300"
                                            >
                                                แก้ไข
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
