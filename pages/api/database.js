import { supabase } from "../../lib/initSupabase"

const database = async (req, res) => {
    

    const {data}  = await supabase.from('zzftest').select('*')
    console.log(data)

    // const auth_res = await supabase.auth.signUp({email: "zhuzhenfeng1993@gmail.com", password: "123456"})
    // console.log(auth_res)

    const a = await supabase.auth.signIn({email: "zhuzhenfeng1993@gmail.com", password: "123456"})
    console.log(a)

    return res.status(200).json({ "hello": data })
}

export default database