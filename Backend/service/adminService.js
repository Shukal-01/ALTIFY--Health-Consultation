// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function createAdmin() {
//     const admin = await prisma.admin.create({
//         data: {
//             username: 'Sam',
//             email: 'sam@example.com',
//             password: 'sam@0978',
//             age: "22",
//             fullName: 'sam Doe',
//             phoneNumber: '+91-8741872350',
//             dateOfBirth: new Date('2002-06-23'),  // Use a valid date format
//             picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpUgC7dkHYV0KD26Ujw5u83EI43dOZqvABg&usqp=CAU',
//             gender: 'male',
//         },
//     });
//     return admin;
// }

// export async function getAdminById(adminId) {
//     const admin = await prisma.admin.findUnique({
//         where: { id: adminId },
//     });
//     return admin;
// }


// export { createAdmin, getAdminById };