const arr = [
    {name:'a', value:10},
    {name:'a', value:20},
    {name:'a', value:20},
    {name:'b', value:30},
    {name:'b', value:40},
    {name:'b', value:40}
  ];
  
  const set = new Set();
  const result = arr.filter(item => set.has(JSON.stringify(item)) ? true : (set.add(JSON.stringify(item)), false));
  console.log(result); 
  //[{name: "a", value: 20}, {name: "b", value: 40}]