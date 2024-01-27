import {createClient} from '@/utils/supabase/server'
import {cookies} from 'next/headers'
import {NextResponse} from 'next/server'

export async function GET(req) {
    const supabase = createClient(cookies());

    // Check if we have a session
    const {data: {user},} = await supabase.auth.getUser()

    if (user) {
        await supabase.auth.signOut()
    }

    return NextResponse.redirect(new URL('/', req.url), {
        status: 302,
    })
}