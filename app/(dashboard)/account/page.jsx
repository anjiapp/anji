import {createClient} from '@/utils/supabase/server'
import AccountForm from '@/components/AccountForm'
import {cookies} from 'next/headers'

const supabase = createClient(cookies())
export default async function Account() {
    const {data: {user}} = await supabase.auth.getUser()

    return <AccountForm user={user}/>
}