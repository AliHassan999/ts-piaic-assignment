
const mountainInfo: { name: string, height: number, location: string }[] = [
    { name: "Everest", height: 8848, location: "Nepal" },
    { name: "K2", height: 8288, location: "Pakistan" }
];

mountainInfo.forEach((mountain) => {
    console.log(`Mountain: ${mountain.name}, Height: ${mountain.height} meters, Location: ${mountain.location}`);
});
