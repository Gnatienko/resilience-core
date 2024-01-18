const { OAuth2Client } = require("google-auth-library")
const jwt = require("jsonwebtoken")

class SignInController {
  async post(req, res) {
    try {
      const { credential, client_id } = req.body
      const client = new OAuth2Client()
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: client_id,
      })
      const payload = ticket.getPayload()
      const jwtToken = jwt.sign(payload, process.env.SECRET)
      return res.status(200).json({ jwtToken })
    } catch (error) {
      return res.status(400).json({ error: "Invalid token or client ID" })
    }
  }
}

module.exports = new SignInController()
