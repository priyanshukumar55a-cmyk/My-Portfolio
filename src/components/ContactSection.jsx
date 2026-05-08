import { ArrowRight } from "lucide-react"

export const ContactSection = () => {
    return <section id="contact">
        <div className="text-3xl font-bold text-center mb-8">
            Get In <span className="text-primary">Touch</span>
        </div>
        <div className="mb-8 text-center text-muted-foreground">
            <button className="cosmic-button inline-flex items-center">
                <a href="mailto:priyanshukumar55a@gmail.com" className="flex items-center">
                    Send Email <ArrowRight className="ml-2" />
                </a>
            </button>
        </div>
    </section>
}