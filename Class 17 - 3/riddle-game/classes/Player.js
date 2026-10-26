export default class Player {
    constructor(name) {
        this.name = name;
        this.times = [];
    }

    recordTime(start, end) {
        const duration = end - start;
        this.times.push(duration);
    }

    showStats() {
    let totalTime = 0;

    this.times.forEach(time => {
        totalTime += time;
    });

    const averageTime = totalTime / this.times.length;

    console.log(`Great job, ${this.name}!`);
    console.log(`Total time: ${totalTime / 1000} seconds`);
    console.log(`Average per riddle: ${averageTime / 1000} seconds`);
}
}