import {createClient} from '@/utils/supabase/server'
import {NextResponse} from 'next/server'
import {cookies} from "next/headers";

export async function GET(req) {
    const supabase = createClient(cookies())

    const {searchParams} = new URL(req.url)
    const code = searchParams.get('code')

    if (code) {
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(new URL('/dashboard', req.url))
}