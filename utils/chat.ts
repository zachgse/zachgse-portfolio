import data from "@/data.json";

function route (query:string) {
    if (query.includes("project")) {
        return "project"
    } 

    if (query.includes("skill") || query.includes("tech stack") || query.includes("technologies") || 
        query.includes("work") || query.includes("experience")){
        return "experience"
    }

    if (query.includes("license") || query.includes("certificate") || query.includes("training")) {
        return "license"
    }

    return "general";
}

function cosineSimilarity(a: number[], b: number[]) {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);

    const magnitudeA = Math.sqrt(
    a.reduce((sum, val) => sum + val * val, 0)
    );

    const magnitudeB = Math.sqrt(
    b.reduce((sum, val) => sum + val * val, 0)
    );

    return dotProduct / (magnitudeA * magnitudeB);
}

export function generateAugmentedRetrieval(userInput:string,userEmbedding:number[]){ 
    const type = route(userInput);
    const typeChunk = data.filter(
        d => d.type === type
    );
    const formattedChunks = typeChunk.map(d => ({
        text: d.text,
        score: cosineSimilarity(userEmbedding,d.embeddings)
    })).sort((a,b) => b.score - a.score);
    const retrievedContext = formattedChunks.map((chunk,index) => {
        return `[${index+1}] Score: ${chunk.score.toFixed(4)}
${chunk.text}
        `
    });

    return `
User Question: 
${userInput}


Retrieved Context: 
${retrievedContext}
    `;
}