const extendError = (error, otherProps) => {
  const extended = error instanceof Error ? error : new Error(error)
  for (const prop in otherProps) {
    extended[prop] = otherProps[prop]
  }
  return extended
}

const statusError = (status, message) => extendError(message, { status })

const responseError = (res, error) => {
  let status = error.status
  let message = error.message || error.error || error
  if (typeof status !== 'number') status = 500
  console.log(message)
  return res.status(status).send({ error: message })
}

module.exports = {
  extendError,
  statusError,
  responseError
}