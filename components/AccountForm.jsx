'use client'
import {useCallback, useEffect, useState} from 'react'
import {createClient} from '@/utils/supabase/client'
import Link from "next/link";

export default function AccountForm({user}) {
    const supabase = createClient()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)
            if (user) {
                console.log(user)
                setFullname(user.user_metadata.full_name);
                setAvatarUrl(user.user_metadata.picture);
            }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    async function updateProfile({username, avatar_url}) {
        try {
            setLoading(true)

            const {error} = await supabase.from('profiles').upsert({
                id: user?.id,
                full_name: fullname,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="form-widget">
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" value={user?.email} disabled/>
            </div>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                    id="fullName"
                    type="text"
                    value={fullname || ''}
                    onChange={(e) => setFullname(e.target.value)}
                />
            </div>

            <div>
                <button
                    className="button primary block"
                    onClick={() => updateProfile({fullname, avatar_url})}
                    disabled={loading}
                >
                    {loading ? 'Loading ...' : 'Update'}
                </button>
            </div>

            <Link href={'/auth/signout'} className={"button block"}>
                Sign out
            </Link>
        </div>
    )
}