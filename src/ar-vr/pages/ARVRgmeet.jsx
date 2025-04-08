import React from 'react';
import { Video, Users } from 'lucide-react';

const ARVRGmeetpage = () => {
  const meetings = [
    {
      person: "Meet 1",
      link: "meet.google.com/rst-ztxc-jss",
      time: "7.00 PM - 8.00 PM",
      description: "Team Meeting 1"
    },
    {
      person: "Meet 2",
      link: "meet.google.com/sok-baur-fpp",
      time: "7.00 PM - 8.00 PM",
      description: "Team Meeting 2"
    },
    {
      person: "Meet 3",
      link: "meet.google.com/tnd-vfer-whm",
      time: "7.00 PM - 8.00 PM",
      description: "Team Meeting 3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
          AR-VR Virtual Meeting Hub
        </h1>
        
        {/* Enhanced text styling - updated to match first page theme */}
        <div className="relative">
          <p className="text-xl text-center font-light tracking-wide leading-relaxed mx-auto max-w-3xl px-6 py-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-gray-50 rounded-2xl">
            <span className="block mb-2 text-2xl font-semibold text-blue-600">
              
            </span>
            <span className="text-gray-700">
              Experience interactive learning, personalized mentoring, and engaging discussions
            </span>
          </p>
        </div>
      </div>

      {/* Meeting Grid - updated to match first page theme */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {meetings.map((meeting, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">{meeting.person}</h2>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2">{meeting.time}</p>
              <p className="text-gray-700 mb-4">{meeting.description}</p>
              
              <button 
                onClick={() => window.open(`https://${meeting.link}`, '_blank')}
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-blue-300/40 hover:scale-105 active:scale-95"
              >
                <Video className="w-4 h-4" />
                Join Meeting
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ARVRGmeetpage;