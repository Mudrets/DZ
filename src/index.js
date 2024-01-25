import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Left_bar from './Left_bar';
import Global from './Global_info';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Left_bar 
    number="096 394 27 47" 
    email="randomemail@gmail.com"
    ts={['HTML 5','CSS3','JS','Git',]} 
    ss={['VScode','AutoCad','Civil3D']}/>
    <Global 
    date='25.01.24'
    name='Mykyta Goncharuk'
    education='Technical college'
    educationDate='October 1932 to June 2045'
    info='
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, beatae voluptates omnis est molestiae 
    illo quos provident a ratione minus. Molestiae esse doloribus, itaque consequuntur possimus quis quam architecto nulla!
    '/>
  </React.StrictMode>
);

reportWebVitals();
