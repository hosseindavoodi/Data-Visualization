import React,{useState,useEffect} from 'react';
import './style.css';


function App() {
 
  const [Form1,setForm1]=useState('4-2-3-1');
  const [Form2,setForm2]=useState('4-4-2');
 
     
const formation = {
    f4231: [
      {	
      "top": 50,	"left": 0
      },	{
      "top": 20,	"left": 9
      },	{
      "top": 40,	"left": 9
      },	{
      "top": 60,	"left": 9
      }, {
      "top": 80,	"left": 9
      }, {
      "top": 33,	"left": 19
      },	{
      "top": 65,	"left": 19
      },	{
      "top": 25,	"left": 27
      },	{
      "top": 50,	"left": 27
      },	{
      "top": 75,	"left": 27
      },	{
      "top": 50,	"left": 37 }
      ],
      
      
      
      f433: [
      {
      "top": 50,	"left": 0  
      },	{
      "top": 20,	"left": 10
      },	{
      "top": 40,	"left": 10
      },	{
      "top": 60,	"left": 10
      },	{
      "top": 80,	"left": 10
      },  {	
        "top": 25,	"left": 20
      },	{
      "top": 50,	"left":  20
      },	{
      "top": 75,	"left":  20
      },	{
      "top": 25,	"left": 30
      }, {
      "top": 50,	"left": 30
      }, {
      "top": 75,	"left": 30
      }	
      ],
      
      
      
      f442: [
      {
      "top": 50,	"left": 0  
      },  {
      "top": 20,	"left": 10
      },	{
      "top": 40,	"left": 10
      },	{
      "top": 60,	"left": 10
      },	{
      "top": 80,	"left": 10
      },  {
      "top": 20,	"left":  20
      },	{
      "top": 40,	"left": 20
      },  {
      "top": 60,	"left": 20
      },  {
      "top": 80,	"left": 20
      },  {	
      "top": 40,	"left": 30
      },	{
      "top": 60,	"left": 30
      }	
      ],
      
      
      f4411: [
      {
      "top": 50,	"left": 0  
      },	{
      "top": 20,	"left": 10
      },	{
      "top": 40,	"left": 10
      },	{
      "top": 60,	"left": 10
      },	{
      "top": 80,	"left": 10
      },  {
      "top": 20,	"left": 20
      },	{
      "top": 40,	"left": 20
      },  {
      "top": 60,	"left": 20
      },  {
      "top": 80,	"left": 20
      },	{
      "top": 50,	"left": 30
      },	{	
      "top": 50,	"left": 40
      }
      ],
      
      f4321: [
         {	"top": 50,	"left": 0
      },	{
      "top": 20,	"left": 9
      },	{
      "top": 40,	"left": 9
      },	{
      "top": 60,	"left": 9
      },  {
      "top": 80,	"left": 9
      },  {
      "top": 25,	"left": 19
      },	{
      "top": 50,	"left": 19
      },	{
      "top": 75,	"left": 19
      },  {
      "top": 33,	"left": 27
      },	{
      "top": 65,	"left": 27
      },	{
      "top": 50,	"left": 37 }
      ]
    }
    
    let HomeFF = Form1;
    let AwayFF = Form2;
    let HFF ;
    
   
    HomeFF === "4-2-3-1" ? HFF = formation.f4231
    :
    HomeFF === "4-3-3" ? HFF = formation.f433
    :
    HomeFF === "4-4-2" ? HFF = formation.f442
    :	
    HomeFF === "4-4-1-1" ? HFF = formation.f4411
    :
    HomeFF === "4-3-2-1" ? HFF = formation.f4321
    :
    <></>	
    
    
    let AFF;
    AwayFF === "4-2-3-1"? AFF = formation.f4231
    :
    AwayFF === "4-3-3"? AFF = formation.f433
    :
    AwayFF === "4-4-2"? AFF = formation.f442
    :	
    AwayFF === "4-4-1-1"? AFF = formation.f4411
    :	
    AwayFF === "4-3-2-1"? AFF = formation.f4321
    :	
    <></>
    
    let Aplayerscircle = [];
      let Hplayerscircle = [];
    
    
      for (var i = 0; i < 11; i++) {
        
        
        const aaa = {
          top: HFF[i].top + 3 + "%", left: HFF[i].left + "%"
        }
                  
        Hplayerscircle.push(
        
        <div>
         <span key={i} className="Lscor_football_absolute Lscor_football_text_center" style={aaa}>
                <span className="Lscor_football_grid_player wrapper wrapper1">
                  
                </span>
              </span>
              </div>
     
       )
    
    const bbb = {
      top: AFF[i].top + "%", right: AFF[i].left + 9 + "%"
    }
              
    Aplayerscircle.push(
    <>
     <span key={i} className="Lscor_football_absolute Lscor_football_text_center" style={bbb}>
            <span className="Lscor_football_grid_player wrapper wrapper2">
            </span>
          </span>
    
    </>)
    }
    
    
        return (
          <div className='maindiv'>
        <select style={{float: "left"}}>
          <option value="1" onClick={()=> setForm1('4-2-3-1')}>4-2-3-1</option>
          <option value="2" onClick={()=> setForm1('4-3-3')}>4-3-3</option>
          <option value="3" onClick={()=> setForm1('4-4-2')}>4-4-2</option>
          <option value="4" onClick={()=> setForm1('4-4-1-1')}>4-4-1-1</option>
          <option value="4" onClick={()=> setForm1('4-3-2-1')}>4-3-2-1</option>

        </select>
        <select style={{float: "right"}}>
        <option value="1" onClick={()=> setForm2('4-4-2')}>4-4-2</option>
          <option value="2" onClick={()=> setForm2('4-3-3')}>4-3-3</option>
          <option value="3" onClick={()=> setForm2('4-2-3-1')}>4-2-3-1</option>
          <option value="4" onClick={()=> setForm2('4-4-1-1')}>4-4-1-1</option>
          <option value="4" onClick={()=> setForm2('4-3-2-1')}>4-3-2-1</option>
        </select>
         
         <table id="fixture_lineups" className="Lscor_football_toggle_content Lscor_football_hide">
      <tbody>
        <tr>
    
          <td id="lineups_grid" className="Lscor_football_grid height" colSpan="2">
            <span id="Hplayerscircle">
            {Hplayerscircle}
    
            </span>
    
            <span id="Aplayerscircle">
              
            {Aplayerscircle}
            </span>
          </td>
        </tr>
    
      </tbody>
    </table>
    </div>  
          
        );
}

export default App;
