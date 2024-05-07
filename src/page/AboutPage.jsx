import React from 'react';


function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About Our Platform</h1>

        {/* Company Overview */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Company Overview</h2>
            <p className="mt-1 text-sm text-gray-500">
              We are a video-sharing platform dedicated to connecting people through shared experiences.
              Our platform allows users to discover, watch, and share videos on a wide range of topics.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Our Mission</h2>
            <p className="mt-1 text-sm text-gray-500">
              Our mission is to empower individuals and communities to express themselves and connect
              through the power of video content. We aim to provide a platform where everyone's voice
              can be heard and valued.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Our Team</h2>
            <div className="mt-4">
              {/* Individual team members */}
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full" src="team-member1.jpg" alt="Team Member 1" />
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">John Doe</div>
                  <div className="text-sm text-gray-500">Co-founder & CEO</div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img className="h-10 w-10 rounded-full" src="team-member2.jpg" alt="Team Member 2" />
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                  <div className="text-sm text-gray-500">Co-founder & CTO</div>
                </div>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Have questions or feedback? Contact us:</p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
                <li>Email: contact@example.com</li>
                <li>Phone: +1234567890</li>
                <li>Address: 123 Main St, City, Country</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
     
    </div>
  );
}

export default AboutPage;
