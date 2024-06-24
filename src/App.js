// import React, { useState } from 'react'

// function App() {
//   let data = [
//     {
//       question: "How many bones does a cat have?",
//       answer: "A cat has 230 bones - 6 more than a human",
//     },
//     {
//       question: "How much do cats sleep?",
//       answer: "The average cat sleeps 12-16 hours per day",
//     },
//     {
//       question: "How long do cats live?",
//       answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
//     },
//   ]

//   const [showIndex, setShowIndex] = useState(null);

//   const dikha = (index) => {
//     setShowIndex(prev => prev === index ? null : index)
//   }

//   return (
//     <>
//       <div className='main'>
//         {
//           data.map((val, index) => {
//             return (
//               <div className='data' key={index}>
//                 <div style={{ border: "2px solid black" }}>
//                   <h1>{val.question}</h1>
//                   {showIndex === index && <h1>{val.answer}</h1>}
//                   <button onClick={() => dikha(index)}>
//                   {showIndex === index ? "hide" : "show"}
//                   </button>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </>
//   )
// }

// export default App
import React from 'react'
// import Light from './Light-Dark/Light'
import Mortage from './Mortage/Mortage'
// import Color from './components/Randomcolor/Color'
// import Star from './components/Randomcolor/starrating/Star'
// import Slide from './imageSlider/Slide'
// import Load from './components/Randomcolor/loadmore/Load'
// import Folder from './treeGraph/Folder'
// import {files} from './treeGraph/Data'
// import Qr from './QRCodeGenerator/Qr'

function App() {
  return (
  <>
    {/* <Color/> */}
    {/* <Star/> */}
    {/* <Slide/> */}
    {/* <Load/> */}
    {/* <Folder file={files}/> */}
    {/* <Qr/> */}
    {/* <Light/> */}
    <Mortage/>
  </>
  )
}

export default App