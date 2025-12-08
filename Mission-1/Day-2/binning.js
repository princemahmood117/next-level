const events = [
    {timestamp: "2025-11-04T09:15:00", type: "login"},
    {timestamp: "2025-11-04T09:20:30", type: "click"},
    {timestamp: "2025-11-04T09:22:45", type: "login"},
    {timestamp: "2025-11-04T09:25:10", type: "purchase"},
    {timestamp: "2025-11-04T09:30:00", type: "click"},
    {timestamp: "2025-11-04T09:35:20", type: "logout"},
    {timestamp: "2025-11-04T09:40:15", type: "login"},
    {timestamp: "2025-11-04T09:45:00", type: "purchase"},
    {timestamp: "2025-11-04T09:50:30", type: "click"},
    {timestamp: "2025-11-04T09:55:00", type: "logout"}
]

// convert time into millisecond

const interval = 30 * 60 * 1000  // ? 1 mint = 60 second ; 1 second = 1000 millisecond ; 1 mint = 1 * 60 * 1000 millisecond

const getBinningTimeStanp = (timestamp) => {
    const date = new Date(timestamp)
    // console.log('before flooring : ', timestamp ,date);

    const floorDate = Math.floor(date.getTime() / interval) * interval ;
    // console.log('\nafter flooring : ', floorDate);
    return new Date(floorDate).toISOString()

}


const binnedData = events.reduce((acc, current) => {
    const bin = getBinningTimeStanp(current.timestamp)
    console.log(bin);
    if(!acc[bin]){
        acc[bin] = {total : 0}
    }
    acc[bin].total = acc[bin].total + 1

    return acc;
},{})

console.log(binnedData);

// console.log(getBinningTimeStanp("2025-11-04T09:20:30"));
// console.log(getBinningTimeStanp("2025-11-04T09:22:45"));
// console.log(getBinningTimeStanp("2025-11-04T09:25:10"));