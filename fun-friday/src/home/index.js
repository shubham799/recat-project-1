import React, { Component } from 'react';
import './home.css'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            transform:0
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    // componentDidMount(){
    //     var body = document.body,
    //             html = document.documentElement;
    //     var height = Math.max(body.scrollHeight, body.offsetHeight,
    //         html.clientHeight, html.scrollHeight, html.offsetHeight);
    //     console.log('height',height);
    //     console.log('window.scrollY',window.scrollY);
    //     this.scroll();

    // }
   
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        let li = document.getElementById('a');
        console.log('li.offsetHeight',li.offsetHeight)
        console.log('li.offsetTop',li.offsetTop)
        console.log('li.scrollHeight',li.scrollHeight)
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
    
        this.setState({
          transform: itemTranslate
        });
    }


  render() {
    console.log('window.scrollY',window.scrollY);
    // console.log('element.scrollTop',document.getElementById('a').offsetTop);
    return (
      <section>
          <ul class="image-list">
            <li  class="hero-slide1 background-properties"><div id="a" class="above-img1 background-properties1 badge-active"></div></li>
            <li class="hero-slide2 background-properties"><div class="above-img2 background-properties1 badge-inactive"></div></li>
            <li class="hero-slide3 background-properties"><div class="above-img3 background-properties1 badge-inactive"></div></li>
            <li class="hero-slide4 background-properties"><div class="above-img4 background-properties1 badge-inactive"></div></li>
            <li class="hero-slide5 background-properties"><div class="above-img5 background-properties1 badge-inactive"></div></li>
          </ul>

      </section>
    );
  }
}

export default Home;
