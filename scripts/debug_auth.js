
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // Use Service Role to see all users
);

async function checkUsers() {
    console.log('--- Checking Supabase Auth Users ---');

    const { data: { users }, error } = await supabase.auth.admin.listUsers();

    if (error) {
        console.error('Error fetching users:', error);
        return;
    }

    if (!users || users.length === 0) {
        console.log('No users found in Supabase.');
    } else {
        console.log(`Found ${users.length} users:`);
        users.forEach(u => {
            console.log(`\nID: ${u.id}`);
            console.log(`Email: ${u.email}`);
            console.log(`Email Confirmed At: ${u.email_confirmed_at ? u.email_confirmed_at : '❌ NOT CONFIRMED (Pending)'}`);
            console.log(`Last Sign In: ${u.last_sign_in_at}`);
            console.log(`Metadata:`, u.user_metadata);
        });
    }
    console.log('\n------------------------------------');
}

checkUsers();
