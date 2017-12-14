import React, { Component } from 'react';
import Sidedrawer from './Sidedrawer/Sidedrawer';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);

        this.state = {swiped: false};
        this._swipe = {};
        this._open = false;
        /**
         * I want to track only small movements,so that they don't clash with general site slide gestures
         * */
        this.minDistance = 40;
    }

    openNav() {
        this._open=true;
        document.getElementById("content").className = "noclick";
        document.getElementById("cover").className = "black-cover";
        document.getElementById("mySidenav").style.width = "70vw";
    }

    closeNav() {
        this._open=false;
        document.getElementById("content").className = "";
        document.getElementById("cover").className = "";
        document.getElementById("mySidenav").style.width = "0";
    }

    _onTouchStart(e) {
        const touch = e.touches[0];
        this._swipe = {x: touch.clientX};
        this.setState({swiped: false});
    }

    _onTouchMove(e) {
        if (e.changedTouches && e.changedTouches.length) {
            this._swipe.swiping = true;
        }
    }

    _onTouchEnd(e) {
        const touch = e.changedTouches[0];
        const absX = Math.abs(touch.clientX - this._swipe.x);
        if (this._swipe.swiping && absX > this.minDistance) {
            // it's swiping!!
            console.log('touch start: ', this._swipe.x, 'touch end: ', touch.clientX, 'opened?: ', this._open);
            /**
            *  If the touch is beginning from almost the edge of the screen
            *  AND the touch is from left to right (end touch is larger that start touch)
            *  AND the sidenav is NOT open
            *  then open the side nav
            *  */
            if ((this._swipe.x < 50) && (touch.clientX > this._swipe.x) && !this._open) {
                this.openNav();
            }
            /**
            *  If the touch is from right to left (end touch is smaller that start touch)
            *  AND the sidenav is open
            *  then close the side nav
            *  */
            if ((touch.clientX < this._swipe.x) && this._open) {
                this.closeNav();
            }
            this.setState({swiped: true});
        }
        this._swipe = {};
    }

  render() {
    return (
        <div onTouchStart={this._onTouchStart} onTouchMove={this._onTouchMove} onTouchEnd={this._onTouchEnd} className="fullscreen">
            <Sidedrawer/>
            {/* You can also close the menu by clicking anywhere on the screen */}
            <div id="cover" onClick={() => this.closeNav()}></div>
            {/* You can also open the menu by clicking the three horizontal lines here */}
            <a className="sidedrawer-toggle js-show-sidedrawer" onClick={() => this.openNav()}>&#8801;</a>
            <div id="content">
                My great content
            </div>
        </div>
    );
  }
}

export default App;
