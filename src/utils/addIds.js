const fs = require('fs');

// Read the JSON file
const filePath = "../assests/data/wine-data-set.json"; // Replace with your file path
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Function to add IDs to each object
function addIds(jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
        jsonData[i] = { id: i + 1, ...jsonData[i] }; // Add 'id' property at the beginning
    }
    return jsonData;
}

// Add IDs to the JSON data
const jsonDataWithIds = addIds(jsonData);

// Write the modified JSON data back to the file
fs.writeFile('modified_data_with_ids.json', JSON.stringify(jsonDataWithIds, null, 2), 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('IDs added to JSON objects and saved to modified_data_with_ids.json');
});
