// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const vehicles = data.reduce( (total, vehicle ) => {
    if(!total[vehicle])
        total[vehicle] = { count: 0 };
    total[vehicle].count++;
    return total;
}, {});

console.log(vehicles);