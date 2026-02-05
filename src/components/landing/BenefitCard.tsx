import React from 'react';
import { Card } from '../ui/Card';

interface BenefitCardProps {
    text: string;
    icon?: string;
}

export function BenefitCard({ text, icon = "✅" }: BenefitCardProps) {
    return (
        <Card className="benefit-item">
            <span className="benefit-check text-lg">{icon}</span>
            <span className="text-lg sm:text-xl font-semibold">{text}</span>
        </Card>
    );
}
