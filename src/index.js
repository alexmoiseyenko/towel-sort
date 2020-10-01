
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.reduce((acc, item, idx) => {
        if (idx % 2 !== 0) {
            item.reverse();
        }
        item.map(i => {
            acc.push(i);
        })
        return acc
    }, []);
}
