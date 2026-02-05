import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-side Supabase client with service role key
export const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Database types
export interface DbArticle {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: object | null;
    featured_image: string | null;
    meta_title: string | null;
    meta_description: string | null;
    keywords: string[] | null;
    status: string;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface DbWebblock {
    id: string;
    name: string;
    type: string;
    config: object | null;
    created_at: string;
}

export interface DbSiteSetting {
    id: string;
    key: string;
    value: object | null;
    updated_at: string;
}
