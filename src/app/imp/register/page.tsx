"use client";
import React , {useState} from "react";
import {z} from "zod";
 
export default function Form (){

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [license, setLicense] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [password, setPassword] = useState("");   
    const [selectfile, setSelectFile] = useState<File | null>(null);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string[]>([]); 

    const FormSchema = z.object({
        name: z.string().min(3, {message: "Name must be at least 3 characters long"}),
        email: z.string().email({message: "Invalid email address"}),
        license: z.string().min(5, {message: "License number must be at least 5 characters long"}),
        phone: z.string().min(10, {message: "Invalid Phone number"}),
        website: z.string().url({message: "Invalid website URL"}),
        password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
        confirmPassword: z.string().min(6, {message: "Password must be at least 6 characters long"}),
       
    });

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log("Submitted form data:");
        console.log({ name, email, license, phone, website, password, confirmPassword, additionalInfo,selectfile });

        if(password !== confirmPassword){
            setError(["Passwords do not match"]);
            setIsSubmitting(false);
            return;
        }


        // submit to the server
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setName("");
        setEmail("");
        setLicense("");
        setPhone("");
        setWebsite("");
        setPassword("");
        setConfirmPassword("");
        setAdditionalInfo("");
        setSelectFile(null);
        setIsSubmitting(false);

         }

    
    
    
   return(
 
     
       <form  onSubmit={handleSubmit} className="flex flex-100 flex-col gap-y-2">
        <h1 className="text-2xl font-semibold">Registration Request Form</h1>
        
        {
            error.length > 0 &&(
                <ul>
                    {error.map((err) => (
                        <li key={err} className="text-red-500">{err}</li>
                    ))}
                </ul>
            )

        }

        <input
            value={name}
            // update the name state with the value of the input
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name"
            type="text"
            className="border-2 border-gray-300 flex justify-center rounded-md p-2"
            />

        <input
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            placeholder="License Number"
            type="text"
            className="border-2 border-gray-300 w-90 rounded-md p-2"
            />

        <input  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Email"
            type="email"
            />  
 
            <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Phone Number"
            type="text"

            />

            <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Website"  
             
            />

           
            <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Additional Information"
            />

            <input 
            type = "file"
            onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                    setSelectFile(e.target.files[0]);
                }
            }}
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Upload Documents"
             />

        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            type="password"
            placeholder="Password"
            />


        <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            type="password"
            placeholder="Confirm Password"
            />


           <button
            type="submit"
            disabled = {isSubmitting}
            className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"> Send Request </button>

       </form>
     
 
  );
}