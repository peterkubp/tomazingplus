'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { mockArticles, type Block } from '@/lib/articles';

const blockTypes = [
    { type: 'hero', label: 'Hero Banner', icon: '🎨' },
    { type: 'text', label: 'ข้อความ', icon: '📝' },
    { type: 'image', label: 'รูปภาพ', icon: '🖼️' },
    { type: 'cta', label: 'Call to Action', icon: '🔔' },
    { type: 'faq', label: 'FAQ', icon: '❓' },
    { type: 'testimonial', label: 'รีวิว', icon: '💬' },
    { type: 'video', label: 'วิดีโอ', icon: '🎬' },
];

export default function ArticleEditorPage() {
    const params = useParams();
    const articleId = params.id as string;
    const isNew = articleId === 'new';

    const existingArticle = !isNew
        ? mockArticles.find((a) => a.id === articleId)
        : null;

    const [title, setTitle] = useState(existingArticle?.title || '');
    const [slug, setSlug] = useState(existingArticle?.slug || '');
    const [excerpt, setExcerpt] = useState(existingArticle?.excerpt || '');
    const [metaTitle, setMetaTitle] = useState(existingArticle?.meta_title || '');
    const [metaDescription, setMetaDescription] = useState(existingArticle?.meta_description || '');
    const [status, setStatus] = useState<'draft' | 'published'>(existingArticle?.status || 'draft');
    const [blocks, setBlocks] = useState<Block[]>(existingArticle?.content || []);
    const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

    const addBlock = (type: string) => {
        const newBlock: Block = {
            id: `block-${Date.now()}`,
            type: type as Block['type'],
            data: getDefaultBlockData(type),
        };
        setBlocks([...blocks, newBlock]);
        setSelectedBlock(newBlock.id);
    };

    const getDefaultBlockData = (type: string): Record<string, unknown> => {
        switch (type) {
            case 'hero':
                return { title: 'หัวข้อ', subtitle: 'คำอธิบาย' };
            case 'text':
                return { content: 'เนื้อหา...' };
            case 'image':
                return { url: '', alt: '', caption: '' };
            case 'cta':
                return { title: 'ติดต่อเรา', button_text: 'คลิก', button_url: '' };
            case 'faq':
                return { items: [{ q: 'คำถาม', a: 'คำตอบ' }] };
            case 'testimonial':
                return { quote: '', author: '' };
            default:
                return {};
        }
    };

    const removeBlock = (blockId: string) => {
        setBlocks(blocks.filter((b) => b.id !== blockId));
        if (selectedBlock === blockId) {
            setSelectedBlock(null);
        }
    };

    const moveBlock = (index: number, direction: 'up' | 'down') => {
        const newBlocks = [...blocks];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= blocks.length) return;
        [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
        setBlocks(newBlocks);
    };

    const updateBlockData = (blockId: string, newData: Record<string, unknown>) => {
        setBlocks(
            blocks.map((b) => (b.id === blockId ? { ...b, data: { ...b.data, ...newData } } : b))
        );
    };

    const handleSave = () => {
        console.log('Saving article:', { title, slug, excerpt, metaTitle, metaDescription, status, blocks });
        alert('บันทึกสำเร็จ! (Mock - จะเชื่อมต่อ Supabase ภายหลัง)');
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-gray-950 border-r border-gray-800 p-6 overflow-y-auto">
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
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admin/articles"
                            className="text-gray-400 hover:text-white transition"
                        >
                            ← กลับ
                        </Link>
                        <h1 className="text-2xl font-bold">
                            {isNew ? 'สร้างบทความใหม่' : 'แก้ไขบทความ'}
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                        >
                            <option value="draft">ฉบับร่าง</option>
                            <option value="published">เผยแพร่</option>
                        </select>
                        <button onClick={handleSave} className="btn-primary">
                            💾 บันทึก
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Article Settings */}
                    <div className="col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="card">
                            <h2 className="text-lg font-semibold mb-4">ข้อมูลบทความ</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">ชื่อบทความ</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                            if (!existingArticle) {
                                                setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
                                            }
                                        }}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                                        placeholder="ชื่อบทความ..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Slug (URL)</label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-500">/blog/</span>
                                        <input
                                            type="text"
                                            value={slug}
                                            onChange={(e) => setSlug(e.target.value)}
                                            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                                            placeholder="article-slug"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">คำอธิบายสั้น</label>
                                    <textarea
                                        value={excerpt}
                                        onChange={(e) => setExcerpt(e.target.value)}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white h-24 resize-none"
                                        placeholder="คำอธิบายสั้นๆ..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Blocks Editor */}
                        <div className="card">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">เนื้อหา (Webblocks)</h2>
                                <span className="text-gray-400 text-sm">{blocks.length} blocks</span>
                            </div>

                            {/* Blocks List */}
                            <div className="space-y-4 mb-6">
                                {blocks.length === 0 ? (
                                    <div className="text-center py-12 border-2 border-dashed border-gray-700 rounded-xl">
                                        <p className="text-gray-500 mb-4">ยังไม่มี blocks</p>
                                        <p className="text-sm text-gray-600">เลือก block จากด้านล่างเพื่อเพิ่ม</p>
                                    </div>
                                ) : (
                                    blocks.map((block, index) => (
                                        <div
                                            key={block.id}
                                            className={`p-4 rounded-xl border ${selectedBlock === block.id
                                                    ? 'border-red-500 bg-red-500/10'
                                                    : 'border-gray-700 bg-gray-800/50'
                                                }`}
                                            onClick={() => setSelectedBlock(block.id)}
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl">
                                                        {blockTypes.find((t) => t.type === block.type)?.icon}
                                                    </span>
                                                    <span className="font-medium">
                                                        {blockTypes.find((t) => t.type === block.type)?.label}
                                                    </span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); moveBlock(index, 'up'); }}
                                                        className="text-gray-400 hover:text-white px-2"
                                                        disabled={index === 0}
                                                    >
                                                        ↑
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); moveBlock(index, 'down'); }}
                                                        className="text-gray-400 hover:text-white px-2"
                                                        disabled={index === blocks.length - 1}
                                                    >
                                                        ↓
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); removeBlock(block.id); }}
                                                        className="text-red-400 hover:text-red-300 px-2"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Block Editor */}
                                            {selectedBlock === block.id && (
                                                <div className="mt-4 pt-4 border-t border-gray-700">
                                                    <BlockEditor block={block} onUpdate={updateBlockData} />
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Add Block Buttons */}
                            <div>
                                <p className="text-sm text-gray-400 mb-3">เพิ่ม Block:</p>
                                <div className="flex flex-wrap gap-2">
                                    {blockTypes.map((type) => (
                                        <button
                                            key={type.type}
                                            onClick={() => addBlock(type.type)}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                                        >
                                            <span>{type.icon}</span>
                                            <span className="text-sm">{type.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - SEO */}
                    <div className="space-y-6">
                        <div className="card">
                            <h2 className="text-lg font-semibold mb-4">SEO Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Meta Title <span className="text-gray-600">({metaTitle.length}/60)</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={metaTitle}
                                        onChange={(e) => setMetaTitle(e.target.value)}
                                        maxLength={60}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm"
                                        placeholder="SEO Title..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Meta Description <span className="text-gray-600">({metaDescription.length}/160)</span>
                                    </label>
                                    <textarea
                                        value={metaDescription}
                                        onChange={(e) => setMetaDescription(e.target.value)}
                                        maxLength={160}
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm h-24 resize-none"
                                        placeholder="SEO Description..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h2 className="text-lg font-semibold mb-4">Featured Image</h2>
                            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-700 cursor-pointer hover:border-red-500 transition">
                                <div className="text-center">
                                    <span className="text-4xl block mb-2">📷</span>
                                    <p className="text-sm text-gray-400">คลิกเพื่ออัพโหลด</p>
                                    <p className="text-xs text-gray-600">(Cloudinary)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Block Editor Component
function BlockEditor({
    block,
    onUpdate,
}: {
    block: Block;
    onUpdate: (id: string, data: Record<string, unknown>) => void;
}) {
    switch (block.type) {
        case 'hero':
            return (
                <div className="space-y-3">
                    <input
                        type="text"
                        value={block.data.title as string}
                        onChange={(e) => onUpdate(block.id, { title: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                        placeholder="หัวข้อ"
                    />
                    <input
                        type="text"
                        value={block.data.subtitle as string}
                        onChange={(e) => onUpdate(block.id, { subtitle: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                        placeholder="คำอธิบาย"
                    />
                </div>
            );

        case 'text':
            return (
                <textarea
                    value={block.data.content as string}
                    onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white h-40 resize-none"
                    placeholder="เนื้อหา... (รองรับ Markdown: **bold**, ## heading, - list)"
                />
            );

        case 'cta':
            return (
                <div className="space-y-3">
                    <input
                        type="text"
                        value={block.data.title as string}
                        onChange={(e) => onUpdate(block.id, { title: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                        placeholder="หัวข้อ CTA"
                    />
                    <input
                        type="text"
                        value={block.data.button_text as string}
                        onChange={(e) => onUpdate(block.id, { button_text: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                        placeholder="ข้อความปุ่ม"
                    />
                    <input
                        type="url"
                        value={block.data.button_url as string}
                        onChange={(e) => onUpdate(block.id, { button_url: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                        placeholder="URL ปุ่ม"
                    />
                </div>
            );

        case 'testimonial':
            return (
                <div className="space-y-3">
                    <textarea
                        value={block.data.quote as string}
                        onChange={(e) => onUpdate(block.id, { quote: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white h-20 resize-none"
                        placeholder="คำพูด/รีวิว"
                    />
                    <input
                        type="text"
                        value={block.data.author as string}
                        onChange={(e) => onUpdate(block.id, { author: e.target.value })}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
                        placeholder="ชื่อผู้รีวิว"
                    />
                </div>
            );

        default:
            return <p className="text-gray-500 text-sm">Block editor not implemented</p>;
    }
}
