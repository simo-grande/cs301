const prompt = require("prompt-sync")();

function houseVolume(width, depth, height, sweep){
    
    livingVolume(width, depth, height);
    roofVolume(width, depth, sweep);
    let volumeofthehouse = livingVolume(width, depth, height) + roofVolume(width, depth, sweep) ;
    return(volumeofthehouse);
} 

function livingVolume(width, depth, height){
        
        let volumeofroom= width*depth*height;
        return (volumeofroom);
}
function roofVolume(width, depth, sweep){
        
        triangleArea(sweep,depth);
        let volumeofroof= triangleArea(sweep,depth) * width ;
        return (volumeofroof);

}
function triangleArea(sweep, depth){
       
    let per = (sweep + depth + sweep) / 2;     
    let area = Math.sqrt(per*(per - sweep)*(per - depth)*(per - sweep)); 
        return (area);         
}
let w= parseFloat(prompt("Enter width: "));
let d= parseFloat(prompt("Enter depth: "));
let h= parseFloat(prompt("Enter height: "));
let s= parseFloat(prompt("Enter sweep: "));
console.log(houseVolume(w,d,h,s));