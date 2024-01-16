const { OAuth2Client } = require("google-auth-library")

class SignInController {
  async post(req, res) {
    try {
      console.log(req.body)
      const { credential, client_id } = req.body
      const client = new OAuth2Client()
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: client_id,
      })
      const payload = ticket.getPayload()
      return res.status(200).json({ payload })
    } catch (error) {
      return res.status(400).json({ error: "Invalid token or client ID" })
    }
  }
}

module.exports = new SignInController()
