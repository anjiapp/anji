import {createClient} from '@utils/supabase/client'
import AccountForm from '@/components/AccountForm'

export default async function Account() {
    const supabase = createClient()

    const {data: {user}} = await supabase.auth.getUser()

    return <AccountForm user={user}/>
}