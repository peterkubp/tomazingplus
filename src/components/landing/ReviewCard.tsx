import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/Card';

interface ReviewCardProps {
    name: string;
    quote: React.ReactNode;
    image?: string;
    rating?: number;
}

export function ReviewCard({ name, quote, image, rating = 5 }: ReviewCardProps) {
    return (
        <Card className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg border-4 border-red-100">
                        {image ? (
                            <Image
                                src={image}
                                alt={name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">👤</div>
                        )}
                    </div>
                </div>
                <div className="text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start gap-1 mb-3 text-yellow-400 text-2xl">
                        {[...Array(rating)].map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                    <p className="text-xl sm:text-2xl text-gray-700 italic mb-4">
                        &quot;{quote}&quot;
                    </p>
                    <p className="font-bold text-lg text-gray-900">— {name}</p>
                </div>
            </div>
        </Card>
    );
}
