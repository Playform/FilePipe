var g=async(...[w,{Accomplished:f,Changed:a,Failed:o,Fulfilled:u,Passed:s,Read:p,Wrote:O}])=>{let t=w;const i=new Set;for(const[e,n]of t.Results){t.On.Input=n,t.On.Output=e;try{if(t.On.Before=(await(await import("fs/promises")).stat(t.On.Input)).size,p&&O){if(t.On.Buffer=await p(t.On),t.On.Buffer=await O(t.On),!t.On.Buffer)continue;if(s&&await s(t.On)){try{await(await import("fs/promises")).access(c(t.On.Output),(await import("fs/promises")).constants.W_OK)}catch{await(await import("fs/promises")).mkdir(c(t.On.Output),{recursive:!0})}i.add([t.On.Output,t.On.Buffer]),t.On.After=Buffer.from(t.On.Buffer.toString(),"utf-8").byteLength,t.Logger>0&&(t.File++,a&&(t=await a(t))),t.Logger>1&&typeof f=="function"&&console.log(await f(t.On))}}}catch(r){t.Results.delete(t.On.Output),t.Logger>1&&console.log(typeof o=="function"?await o(t.On,r):r)}}if(i.size>0&&i.forEach(async([e,n])=>await(await import("fs/promises")).writeFile(e,n,"utf-8")),t.Logger>0&&t.Results.size>0&&typeof u=="function"){const e=await u(t);e&&e.length>0&&console.log(e)}return t};const{dirname:c}=await import("path");export{g as default,c as dirname};
