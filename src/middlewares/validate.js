const validate = (property, schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property])

    if (!error) {
      next()
      return
    }

    const errors = error.details.map(detail => detail.message)
    res.status(422).json({ error: errors })

  }
}

module.exports = validate
