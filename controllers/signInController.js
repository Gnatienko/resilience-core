class SignInController {
  async get(req, res) {
    return res.send("Ok")
  }
}

module.exports = new SignInController()
