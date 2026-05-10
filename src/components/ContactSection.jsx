import { ArrowRight, Mail, MapPin, Phone, Code2, Send } from "lucide-react"
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";


export const ContactSection = () => {
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault()
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            });
        setTimeout(() => {

        }, 1500)
    }
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="text-3xl font-bold text-center mb-8">
            Get In <span className="text-primary">Touch</span>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through email, and let's start a conversation!
        </p>
        <div className="mb-8 text-center text-muted-foreground">
            <button className="cosmic-button inline-flex items-center">
                <a href="mailto:priyanshukumar55a@gmail.com" className="flex items-center">
                    Send Email <ArrowRight className="ml-2" />
                </a>
            </button>
        </div>
        <h3 className="text-xl font-semibold mb-12 text-center">Contact Information</h3>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto mb-12">
            {/* Left Column - Contact Information */}
            <div className="flex-1">
                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border">
                        <div className="p-3 rounded-full bg-primary/20 shrink-0">
                            <Mail className="h-5 w-5 text-primary"/>
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-foreground mb-1">Email</h4>
                            <a href="mailto:priyanshukumar55a@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">priyanshukumar55a@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border">
                        <div className="p-3 rounded-full bg-primary/20 shrink-0">
                            <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                            <a href="tel:+91-7061237531" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                +91 7061237531
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border">
                        <div className="p-3 rounded-full bg-primary/20 shrink-0">
                            <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-foreground mb-1">Location</h4>
                            <p className="text-sm text-muted-foreground">Sasaram, Rohtas, Bihar</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="flex-1">
                <h4 className="text-lg font-semibold mb-6">Connect with Me</h4>
                <div className="space-y-3 flex flex-col">
                    <a href="https://www.linkedin.com/in/priyanshu-kumar-65607a325/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-primary/50 transition-all group">
                        <BsLinkedin className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                    </a>
                    <a href="https://leetcode.com/u/Priyanshu_Kumar_20/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-primary/50 transition-all group">
                        <SiLeetcode className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">LeetCode</span>
                    </a>
                    <a href="https://codeforces.com/profile/Priyanshu_2006a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-primary/50 transition-all group">
                        <SiCodeforces className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">CodeForces</span>
                    </a>
                    <a href="https://www.codechef.com/users/rich_apple_81" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-primary/50 transition-all group">
                        <SiCodechef className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">CodeChef</span>
                    </a>
                </div>
            </div>
        </div>

        {/* Message Form Section */}
        <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gray-800 border border-border p-8 rounded-lg ">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                        <input type="text" placeholder="Enter Your Name..." id="name" name="name" required className="w-full px-4 py-2 rounded-md border border-input bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                        <input type="email" placeholder="Enter Your Email..." id="email" name="email" required className="w-full px-4 py-2 rounded-md border border-input bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                        <textarea placeholder="Hello, I'd like to talk about..." id="message" name="message" required className="w-full px-4 py-2 rounded-md border border-input bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none h-32" />
                    </div>

                    <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 p-3")}>
                        Send Message<Send size={22}/>
                    </button>
                </form>
            </div>
        </div>
    </section>
}