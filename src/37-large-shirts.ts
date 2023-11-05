function make_shirts(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}

make_shirts(); // Default: Large size and default message
make_shirts('Medium'); // Medium size and default message
make_shirts('Small', 'Hello, World!'); // Small size with a custom message
