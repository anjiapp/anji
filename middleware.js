import {createServerClient} from '@supabase/ssr'
import {NextResponse} from 'next/server'

export async function middleware(req) {
    let res = NextResponse.next({
        request: {
            headers: req.headers,
        },
    })
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name) {
                    return req.cookies.get(name)?.value
                },
                set(name, value, options) {
                    req.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    res = NextResponse.next({
                        request: {
                            headers: req.headers,
                        },
                    })
                    res.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name, options) {
                    req.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    res = NextResponse.next({
                        request: {
                            headers: req.headers,
                        },
                    })
                    res.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    await supabase.auth.getUser()

    return res
}

export const config = {
    matcher: ['/dashboard', '/deck', '/login', '/account'],
}