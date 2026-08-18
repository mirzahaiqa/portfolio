import {RevealOnScroll} from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useState } from "react";


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const SERVICE_ID = "service_vjmk3ua"
    const TEMPLATE_ID = "template_lq9r5yn"
    const PUBLIC_KEY = "Dpj6G-Oo3y9TdhQ7g"
    const handleSubmit =(e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        }). catch (() => alert("Oops! Something went wrong. Please try again."));
    }
    
    
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll> 
            <div className="w-[450px] px-4   border-[rgba(0,139,139,0.2)] shadow-[0_2px_8px_rgba(59,130,246,0.2)] ">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center my-4">Get In Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name..."  onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" required value={formData.email}  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@email.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    </div>

                    <div className="relative">
                        <textarea  id="message" name="message" required rows={5} value={formData.message} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your message..." onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                    </div>

                    <button type="submit" className="w-150  bg-blue-900 text-white font-semibold py-3 px-6 rounded transition-colors font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        Send Message
                    </button>
                </form>
            </div>
        </RevealOnScroll> 
     </section>
    )
}