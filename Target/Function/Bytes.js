var a=async(...[t,e=2])=>{if(t===0)return"0 Bytes";const o=Math.floor(Math.log(t)/Math.log(r));return`${parseFloat((t/r**o).toFixed(e<0?0:e))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}`};const r=1024;export{r as Kilobyte,a as default};
