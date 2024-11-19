"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export function Page() {
    <>
        <div className="bg-slate-50 mx-auto mt-16">
            <h1 className="font-bold">Welcome Back</h1>
            <p className="">Welcome back, Please enter your details</p>
            <Input
                placeholder="Enter your email"
                type="email"
                className="mb-5 mt-4"
            ></Input>
            <Input
                placeholder="Enter your password"
                type="password"
                className="mb-5"
            ></Input>
            <Button className="mx-auto">Log in</Button>
        </div>
    </>

}