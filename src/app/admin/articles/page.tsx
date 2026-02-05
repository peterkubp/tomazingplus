import Link from 'next/link';
import { mockArticles } from '@/lib/articles';

export default function ArticlesPage() {
    const articles = mockArticles;

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
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-gray-300 transition"
                    >
                        <span>📊</span>
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/articles"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/20 text-red-400"
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
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">บทความทั้งหมด</h1>
                    <Link href="/admin/articles/new" className="btn-primary">
                        + สร้างบทความใหม่
                    </Link>
                </div>

                {/* Filters */}
                <div className="card mb-6">
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg">
                            ทั้งหมด ({articles.length})
                        </button>
                        <button className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition">
                            เผยแพร่ ({articles.filter((a) => a.status === 'published').length})
                        </button>
                        <button className="px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition">
                            ฉบับร่าง ({articles.filter((a) => a.status === 'draft').length})
                        </button>
                    </div>
                </div>

                {/* Articles Table */}
                <div className="card">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-800 text-left text-gray-400">
                                    <th className="pb-4 pr-4">
                                        <input type="checkbox" className="rounded bg-gray-800 border-gray-700" />
                                    </th>
                                    <th className="pb-4">ชื่อบทความ</th>
                                    <th className="pb-4">สถานะ</th>
                                    <th className="pb-4">Blocks</th>
                                    <th className="pb-4">วันที่สร้าง</th>
                                    <th className="pb-4">วันที่แก้ไข</th>
                                    <th className="pb-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article) => (
                                    <tr key={article.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                                        <td className="py-4 pr-4">
                                            <input type="checkbox" className="rounded bg-gray-800 border-gray-700" />
                                        </td>
                                        <td className="py-4">
                                            <Link href={`/admin/articles/${article.id}`} className="block">
                                                <p className="font-medium hover:text-red-400 transition">{article.title}</p>
                                                <p className="text-sm text-gray-500">/{article.slug}</p>
                                            </Link>
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
                                        <td className="py-4 text-gray-400">{article.content.length} blocks</td>
                                        <td className="py-4 text-gray-400">
                                            {new Date(article.created_at).toLocaleDateString('th-TH')}
                                        </td>
                                        <td className="py-4 text-gray-400">
                                            {new Date(article.updated_at).toLocaleDateString('th-TH')}
                                        </td>
                                        <td className="py-4">
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/admin/articles/${article.id}`}
                                                    className="text-blue-400 hover:text-blue-300"
                                                >
                                                    แก้ไข
                                                </Link>
                                                <Link
                                                    href={`/blog/${article.slug}`}
                                                    target="_blank"
                                                    className="text-gray-400 hover:text-white"
                                                >
                                                    ดู
                                                </Link>
                                                <button className="text-red-400 hover:text-red-300">ลบ</button>
                                            </div>
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
