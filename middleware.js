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

    const {data : {user}} = await supabase.auth.getUser()
    const url = req.nextUrl.clone()

    if (!user && url.pathname !== '/login') {
        url.pathname = '/login'
        res = NextResponse.redirect(url)
    }

    if (user && url.pathname === '/login') {
        url.pathname = '/dashboard'
        res = NextResponse.redirect(url)
    }
    return res
}

export const config = {
    matcher: ['/dashboard', '/deck', '/login', '/account'],
}