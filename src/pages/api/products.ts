import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const featured = req.query.featured == "true"

    let query = supabase.from("products").select("*")

    if (featured) {
        query = query.eq("is_featured", true)
    }

    const { data, error } = await query

    if ( error ) return res.status(500).json({ error: error.message })
        res.status(200).json(data)
}