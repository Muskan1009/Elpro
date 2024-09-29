import React from 'react'

const Privacy = () => {
    return (
        <div className="container mx-auto p-6 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <div className="space-y-6">
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Information We Collect</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We collect personal information such as name, email, and contact details, as well as information related to the services you request.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We use your information to provide and improve our services, communicate with you regarding appointments, and for marketing purposes.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Data Protection</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We implement industry-standard security measures to protect your data. We will never sell or share your information without consent.
                    </p>
                </section>
                <section>
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed">
                        If you have any questions about our privacy practices, please email us at <a href="mailto:info@elprocleaningservice.com" className="text-blue-500">info@elprocleaningservice.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Privacy