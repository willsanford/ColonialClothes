// import type { NextComponentType } from "next";
// import Script from "next/script";
// import $ from "jquery";

// const HistTimeline: NextComponentType = () => {
//   return (
//     <>
//         <main className="">
//             <Script 
//             src="https://cdn.histropedia.com/histropedia-1.2.0.min.js" 
//             strategy="beforeInteractive"
//             onLoad={() => {console.log("Load")}}
//             onReady={() => {
//                 console.log("Ready");
//                 var myTimeline = new Histropedia.Timeline();
//             }}
//             />
//       </main>
//     </>
//   );
// };

// export default HistTimeline ;



import React from 'react'
// import $ from 'jquery'

import $ from 'jquery';
import "./js/jquery-3.5.1.min.js"
import "./js/jquery.mousewheel-3.1.13.min.js"
import * as hist from  "./js/histropedia-1.2.0.js"

class HistTimeline extends React.Component {
    componentDidMount(){
        this.$el = $(this.el)
        var myTimeline = new hist.Histropedia.Timeline(this.$el, {'height': 800, 'width': 1400});
        myTimeline.load(this.props.articles);
                
    }
    render() {
        return (
            <div ref={el => this.el = el } />
        )
    }
}


export default HistTimeline

