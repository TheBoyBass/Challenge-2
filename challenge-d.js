import company from './config'
import year from './config'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
