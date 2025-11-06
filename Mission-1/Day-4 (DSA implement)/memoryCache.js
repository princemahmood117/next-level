const dataCache = new Map();

// expensive task function
const cacheMemoryTask = (id) => {
  console.log("expensive task for : ", id);

  return {
    id: id,
    data: `some data for id : ${id} `,
    timestamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (dataCache.has(id)) {
    console.log('cache hit for id : ', id);
    return dataCache.get(id);  //returns the cached data based on the ID
  }
 
  console.log('cache miss for id : ', id);
  const runData = cacheMemoryTask(id)  // task not found in cache, so run the function again

  dataCache.set(id, runData)
  return runData
};
console.log('initial dataCache :', dataCache, '\n');
console.log('result from first call : ', getData(123));
console.log('\n');
console.log('result from second call : ', getData(123));
console.log('\n dataCache after:', dataCache);


// ! in the second call the id was already in the dataCache since it was set inside the dataCache from first call, so it will be fast to retrive the data from cache
