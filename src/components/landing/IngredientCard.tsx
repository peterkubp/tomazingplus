import React from 'react';
import { Card } from '../ui/Card';

interface IngredientCardProps {
    emoji: string;
    name: string;
    desc: string;
}

export function IngredientCard({ emoji, name, desc }: IngredientCardProps) {
    return (
        <Card className="text-center py-6">
            <div className="text-5xl sm:text-6xl mb-3">{emoji}</div>
            <p className="font-bold text-lg sm:text-xl mb-1">{name}</p>
            <p className="text-gray-500 text-sm sm:text-base">{desc}</p>
        </Card>
    );
}
