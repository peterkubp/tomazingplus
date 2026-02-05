import React from 'react';
import { Card } from '../ui/Card';

interface StatCardProps {
    number: string;
    label: string;
}

export function StatCard({ number, label }: StatCardProps) {
    return (
        <Card className="stat-card">
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
        </Card>
    );
}
