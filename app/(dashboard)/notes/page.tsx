import { createClient } from '@/utils/supabase/server';
import {cookies} from 'next/headers'

export default async function Page() {
    const supabase = createClient(cookies());
    const {data: notes} = await supabase.schema('public').from('notes').select()

    return <pre>{JSON.stringify(notes, null, 2)}</pre>
}