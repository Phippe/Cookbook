import { readdir, writeFile } from "node:fs/promises";

// Get all files in the recipes directory
const files = await readdir("./cookbook/recipes");


const recipes = files.filter((file) => file.endsWith(".md")).map((file) => {
    const fileName = file.replace(".md", "");
    // name: replace all dashes with spaces and capitalize the first letter of each word, then make all ae, oe and ue to ä, ö and ü
    const name = fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()).replace(/ae/g, "ä").replace(/oe/g, "ö").replace(/ue/g, "ü");
    const path = `recipes/${fileName}`;

    return {
        name,
        path,
    };
});



// Export the paths
await writeFile("./cookbook/recipes.json", JSON.stringify(recipes));

