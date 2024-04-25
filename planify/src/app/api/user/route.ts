import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import * as z from 'zod';

const UserSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must have than 8 characters')
  });

export async function POST(req : Request) {
    try {
        const body = await req.json();
        const { email, username, password } = UserSchema.parse(body);

        //checking if user is there in the database by email
        const ExistingUserByEmail = await db.user.findUnique({
            where: { email: email}
        });

        if (ExistingUserByEmail) {
            return NextResponse.json({user: null, message: "Email already exists"}, {status: 409});
        }

        //checking if user is there in the database by username
        const ExistingUserByUsername = await db.user.findUnique({
            where: { username: username}
        });

        if (ExistingUserByUsername) {
            return NextResponse.json({user: null, message: "Username already exists"}, {status: 409});
        }

        // hash the password so it would not appear in clear
        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        });

        const {password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
}

