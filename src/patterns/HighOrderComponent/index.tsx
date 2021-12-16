import React from 'react'
import Displayer from './Displayer';
import withData from './withData';


const HighOrderComponent = () => {
    const Display = withData(Displayer);
   return (
       <div>
           <Display />
       </div>
   )
}
export default HighOrderComponent;