const asyncLoop = async (items, asyncTask) => {
    for (let i = 0; i < items.length; i++) {
        await asyncTask(items[i])
    }
};

// Example usage
const items = [1, 2, 3, 4, 5];

const asyncTask = async (item) => {
    // Simulate an asynchronus task
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Processed item: ${item}`);
            resolve();
        }, 1000);
    })
}