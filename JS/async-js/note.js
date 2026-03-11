/*
1.1. A , D , C , B
1.2. 1 , 6 , 4 , 2 , 3 , 5
1.3. 3 , 1 , 4 , 2

2.1. 
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }

2.2. 
    function getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data");
            }, 1000);
        });
    }

    async function main() {
        const result = await getData();
        console.log(result);
    }

    main();

2.3. 
    async function processItems(items) {
        for (const item of items) {
            await processItem(item);
            console.log(`Processed: ${item}`);
        }
        console.log("All done!");
    }

3.1. 2 , undefined
3.2. 3
3.3. ABCD


*/
