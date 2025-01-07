export default function About() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8 sm:text-3xl">About Us</h1>

            <section className="mb-12 sm:mb-8">
                <h2 className="text-2xl font-semibold mb-4 sm:text-xl">Our Story</h2>
                <p className="text-gray-700 mb-4 sm:text-sm">
                    Founded in 2023, Nano.Links has been dedicated to revolutionizing 
                    the way people share and manage URLs on the internet. We believe in 
                    simplicity, security, and user privacy, and strive to make the web 
                    more accessible and organized for everyone.
                </p>
            </section>

            <section className="mb-12 sm:mb-8">
                <h2 className="text-2xl font-semibold mb-4 sm:text-xl">Our Mission</h2>
                <p className="text-gray-700 mb-4 sm:text-sm">
                    Our mission is to provide the fastest and most reliable URL shortening 
                    service in the world. We are committed to delivering enterprise-grade 
                    link management solutions while maintaining the highest standards of 
                    security, performance, and user experience.
                </p>
            </section>
        </div>
    );
}
