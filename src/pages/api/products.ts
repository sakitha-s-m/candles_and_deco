import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const filterKey = req.query.filterKey as string;

    let query = supabase.from("products").select("*")

    if (filterKey) {
        query = query.eq(filterKey, true)
    }

    const { data, error } = await query

    if ( error ) return res.status(500).json({ error: error.message })
        res.status(200).json(data)
}