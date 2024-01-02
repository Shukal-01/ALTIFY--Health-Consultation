// adminController.js
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export const createAdmin = async (req, res) => {
    try {
        const existingAdmin = await prisma.admin.findFirst();
        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin already exists' });
        }
        const { fullName, userName, email, password, age, phoneNumber, dateOfBirth, gender, picture } = req.body; // Extract data from request body
        const admin = await prisma.admin.create({
            data: {
                fullName,
                userName,
                email,
                password: await bcrypt.hash(password, 10), // Assuming you're using bcrypt for password hashing
                age,
                phoneNumber,
                dateOfBirth: new Date(dateOfBirth), // Ensure date format is valid
                gender,
                picture,
            },
        });

        res.json(admin);
        console.log(admin)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// export const getAdminById = async (req, res) => {
//     try {
//         const adminId = req.params.id;
//         const admin = await prisma.admin.findUnique({
//             where: { id: adminId },
//         });
//         res.json(admin);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await prisma.admin.findMany();
        res.json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
