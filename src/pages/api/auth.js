export default async (req, res) => {
  if (req.method === 'POST') {
    if (req.body.password === '12345') {
      return res.status(200).json({ "message": "Login successfull" })
    }

    return res.status(401).json({ "message": "Invalid password" })
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}