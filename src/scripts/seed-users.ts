// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcrypt');

async function seedUsers() {
    const sampleUsers = [
        { name: 'Alice Johnson', email: 'alice@example.com', password: 'password' },
        { name: 'Bob Smith', email: 'bob@example.com', password: 'password' },
        { name: 'Charlie Brown', email: 'charlie@example.com', password: 'password' },
    ];

    console.log('name,email,password');

    for (const user of sampleUsers) {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        console.log(`${user.name},${user.email},${hashedPassword}`);
    }
}

seedUsers().catch(console.error);
