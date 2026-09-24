import {NextResponse} from 'next/server';
export async function GET(){return NextResponse.json({supabaseUrl:process.env.NEXT_PUBLIC_SUPABASE_URL||'',supabaseKey:process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'',chat:Boolean(process.env.OPENAI_API_KEY),checkout:Boolean(process.env.STRIPE_SECRET_KEY),model:process.env.CHAT_MODEL||'OpenAI'});}
