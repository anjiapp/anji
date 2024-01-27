'use client'
import {Auth} from '@supabase/auth-ui-react'
import {ThemeSupa} from '@supabase/auth-ui-shared'
import {createClient} from '@/utils/supabase/client'

export default function AuthForm() {
    const supabase = createClient();

    return (
        <Auth
            supabaseClient={supabase}
            view="magic_link"
            appearance={{theme: ThemeSupa}}
            // theme="dark"
            // showLinks={false}
            providers={['apple','google', 'facebook', 'twitter',  'azure']}
            redirectTo="http://localhost:3000/auth/callback"
        />
    )
}