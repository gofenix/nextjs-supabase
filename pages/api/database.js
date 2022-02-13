export default async (req, res) => {
    console.log(req)
    console.log(res)
    return res.status(200).json({"hello": "world"})
}