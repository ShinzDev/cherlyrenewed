import React from 'react'
import Card from './Card'


const App = () => {

let image1 = 'https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/fashion_220x220.png';
let image2 = 'https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/accessories_220x220.png';
let image3 = 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/01-thumbnails/Television.jpg';
let image4 = 'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/01-thumbnails/refreigerator.jpg';
let image5 = 'https://ng.jumia.is/cms/0-1-christmas-sale/2022/thumbnails/phones_220x220.png';

let title1 = 'Shoe';
let title2 = 'Accessories'
let title3 = 'Television'
let title4 = 'Fridge'
let title5 = 'Mobile Phone'

let desc1 = 'Good Shoe'
let desc2 = 'Good Accessories'
let desc3 = 'Goood Television'
let desc4 = 'Good fridge'
let desc5 = 'Good Phone'

let price1 = 'N10,000'
let price2 = 'N8000'
let price3 = 'N250,000'
let price4 = 'N400,000'
let price5 = 'N1,200,000'


  return (
    <div className='d-flex flex-wrap'>
     <Card juwon={image1} title={title1} desc={desc1} price={price1}/>
     <Card juwon={image2} title={title2} desc={desc2} price={price2}/>
     <Card juwon={image3} title={title3} desc={desc3} price={price3}/>
     <Card juwon={image4} title={title4} desc={desc4} price={price4}/>
     <Card juwon={image5} title={title5} desc={desc5} price={price5}/>

     <Card juwon={image1} title={title1} desc={desc1} price={price1}/>
     <Card juwon={image2} title={title2} desc={desc2} price={price2}/>
     <Card juwon={image3} title={title3} desc={desc3} price={price3}/>
     <Card juwon={image4} title={title4} desc={desc4} price={price4}/>
     <Card juwon={image5} title={title5} desc={desc5} price={price5}/>

     <Card juwon={image1} title={title1} desc={desc1} price={price1}/>
     <Card juwon={image2} title={title2} desc={desc2} price={price2}/>
     <Card juwon={image3} title={title3} desc={desc3} price={price3}/>
     <Card juwon={image4} title={title4} desc={desc4} price={price4}/>
     <Card juwon={image5} title={title5} desc={desc5} price={price5}/>
      
      
    </div>
  )
}

export default App
