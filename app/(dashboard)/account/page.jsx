import {createClient} from '@/utils/supabase/client'
import AccountForm from '@/components/AccountForm'

const supabase = createClient()
export default async function Account() {
    const {data: {user}} = await supabase.auth.getUser()

    return <AccountForm user={user}/>
}