import { Block } from '@/lib/articles';
import { ReactNode } from 'react';

// Block renderer component
export function BlockRenderer({ block }: { block: Block }) {
    switch (block.type) {
        case 'hero':
            return <HeroBlock data={block.data} />;
        case 'text':
            return <TextBlock data={block.data} />;
        case 'image':
            return <ImageBlock data={block.data} />;
        case 'cta':
            return <CTABlock data={block.data} />;
        case 'faq':
            return <FAQBlock data={block.data} />;
        case 'testimonial':
            return <TestimonialBlock data={block.data} />;
        default:
            return null;
    }
}

// Hero Block
function HeroBlock({ data }: { data: Record<string, unknown> }) {
    const title = data.title as string | undefined;
    const subtitle = data.subtitle as string | undefined;

    return (
        <div className="relative py-16 md:py-24 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-3xl mb-8">
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-gray-300">{subtitle}</p>
                )}
            </div>
        </div>
    );
}

// Text Block with Markdown-like rendering
function TextBlock({ data }: { data: Record<string, unknown> }) {
    const content = (data.content as string) || '';

    // Parse bold text (**text**)
    const parseBoldText = (text: string): ReactNode[] => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return <strong key={index} className="text-white font-semibold">{part}</strong>;
            }
            return part;
        });
    };

    // Simple markdown-like parsing
    const parseContent = (text: string): ReactNode[] => {
        const lines = text.split('\n');
        return lines.map((line, index) => {
            // Headers
            if (line.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4 gradient-text">
                        {line.replace('## ', '')}
                    </h2>
                );
            }
            if (line.startsWith('# ')) {
                return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                        {line.replace('# ', '')}
                    </h1>
                );
            }

            // List items
            if (line.startsWith('- ')) {
                return (
                    <li key={index} className="ml-6 mb-2 text-gray-300">
                        {parseBoldText(line.replace('- ', ''))}
                    </li>
                );
            }

            // Numbered list
            if (/^\d+\.\s/.test(line)) {
                return (
                    <li key={index} className="ml-6 mb-2 text-gray-300 list-decimal">
                        {parseBoldText(line.replace(/^\d+\.\s/, ''))}
                    </li>
                );
            }

            // Empty line
            if (line.trim() === '') {
                return <br key={index} />;
            }

            // Regular paragraph
            return (
                <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                    {parseBoldText(line)}
                </p>
            );
        });
    };

    return (
        <div className="prose prose-invert max-w-none mb-8">
            {parseContent(content)}
        </div>
    );
}

// Image Block
function ImageBlock({ data }: { data: Record<string, unknown> }) {
    const url = data.url as string | undefined;
    const alt = (data.alt as string) || '';
    const caption = data.caption as string | undefined;

    return (
        <figure className="mb-8">
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                {url ? (
                    <img
                        src={url}
                        alt={alt}
                        className="w-full h-full object-cover rounded-xl"
                    />
                ) : (
                    <span className="text-6xl">🖼️</span>
                )}
            </div>
            {caption && (
                <figcaption className="text-center text-gray-400 mt-2">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

// CTA Block
function CTABlock({ data }: { data: Record<string, unknown> }) {
    const title = data.title as string | undefined;
    const description = data.description as string | undefined;
    const buttonUrl = (data.button_url as string) || 'https://lin.ee/riWkqmk';
    const buttonText = (data.button_text as string) || 'ติดต่อเรา';

    return (
        <div className="card text-center bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500/50 my-8">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            {description && (
                <p className="text-gray-300 mb-6">{description}</p>
            )}
            <a
                href={buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
            >
                {buttonText}
            </a>
        </div>
    );
}

// FAQ Block
function FAQBlock({ data }: { data: Record<string, unknown> }) {
    const items = (data.items as Array<{ q: string; a: string }>) || [];

    return (
        <div className="space-y-4 my-8">
            {items.map((item, index) => (
                <details key={index} className="card group">
                    <summary className="cursor-pointer font-semibold flex justify-between items-center">
                        {item.q}
                        <span className="text-red-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-300">{item.a}</p>
                </details>
            ))}
        </div>
    );
}

// Testimonial Block
function TestimonialBlock({ data }: { data: Record<string, unknown> }) {
    const quote = data.quote as string | undefined;
    const author = data.author as string | undefined;
    const role = data.role as string | undefined;

    return (
        <blockquote className="card border-l-4 border-red-500 my-8">
            <p className="text-xl italic mb-4">&quot;{quote}&quot;</p>
            <footer className="text-gray-400">
                — {author}
                {role && <span>, {role}</span>}
            </footer>
        </blockquote>
    );
}
