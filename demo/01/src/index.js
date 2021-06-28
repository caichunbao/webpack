console.log('111');

import './index.css'
import './index.less'


import pic from './index.png'
let img = new Image()
img.src = pic
let app = document.getElementById('app')
app.appendChild(img)