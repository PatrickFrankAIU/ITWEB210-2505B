let email = document.getElementById('email')

const maskEmail = (email) => {
  let atSplit = email.split('@')
  let firstPart = atSplit[0]
  let dotCom = atSplit[1]
  let firstLetter = firstPart.charAt(0)
  let result = ''
  let star = '*'

  for (let i = 1; i < firstPart.length; i++) {
    result += star
  }
  return `${firstLetter}${result}@${dotCom}`
}

