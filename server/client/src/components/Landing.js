import React, { useEffect, useRef, useState } from 'react';
import "./css/landing.css";
import "./css/glitch-colors.css";
import * as d3 from 'd3';
import "animate.css"

// letters lighter on mouseover
// https://www.google.com/search?q=inside+a+spaceship&rlz=1C1SQJL_enIE895IE895&sxsrf=APq-WBtI82L4Fk-6id-BPb9cfY7YaqwC9A:1647617572800&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiEz5vh_c_2AhVGh1wKHeAcCKIQ_AUoAXoECAEQAw&biw=1280&bih=919&dpr=1#imgrc=5RvfVup02zMKCM

const Landing = () => {
  const jRef = useRef();
  const sRef = useRef();
  const sContainerRef = useRef();
  const jContainerRef = useRef();
  const mainSvgRef = useRef();

  useEffect(() => {
    jRef.current.addEventListener('mouseover', () => {
      console.log('mouse-over j');
      d3.select(jRef.current).attr('class', 'j animate__animated animate__bounce logo-letter');
    });
    jContainerRef.current.addEventListener('mouseout', () => {
      console.log('mouse-out j-container');
      d3.select(jRef.current).attr('class', 'j animate__animated logo-letter');
    });
    sRef.current.addEventListener('mouseover', () => {
      console.log('mouse-over s');
      d3.select(sRef.current).attr('class', 'j animate__animated animate__bounce logo-letter');
    });
    sContainerRef.current.addEventListener('mouseout', () => {
      console.log('mouse-out s-container');
      d3.select(sRef.current).attr('class', 's animate__animated logo-letter');
    });
  }, []);
  
    useEffect(() => {
      let colors = ['green', 'white', 'yellow', 'green', 'green', 'aqua', 'yellow', 'yellow'];

      const movePointOne = async (point) => {            
        let color = colors[parseInt(Math.random()*8)];
        await d3.select(point).transition().delay(Math.random()*500).style('opacity', '0').remove();
        let radius = 9.5 + (Math.random() * 6);
        // let angleInRadians = (Math.random()*360) * Math.PI/180;
        let angleInRadians = (Math.random()*360) * (Math.PI/180);
        let cx = 55.95 + (radius * (Math.cos(angleInRadians)));
        let cy =  60.25 + ((radius * (Math.sin(angleInRadians)))*1.54);
        let circle = d3.select(mainSvgRef.current).append('circle').transition().delay(Math.random()*500).attr('class', `point glitch-${color}`).attr('r', `${.1  + (Math.random() * .5)}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`)
            .on('end', () => movePointTwo(circle._groups[0][0]));
    }

  const movePointTwo = async (point) => {
        await d3.select(point).transition().delay(Math.random()*500).style('opacity', '0').remove();
        let color = colors[parseInt(Math.random()*8)];
        let radius = 9.5 + (Math.random() * 6);
        // let angleInRadians = (Math.random()*360) * Math.PI/180;
        let angleInRadians = (Math.random()*360) * (Math.PI/180);
        let cx = 55.95 + (radius * (Math.cos(angleInRadians)));
        let cy =  60.25 + ((radius * (Math.sin(angleInRadians)))*1.54);
        let circle = d3.select(mainSvgRef.current).append('circle').transition().delay(Math.random()*500).attr('class', `point glitch-${color}`).attr('r', `${.1  + (Math.random() * .5)}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`)
            .on('end', () => movePointTwo(circle._groups[0][0]));
      
    }
        for (let i=0; i<100; i++){
            let color = colors[parseInt(Math.random()*8)];
            let radius = 9.5 + (Math.random() * 6);
            // let angleInRadians = (Math.random()*360) * Math.PI/180;
            let angleInRadians = (Math.random()*360) * (Math.PI/180);
            let cx = 55.95 + (radius * (Math.cos(angleInRadians)));
            let cy =  60.25 + ((radius * (Math.sin(angleInRadians)))*1.54);
            // ^ factor in aspect ratio
            let circle = d3.select(mainSvgRef.current).append('circle').transition().delay(Math.random()*500).attr('class', `point glitch-${color}`).attr('z-index', parseInt(1 + Math.random()* 288))
                .attr("r", `${.1  + (Math.random() * .5)}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`).on('end', () => movePointOne(circle._groups[0][0]));
        }
    }, []);


    return (
        <div className="landing-container">
      <svg ref={mainSvgRef} xmlns="http://www.w3.org/2000/svg" className="logo-svg" viewBox="0.0 -2.000000000000057 972.0 630.0" preserveAspectRatio="none">
      <g>
    <defs>
      <path id="s-Rect_2-d1224" d="M0.0 -2.000000000000057 L972.0000000000002 -2.000000000000057 L972.0000000000002 628.0 L0.0 628.0 Z "></path>
    </defs>
    <g style={{"mixBlendMode":"normal"}}>
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#s-Rect_2-d1224" fill="#3659C4" fillOpacity="1.0"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Rect_2-d1225" d="M 150.0 220 L370 220 L370 550.0 L150.0 550.0 Z "></path>
    </defs>
    <g style={{"mixBlendMode":"normal"}}>
      <use ref={jContainerRef} xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#s-Rect_2-d1225" fill="#FFFFFF" fillOpacity="0"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Rect_2-d1226" d="M 700.0 220 L950 220 L950 550.0 L700.0 550.0 Z "></path>
    </defs>
    <g style={{"mixBlendMode":"normal"}}>
      <use ref={sContainerRef} xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#s-Rect_2-d1226" fill="#FFFFFF" fillOpacity="0"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_2-d1224" d="M543.8000030517578 284.1499786376953 C596.5000152587891 284.1499786376953 632.1999969482422 325.37498474121094 632.1999969482422 379.34999084472656 C632.1999969482422 433.32498931884766 596.5000152587891 474.54998779296875 543.8000030517578 474.54998779296875 C491.1000061035156 474.54998779296875 455.40000915527344 433.32498931884766 455.40000915527344 379.34999084472656 C455.40000915527344 325.37498474121094 491.1000061035156 284.1499786376953 543.8000030517578 284.1499786376953 Z M543.8000030517578 231.0249786376953 C460.50000762939453 231.0249786376953 394.2000045776367 293.92498779296875 394.2000045776367 379.34999084472656 C394.2000045776367 464.7749900817871 460.50000762939453 527.6749908924103 543.8000030517578 527.6749908924103 C627.1000061035156 527.6749908924103 693.4000091552734 464.7749900817871 693.4000091552734 379.34999084472656 C693.4000091552734 293.92498779296875 627.1000061035156 231.0249786376953 543.8000030517578 231.0249786376953 Z "></path>
    </defs>
    <g style={{"mixBlendMode":"normal"}}>
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#s-Path_2-d1224" fill="#0B0A24" fillOpacity="0"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_1-d1224" d="M287.1000061035156 234.84999084472656 L287.1000061035156 437.14998626708984 C287.1000061035156 466.8999900817871 274.7750015258789 474.54998779296875 255.22500610351562 474.54998779296875 C234.82500457763672 474.54998779296875 226.32500076293945 460.5249900817871 216.97500228881836 443.94998931884766 L168.52500009536743 473.2749900817871 C182.55000114440918 503.0249900817871 210.1750030517578 527.6749908924103 257.7750015258789 527.6749908924103 C310.4750061035156 527.6749908924103 346.6000061035156 499.62499046325684 346.6000061035156 437.99998474121094 L346.6000061035156 234.84999084472656 Z "></path>
    </defs>
    <g style={{"mixBlendMode":"normal"}}>
      <use ref={jRef} className="j animate__animated logo-letter" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#s-Path_1-d1224" fill="#0B0A24" fillOpacity="1.0"></use>
    </g>
  </g>
  <g>
    <defs>
      <path id="s-Path_3-d1224" d="M823.8750076293945 231.4499969482422 C770.7500038146973 231.4499969482422 736.7500038146973 265.4499969482422 736.7500038146973 310.0749816894531 C736.7500038146973 358.5249786376953 765.2250061035156 381.47499084472656 808.1500091552734 399.74998474121094 L823.0250091552734 406.12498474121094 C850.2250061035156 418.02498626708984 866.375 425.24998474121094 866.375 445.64998626708984 C866.375 462.6499900817871 850.6500091552734 474.97499084472656 826.0000076293945 474.97499084472656 C796.6750030517578 474.97499084472656 780.1000061035156 459.67498779296875 767.3500061035156 438.84999084472656 L718.9000034332275 466.8999900817871 C736.3250045776367 501.32498931884766 772.0250053405762 527.6749908924103 827.2750091552734 527.6749908924103 C883.8000030517578 527.6749908924103 925.8750152587891 498.34999084472656 925.8750152587891 444.79998779296875 C925.8750152587891 395.0749816894531 897.4000091552734 372.97499084472656 846.8250122070312 351.29998779296875 L831.9500045776367 344.92498779296875 C806.4500045776367 333.87498474121094 795.4000091552734 326.6499786376953 795.4000091552734 308.79998779296875 C795.4000091552734 294.34999084472656 806.4500045776367 283.29998779296875 823.8750076293945 283.29998779296875 C840.8750076293945 283.29998779296875 851.9250030517578 290.5249786376953 862.125 308.79998779296875 L908.4500122070312 279.04998779296875 C888.9000091552734 244.62498474121094 861.7000122070312 231.4499969482422 823.8750076293945 231.4499969482422 Z "></path>
    </defs>
    <g style={{"mixBlendMode":"normal"}}>
      <use ref={sRef} className="animate__animated logo-letter" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#s-Path_3-d1224" fill="#0B0A24" fillOpacity="1.0"></use>
    </g>
  </g>
</svg>
</div>
    );
};

export default Landing;