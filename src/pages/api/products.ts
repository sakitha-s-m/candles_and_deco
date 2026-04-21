import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await supabase.from('products').select('*')

    console.log('data:', data)
    console.log('error:', error)

    if ( error ) return res.status(500).json({ error: error.message })
        res.status(200).json(data)
}