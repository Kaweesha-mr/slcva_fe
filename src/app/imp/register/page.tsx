"use client";
import React , {useState} from "react";
 
 
 

export default function Form (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [license, setLicense] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [password, setPassword] = useState("");   
    const [confirmPassword, setConfirmPassword] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const[isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

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
        setIsSubmitting(false);

        
        }
    
    
   return(
     
       <form  onSubmit={handleSubmit} className="flex flex-col gap-y-2">
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
            required
            type="text"
            className="border-2 border-gray-300 rounded-md p-2"
            />

        <input
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            required
            placeholder="License Number"
            type="text"
            className="border-2 border-gray-300 rounded-md p-2"
            />
        <input  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Email"
            required
            type="email"
            />  
 
            <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Phone Number"
            required
            type="text"

            />

            <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
           className="border-2 border-gray-300 rounded-md p-2"
            placeholder="Website"  
            type="text"
            />

            {/* textarea for additional information */}
            <input
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
           className="border-2 border-gray-300 rounded-md p-2"
            type="textarea"
            placeholder="Additional Information"
            />

        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            required
            minLength={10}
            type="password"
            placeholder="Password"
            />


        <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2"
            required
            minLength={10}
            type="password"
            placeholder="Confirm Password"
            />


           <button
            type="submit"
            disabled = {isSubmitting}
            className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"> Submit </button>

       </form>
 
  );
}