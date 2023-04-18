import React from 'react'
import $ from 'jquery';
import "./js/jquery-3.5.1.min.js"
import "./js/jquery.mousewheel-3.1.13.min.js"
import * as hist from  "./js/histropedia-1.2.0.js"

class HistTimeline extends React.Component {
    componentDidMount(){
        // To stop the weirdness where component did mount is called twice
        if (this._Mounted) return;
        this._Mounted = true;
        
        this.$el = $(this.el)
        var myTimeline = new hist.Histropedia.Timeline(this.$el, this.props.options);
        myTimeline.load(this.props.articles);                
    }
    render() {
        return (
            <div className="border" ref={ el => this.el = el } />
        )
    }
}


export default HistTimeline

