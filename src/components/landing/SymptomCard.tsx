import React from 'react';
import { Card } from '../ui/Card';

interface SymptomCardProps {
    icon: string;
    text: string;
}

export function SymptomCard({ icon, text }: SymptomCardProps) {
    return (
        <Card className="symptom-badge">
            <span className="text-4xl">{icon}</span>
            <span className="font-semibold text-base sm:text-lg">{text}</span>
        </Card>
    );
}
