import React from 'react';
import { FaEye } from "react-icons";



function MemberInfo() {
  return (
    <div style={{textAlign: "left",lineHeight: '25px', borderRadius: '5px', mozBorderRadius: '5px', webkitBorderRadius: '5px', color: "black"}}>
      <div style={{ width: '100%', float: 'left', borderRadius: '5px', mozBorderRadius: '5px', webkitBorderRadius: '5px', backgroundColor: 'whitesmoke'}}>
        <article style={{ backgroundColor: 'white', lineHeight: '25px', borderRadius: '5px', mozBorderRadius: '5px', webkitBorderRadius: '50px', padding: '3% 5%', marginTop: '4%', marginBottom: '4%', marginLeft: '4%', marginRight: '4%'}}>
          <header>
            <h2>
             Member Cards
            </h2>
              <h5>
                <span style={{ display: 'inline-block', width:'200px'}}>TOTAL ALLOCATED</span>  
                <span style={{ display: 'inline-block', width:'200px'}}>TOTAL MEMBERS</span>
                <span1><button style={{backgroundColor: 'white', color: 'blue', borderRadius: '25px', border: '2px solid whitesmoke', position: 'relative', display: 'inline-block', overflow: 'hidden', textCverflow: 'ellipsis', marginTop: '4px', fontSize: '18px', height: '35px', margin: '4px 2px', float: 'right'}}>Add Funds</button></span1>
              </h5>
              
              <h1>
                <span style={{ display: 'inline-block', width:'200px'}}>$8,194.00</span>
                <span style={{ display: 'inline-block', width:'200px'}}>184</span>
              </h1>
          </header>
            <br></br>
              <hr></hr>
              <p>
                <span style={{display: 'inline-block', width: '1000px'}}><img src='images/img_avatar.png' style={{ verticalAlign: 'middle', width: '50px', height: '50px', borderRadius: '50%'}} alt='' />Christofer Workman</span>         
                <span style={{display: 'inline-block', width: '1000px', textAlign: 'right'}}>$2,490.00 &nbsp; &nbsp;<button style={{ backgroundColor: 'white', border:  'white', fontSize: '20px'}}></button></span>
              </p>
              <p>
                <span style={{display: 'inline-block', width: '1000px'}}><img src='images/img_avatar.png' style={{ verticalAlign: 'middle', width: '50px', height: '50px', borderRadius: '50%'}} alt='' />Jaxson Rosser</span>                          
                <span style={{display: 'inline-block', width: '1000px', textAlign: 'right'}}>$2,360.00 &nbsp; &nbsp;<button style={{ backgroundColor: 'white', border:  'white', fontSize: '20px'}}> </button></span>
              </p>
              <p>
                <span style={{display: 'inline-block', width: '1000px'}}><img src="images/img_avatar2.png" style={{ verticalAlign: 'middle', width: '50px', height: '50px', borderRadius: '50%'}} alt='' />Mira Carder</span>                            
                <span style={{display: 'inline-block', width: '1000px', textAlign: 'right'}}>$1,276.00 &nbsp; &nbsp;<button style={{ backgroundColor: 'white', border:  'white', fontSize: '20px'}}></button></span>
             </p>
             <p>
                <span style={{display: 'inline-block', width: '1000px'}}><img src="images/img_avatar2.png" style={{ verticalAlign: 'middle', width: '50px', height: '50px', borderRadius: '50%'}} alt='' />Desirae Passaquindici Arcand</span>            
                <span style={{display: 'inline-block', width: '1000px', textAlign: 'right'}}>$1,180.00 &nbsp; &nbsp;<button style={{ backgroundColor: 'white', border:  'white', fontSize: '20px'}}></button></span>
             </p>
        </article>

        <article style={{ backgroundColor: 'white', lineHeight: '25px', borderRadius: '5px', display: 'center', mozBorderRadius: '5px', webkitBorderRadius: '50px', padding: '3% 5%', marginBottom: '4%', marginLeft: '4%', marginRight: '4%'}}>
          <header>
              <h2>
               Card
              </h2>
          </header>
          <div style={{display: 'grid', alignItems: 'center', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '5px'}}>
            <div style={{ maxWidth: '100%', maxHeight: '100%'}}>
              <img src='images/visa.png' className='logo' alt=''/>
            </div>

            <div style={{fontSize: '20px'}}>
              <br></br>
              <p1 className='sp'>
                <span  style={{ display: 'inline-block', width: '830px',fontSize: 'xx-large'}}>.......   .....   ..... 4921</span>
              </p1>
              <p1>
                <span  style={{ display: 'inline-block', width: '830px', fontSize: 'x-large'}}>EXP: .../...   CSV: .....</span>
                <span style={{ display: 'inline-block', width: '830px', textAlign: 'right'}}><a href=' '><FaEye></FaEye></a> &nbsp; &nbsp; &nbsp;   ....</span>
              </p1>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default MemberInfo;