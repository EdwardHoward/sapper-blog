---
date: 2019-10-03T05:04:45Z
title: Random Code
subtitle: ''

---
```javascript
const len = 5;
const mat = [
   [0,1,1,0,0],
   [0,1,1,0,1],
   [1,0,1,0,1],
   [1,1,1,0,1],
   [0,1,1,1,1]
];

function getNeighbors(x, y, mat, size = 0){
   if(x >= len || y >= len || x < 0 || y < 0 || mat[y][x] === -1) return size;
   
   if(mat[y][x] === 0){
      mat[y][x] = -1;

      size++;
      for(let yy = -1; yy <= 1; yy++){
         for(let xx = -1; xx <= 1; xx++){
            size = getNeighbors(x + xx, y + yy, mat, size);
         }
      }
   }

   return size;
}

const results = [];
for(let y = 0; y < len; y++){
   for(let x = 0; x < len; x++){
      const size = getNeighbors(x, y, mat);

      if(size > 0){
         results.push(size);
      }
   }
}

console.log(results.sort());
```