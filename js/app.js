for(var x = 1; x<=100 ; x++){
    if ((x%7===0)||(x%10===7)||(Math.floor(x/10)===7)) {
        if (((x-1)%7===0)||((x-1)%10===7)||(Math.floor((x-1)/10)===7)) {
        console.log("double boom");
        continue;
        }
        console.log("boom");
        continue;
    }
    console.log(x);
}