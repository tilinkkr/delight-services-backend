
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// --- CONFIG ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; // Using Service Role Key is best for seeding, but anon works if RLS allows

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// --- DATA ---
const products = [
    {
        name: 'Nawabi Oud Essence',
        description: 'Exquisite long-lasting woody notes inspired by royal evenings.',
        price: 2499,
        category: 'perfume',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlxxTWJdc7Xu2yTThhpyzBw2GzS4tSzTCJWaIGXWlkYT90YeM7Mlt9X3PWnkmT5AawOgWKVGYDxAIvmfYnhtC-M-oIfoALL7ySuM17mMqKG3C-lZafgc_ldMcA3SqLwYrD2WZguMDy1PZiito7EpVJK62wEqX-ojMLgnJ3pnAfxAAzsbEG3P6MVucWtuyaYd3DFZ8wkXsoqEX1nGAnINnuGIc-HxIA_1Kw2nqxLOlVJ4UaVIL5IQ0WLwKKyO6sitd_q85utQFjqg4',
        stock_status: 'in_stock',
        is_featured: true
    },
    {
        name: 'Mysore Sandalwood',
        description: '100% Organic ingredients, hand-rolled for purity and prayer.',
        price: 999,
        category: 'incense',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSRx448dEHFMfxMchEK2Q0JiUETG3MaBfV7_v4bLlYErDJbcmwqXOJOHuu1ZGZJ0ZQTlOdluLhgF0j3Dilb9ZXVHHCSUgxROoyvyekHnUN6LFs1_ZaFhYDwIJh1ml9-TF4zTRgjY_0KFBMEBj7_ZGhVoOaxgmLogZQH6AxwIU8yvev_3SqrOBhOmHukMKF8k1OviDZ2sYITctzZGwOENIE9yo5NCNDBzX7ilGsMcLBe3MlIaR3-zK9XJOyvMeqv0VRxD_C6RfkqeM',
        stock_status: 'in_stock',
        is_featured: true
    },
    {
        name: 'Himalayan Lavender',
        description: 'Calming evening fragrance harvested from high altitudes.',
        price: 1299,
        category: 'perfume',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwPnv5Jur1-LSPZSVHZx5hHo57FNb-SBGgdMvmGeWaG45nR-MsFshZVnTOaQqkdeR1VpQ5Rn1R5-a4iCumzo--vDse_IqrF2SD-KX9u9KZGulgqirZTN_IsXGDCdj-kGM1v-1G1BGchvr2YZ4qRkgr8K4Ufo1b95H2HsrYiCsingraXAejIxYhUhJnsKrbOlI6guHNLoXUxhYCfSuuhxBqH3tUrUWKzcfAc7om0vI5EOuzhSSlHC-gNJRwy6Uj4rIZnuIRt88rgYo',
        stock_status: 'in_stock',
        is_featured: false
    },
    {
        name: 'Jaipur Rose Attar',
        description: 'Pure essential oil extract, distilled using ancient techniques.',
        price: 1499,
        category: 'oil',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_lwj2D9nrmLW69PpyXP0MrLQdJK61D-1C8SnfejHKZ3uB3WGiJ2j7Z1XmPsb-_PdviZAgboo4xg7VXqJnLhEBifb7alUpIFOPRpZst1x8MIQYDTRg7K7CjQs223OQF2NzUZW5hSpy6cJYmr_cKthhAfdAhGLTBXASPN1cgOlcKJeBkfxfb_ixFXHMFRSn_PRxyJJV7RGZOOULpmizRjsWyqJtwz238UxZjSSIzDLEMN6ygh3y3UbUH8msAJR1dzfCGJeaRxjeO48',
        stock_status: 'low_stock',
        is_featured: false
    },
    {
        name: 'Mountain Cedarwood',
        description: 'Earthy and grounding scent perfect for meditation spaces.',
        price: 1199,
        category: 'perfume',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk2xwU9zdc0a1pwW5elwr6TQwEzCkHcTe6MmYTcr9g-b8SwU430YtnhY0ZtQmlRTLPQVNkt_egv-i-At2qGrs4ER27TUu7oULj5nYpbuMqVDCjLe-Gr1KKpsPMPpWEBk3F0L1QGDNaRoY9x6VvAwBl6b54uN1fkZCM6MI8poct8vZ9Wgq6m7EwR7l0th-oxTxOJSNMGUow0TzsBHvISiFe1q1Me7cbSgR-bk44EbEv2Frq9Hc4hlt7rGVWvjVuNCz0sqbW4Dp4AIA',
        stock_status: 'in_stock',
        is_featured: false
    },
    {
        name: 'Madurai Jasmine',
        description: 'Fresh morning bloom scent with sweet southern undertones.',
        price: 1899,
        category: 'perfume',
        image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3c6G4csyZFquIfFKj8bbhrB8LNvssl8dZFwE6PDzioL568ONVS-xlgn_5NQGf0Pu7d6qQMReDgzlcleS3wzxOLpVsLGBX1GLqhiuADKXX1VwbcyIdVpeiF_RQ6wk4SRUGdXmoVkQlyPAAsb4EBXK_k7-Whij0N4Jr9O9CCjkHEMANRZQSx46pRG9eMdhcKXFRr61XU4aI8rEkWfF99P15j41hmpX6BMhB58xMBBVedKYQnaRSUMftH0la5KrrGF06DB55g2BuB_I',
        stock_status: 'in_stock',
        is_featured: false
    }
];

const services = [
    {
        name: 'Lakshmi Wealth Plan',
        type: 'investment',
        description: 'Comprehensive financial protection tailored for family legacy.',
        min_investment: 50000,
        features: ['Advisory', 'Legacy Planning', 'Custom Portfolio']
    },
    {
        name: 'Health Elite+',
        type: 'insurance',
        description: 'Comprehensive protection for you and your loved ones against rising medical costs.',
        min_investment: 15000,
        features: ['Cashless', 'No Claim Bonus', 'Family Floater']
    },
    {
        name: 'Term Life Secure',
        type: 'insurance',
        description: 'Secure your family\'s financial future even when you are not around.',
        min_investment: 10000,
        features: ['High Cover', 'Critical Illness Rider', 'Tax Benefits']
    },
    {
        name: 'Motor Shield',
        type: 'insurance',
        description: 'Drive with confidence knowing your vehicle is protected against the unexpected.',
        min_investment: 5000,
        features: ['Zero Dep', 'RSA', 'Key Replacement']
    },
    {
        name: 'Smart Stocks',
        type: 'investment',
        description: 'Expert tools and insights to help you navigate the stock market efficiently.',
        min_investment: 25000,
        features: ['Intraday Tips', 'Long Term Calls', 'Portfolio Review']
    },
    {
        name: 'Growth Mutual Funds',
        type: 'investment',
        description: 'Disciplined wealth creation through professionally managed portfolios.',
        min_investment: 500,
        features: ['SIP', 'ELSS', 'Direct Plans']
    }
];

async function seed() {
    console.log('🌱 Starting Seed Process...');

    // 1. Seed Products
    console.log(`Inserting ${products.length} products...`);
    const { error: prodError } = await supabase.from('products').insert(products);

    if (prodError) {
        console.error('Error inserting products:', prodError.message);
    } else {
        console.log('✅ Products seeded successfully.');
    }

    // 2. Seed Services
    console.log(`Inserting ${services.length} services...`);
    const { error: servError } = await supabase.from('services').insert(services);

    if (servError) {
        console.error('Error inserting services:', servError.message);
    } else {
        console.log('✅ Services seeded successfully.');
    }

    console.log('✨ Seeding Completed!');
}

seed();
