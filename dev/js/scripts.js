import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, EaselPlugin, ExpoScaleEase, RoughEase, SlowMo, MotionPathPlugin, DrawSVGPlugin);


const mainTL = gsap.timeline();



function linereveal (){
    const tl = gsap.timeline();
    tl.from("#belt", {duration: .001, autoAlpha: 0});

    return tl;
}


function donutspin (){
    const tl = gsap.timeline();
    tl.to("#plaindoughnut",{duration: 2, rotation: "-=330", ease: "none", transformOrigin:"50% 50%"});
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}

function donutleft (){
    const tl = gsap.timeline();
    tl.to("#plaindoughnut",{duration: 2, ease: "none", x: "-860"});
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}

function pinkmove (){
    const tl = gsap.timeline({delay: -1});
    tl.from("#frostingcircle", {duration: .001, autoAlpha: 0})
    tl.to("#frostingcircle",{duration: 1, ease: "none", x: "-500"});
    tl.to("#frostingcircle",{duration: .5});
    tl.to("#frostingcircle",{duration: 2, ease: "none", x: "500"});
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}

function sprinkspin (){
    const tl = gsap.timeline({delay: -2});
    tl.from("#sprinkdoughnut", {duration: .001, autoAlpha: 0});
    tl.to("#sprinkdoughnut",{duration: 1, rotation: "+=360", ease: "none", transformOrigin:"50% 50%"});
  
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}

function sprinkright (){
    const tl = gsap.timeline({delay: -2});
    tl.to("#sprinkdoughnut",{duration: 1, ease: "none", x: "500"});
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}


function linegone (){
    const tl = gsap.timeline();
    tl.from("#belt", {duration: 1, alpha: 1});

    return tl;
}


function rightdissapear (){
    const tl = gsap.timeline();
    tl.from("#sprinkdoughnut", {duration: .001, autoAlpha: 1});
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}




function breakoff (){
    const tl = gsap.timeline();
    tl.from("#hey", {duration: .001, autoAlpha: 0});
    tl.to("#hey",{duration: .5, ease: "none", rotation: "-60", transformOrigin: "right 50%"});
    tl.to("#hey",{duration: 2, ease: "none", rotation: "-300", transformOrigin: "50% 50%", y:1500});
    //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
    return tl;
}

function logo (){
    const tl = gsap.timeline();
    tl.from("#yes", {duration: .001, autoAlpha: 0})
    return tl;
}

// function lauren (){
//     const tl = gsap.timeline();
//     tl.to("#slogan",{duration: .5, ease: "none", x: "-200"});
//     //tl.from("#plaindoughnut", {duration: 1, ease: "none", y:"-100" });
//     return tl;
// }









mainTL.add(linereveal())
.add(donutspin(),"same")
.add(donutleft(),"same")
.add(pinkmove())
.add(sprinkspin(),"spin")
.add(sprinkright(),"spin")
.add(linegone())
.add(rightdissapear())
.add(breakoff(),"reveal")
.add(logo(),"reveal");
// .add(lauren());



GSDevTools.create();