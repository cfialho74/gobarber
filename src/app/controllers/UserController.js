const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    if (!req.file) {
      req.flash('error', 'Avatar não informado')
      return res.redirect('/signup')
    }

    const avatar = req.file.filename

    const { name, email, password } = req.body

    if (name === '') {
      req.flash('error', 'Nome não informado')
      return res.redirect('/signup')
    }

    if (email === '') {
      req.flash('error', 'E-mail não informado')
      return res.redirect('/signup')
    }

    if (password === '') {
      req.flash('error', 'Senha não informada')
      return res.redirect('/signup')
    }

    await User.create({ ...req.body, avatar })

    return res.redirect('/')
  }
}

module.exports = new UserController()
