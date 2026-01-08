import InfoPageLayout from "@/components/layout/InfoPageLayout";

const Contact = () => {
    return (
        <InfoPageLayout title="Contact Us" subtitle="We'd love to hear from you.">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <h3 className="heading-card mb-4">Get In Touch</h3>
                        <p className="text-muted-foreground mb-6">
                            Whether you have a question about our products, need design assistance,
                            or just want to say hello, our team is here to help.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-3">Customer Service</h4>
                        <div className="space-y-2 text-muted-foreground">
                            <p>Email: <a href="mailto:hello@lumiere.com" className="text-primary hover:underline">hello@lumiere.com</a></p>
                            <p>Phone: <a href="tel:+18005550123" className="text-primary hover:underline">+1 (800) 555-0123</a></p>
                            <p className="text-sm">Monday – Friday, 9am – 6pm EST</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-3">Showroom</h4>
                        <div className="space-y-2 text-muted-foreground">
                            <p>123 Design Avenue</p>
                            <p>New York, NY 10001</p>
                            <p className="text-sm pt-2">By appointment only</p>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary/20 p-8 rounded-lg">
                    <h4 className="font-serif text-lg mb-6">Send us a message</h4>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-border rounded bg-background" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-2 border border-border rounded bg-background" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea rows={4} className="w-full px-4 py-2 border border-border rounded bg-background" />
                        </div>
                        <button type="submit" className="w-full px-6 py-3 bg-foreground text-background rounded hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </InfoPageLayout>
    );
};

export default Contact;
