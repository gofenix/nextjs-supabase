import { supabase } from "../../lib/initSupabase"

const token = async (req, res) => {

    const { access_token } = req.query
    console.log(access_token)

    const { data: user, error } = await supabase.auth.api.getUser(access_token)

    const da = await supabase.from("zzftest").select("*").eq('name', "zhuzhenfeng")
    console.log(da)


    return res.status(200).json({ data: user, error , da})

}

export default token