import "./Contact.css/"
const Contact = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <form action="https://formsubmit.co/oladimeji2312@gmail.com" method="POST">
                <input type="text" name="name" required placeholder="Your name" />
                <input type="text" name="email" required placeholder="Your email" />
                <input type="hidden" name="_autoresponse" value="Thank you for your inquiry, we will get back to you shortly."></input>
                <textarea name="msg" placeholder="Type your message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        
    )
}

export default Contact;