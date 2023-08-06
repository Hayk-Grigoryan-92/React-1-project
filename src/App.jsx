import React from 'react';
import './App.scss';
import Header from './components/Header';
import FirstContent from './components/Template1/FirstContent';
import SecondarySection from './components/Template1/SecondarySection/idex';
import Footer from './components/Footer';
import FirstContent2 from './components/Template2/FirstContent2';
import SecondarySection2 from './components/Template2/SecondarySection2/idex';
import FirstContent3 from './components/Template3/FirstContent3/index';


class App extends React.Component{
  render(){
    return  (
      <>
     
        <Header/>
        <FirstContent/>
        <SecondarySection/>
        <Footer/>
     
    
       {/* template 2
         <Header/>
       <div className='content'>
       <FirstContent2/>
       <SecondarySection2/>
       </div>
       <Footer/>
       */}
      
      {/* template 3 */}
      {/* <Header/>
      <div className='content'>
      <FirstContent3/>
      <FirstContent3/>
      </div>
      <SecondarySection/>
      <Footer/> */}
      
       
      </>
    )
  }
}

export default App