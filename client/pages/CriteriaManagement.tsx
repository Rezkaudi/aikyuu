import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/ui/navbar';

interface Criterion {
  id: string;
  label: string;
  content: string;
  createdDate: string;
}

export default function CriteriaManagement() {
  const navigate = useNavigate();
  const [position] = useState('ui/ux designer');
  const [criteria, setCriteria] = useState<Criterion[]>([
    {
      id: '1',
      label: 'Criteria-1:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    },
    {
      id: '2',
      label: 'Criteria-2:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    },
    {
      id: '3',
      label: 'Criteria-3:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    },
    {
      id: '4',
      label: 'Criteria-4:',
      content: 'Lomer ipsom...',
      createdDate: 'Created: Jul 16, 2025'
    }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCriteriaText, setNewCriteriaText] = useState('');

  const handleDeleteCriterion = (id: string) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const handleAddCriteria = () => {
    if (!newCriteriaText.trim()) return;
    
    const newCriterion: Criterion = {
      id: Date.now().toString(),
      label: `Criteria-${criteria.length + 1}:`,
      content: newCriteriaText.substring(0, 15) + '...',
      createdDate: `Created: ${new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      })}`
    };
    
    setCriteria([...criteria, newCriterion]);
    setNewCriteriaText('');
    setShowAddModal(false);
  };

  const handleCreateNewPosition = () => {
    navigate('/create-position');
  };

  const handleSave = () => {
    console.log('Criteria saved:', criteria);
    navigate('/upload-cv');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar 
        userCredits={50}
        userName="Alice ahmad"
        userAvatar="https://images.unsplash.com/photo-1494790108755-2616b60b7751?w=100&h=100&fit=crop&crop=face"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 md:px-12">
        {/* Process Flow Section */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 mb-14">
          {/* Process Steps Indicator */}
          <div className="relative mb-16">
            {/* Progress Line */}
            <div className="absolute top-6 left-12 right-12 h-1 bg-gray-300">
              <div className="absolute inset-0 bg-gradient-to-r from-aikyuu-primary to-gray-300"></div>
            </div>

            {/* Step Circles */}
            <div className="relative flex justify-between items-center">
              {/* Step 1 - Active */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-aikyuu-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <div className="w-6 h-6 bg-aikyuu-dark rounded-full"></div>
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    New Position
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    Create New Position
                  </p>
                </div>
              </div>

              {/* Step 2 - Inactive */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4 relative z-10">
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    Upload CV
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    Download one or more CVs
                  </p>
                </div>
              </div>

              {/* Step 3 - Inactive */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4 relative z-10">
                </div>
                <div className="text-center max-w-60">
                  <h3 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold mb-2">
                    View Result
                  </h3>
                  <p className="text-gray-500 font-montserrat text-lg md:text-xl font-medium">
                    View Result
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Position and Criteria Section */}
        <div className="max-w-6xl mx-auto mb-16 space-y-11">
          {/* Position Display */}
          <div className="bg-white rounded-2xl px-8 md:px-44 py-8 shadow-sm">
            <div className="flex items-center gap-16">
              <span className="text-gray-500 font-montserrat text-2xl md:text-3xl font-medium">
                Position:
              </span>
              <span className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold">
                {position}
              </span>
            </div>
          </div>

          {/* Criteria Management Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-aikyuu-primary px-8 md:px-16 py-6">
              <h1 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold">
                + Create Criteria
              </h1>
            </div>

            {/* Criteria List */}
            <div className="p-8 md:p-14">
              <div className="space-y-6 mb-14">
                {/* Add New Criteria Row */}
                <div
                  className="flex items-center bg-gray-100 rounded-2xl px-8 py-6 shadow-sm cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => setShowAddModal(true)}
                >
                  <div className="flex items-center space-x-2 mr-6">
                    <div className="grid grid-cols-2 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 font-montserrat text-lg font-medium mr-auto">
                    Add Criteria:
                  </span>
                  <div className="flex items-center bg-white rounded-lg px-6 py-3 shadow-inner border min-w-0 flex-1 max-w-2xl ml-4">
                    <span className="text-gray-400 font-montserrat text-base">
                      Place holder
                    </span>
                  </div>
                  <button className="ml-4 p-2 rounded-full hover:bg-gray-300 transition-colors">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Existing Criteria */}
                {criteria.map((criterion) => (
                  <div key={criterion.id} className="bg-gray-50 rounded-2xl px-8 py-5 shadow-sm">
                    <div className="flex items-center">
                      <span className="text-gray-500 font-montserrat text-lg font-medium w-20 mr-6">
                        {criterion.label}
                      </span>
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-aikyuu-dark font-montserrat text-base font-bold">
                          {criterion.content}
                        </span>
                        <span className="text-aikyuu-dark font-montserrat text-base mx-8">
                          {criterion.createdDate}
                        </span>
                        <button
                          onClick={() => handleDeleteCriterion(criterion.id)}
                          className="p-2 rounded-2xl hover:bg-red-50 transition-colors group"
                          aria-label="Delete criterion"
                        >
                          <svg 
                            width="36" 
                            height="36" 
                            viewBox="0 0 36 36" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-9 h-9 stroke-aikyuu-dark group-hover:stroke-red-500 transition-colors"
                          >
                            <path 
                              d="M9.89062 12.9688L11.5751 29.7307H25.0513L26.7358 12.9688" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                            <path 
                              d="M20.5234 23.1302V15.7969" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                            <path 
                              d="M16.1016 23.1302V15.7969" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                            <path 
                              d="M7.36328 9.61801H14.1013M14.1013 9.61801L14.6645 7.37657C14.8285 6.72366 15.4181 6.26562 16.0944 6.26562H20.5308C21.2072 6.26562 21.7967 6.72366 21.9608 7.37657L22.5239 9.61801M14.1013 9.61801H22.5239M22.5239 9.61801H29.262" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end items-center gap-4">
                <button
                  onClick={handleCreateNewPosition}
                  className="px-8 py-4 rounded-[26px] border border-gray-300 bg-white text-aikyuu-dark font-montserrat text-lg font-bold hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Create New Position
                </button>
                <button
                  onClick={handleSave}
                  className="px-8 py-4 rounded-[26px] bg-aikyuu-primary text-aikyuu-dark font-montserrat text-lg font-bold hover:bg-aikyuu-primary/90 transition-colors shadow-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Criteria Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[30px] px-12 py-12 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-center mb-9">
              <svg
                width="42"
                height="43"
                viewBox="0 0 275 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4 scale-[0.15] origin-left"
              >
                <text
                  fill="#1E1E1E"
                  xmlSpace="preserve"
                  style={{whiteSpace: 'pre'}}
                  fontFamily="Montserrat"
                  fontSize="24"
                  fontWeight="600"
                  letterSpacing="0em"
                >
                  <tspan x="56.4492" y="27.7876">Add  New Criteria</tspan>
                </text>
                <path
                  d="M0.550781 34.2859C0.750926 33.402 0.928469 32.51 1.34584 31.7055C2.66913 29.1548 4.66915 27.8081 7.36124 27.7014C7.79098 27.6844 8.19424 27.5645 8.56272 27.3425C10.3323 26.2769 11.6748 24.7628 12.5315 22.7595C12.6583 22.4629 12.7448 22.1342 12.7897 21.8104C12.8691 21.2383 12.7725 20.7211 12.3377 20.3042C11.5608 19.5596 10.9283 18.6932 10.6695 17.5733C10.2374 15.7035 10.6292 14.046 11.8744 12.6819C15.5966 8.60381 19.3375 4.54583 23.0748 0.484161C23.6752 -0.168326 24.3106 -0.158075 24.9104 0.495304C29.6909 5.70216 34.4703 10.9099 39.249 16.1187C39.9246 16.8551 39.9262 17.5062 39.2529 18.2403C35.5745 22.2507 31.8977 26.2629 28.2135 30.2671C26.2358 32.4168 23.4585 32.4093 21.4745 30.2665C21.4654 30.2567 21.4566 30.2466 21.4475 30.2368C20.5064 29.219 19.9645 29.0915 18.764 29.7071C16.9142 30.6559 15.5313 32.1445 14.6026 34.1282C14.4222 34.5134 14.3299 34.9266 14.3272 35.368C14.3066 38.7728 11.9634 41.8619 8.90574 42.5449C8.67287 42.597 8.42118 42.5666 8.2062 42.7097H6.6751C6.61793 42.6838 6.5627 42.6447 6.50318 42.634C3.65216 42.1233 1.78714 40.348 0.856573 37.3897C0.718915 36.9522 0.650905 36.4888 0.550781 36.0375V34.2859ZM7.4586 40.2075C7.67286 40.2361 7.92178 40.1645 8.17409 40.133C10.0175 39.9023 11.7506 37.9841 11.9707 35.9736C12.0486 35.2626 11.9905 34.5296 12.2393 33.8429C13.3927 30.6589 15.4732 28.4627 18.36 27.2039C20.1267 26.4337 21.7351 26.7795 23.0199 28.4122C23.0779 28.4858 23.1446 28.5516 23.2094 28.6183C24.1879 29.6251 25.5413 29.6183 26.4972 28.5869C27.7384 27.2477 28.9647 25.8922 30.2111 24.5589C30.4396 24.3144 30.431 24.1844 30.2056 23.9404C27.6098 21.1298 25.0256 18.3063 22.4382 15.4866C20.8785 13.7869 19.3197 12.0864 17.7567 10.3905C17.6382 10.2619 17.5474 10.0335 17.3093 10.2972C16.0131 11.7335 14.6868 13.1379 13.3996 14.5836C12.8975 15.1476 12.7282 15.8596 12.844 16.6594C12.9531 17.4137 13.3663 17.9382 13.8527 18.4193C15.1481 19.7009 15.3988 21.2888 14.8802 23.0165C14.0507 25.7798 12.3279 27.7766 10.0941 29.2805C9.29662 29.8173 8.43243 30.1833 7.47333 30.1964C4.25679 30.24 2.51398 33.4053 2.90282 35.9191C3.27621 38.334 5.15729 40.1982 7.4586 40.2075ZM36.9506 17.1807C36.8408 17.0509 36.7502 16.9368 36.6529 16.8303C35.2404 15.2852 33.8295 13.7386 32.4134 12.1975C29.6893 9.2329 26.962 6.27198 24.2375 3.30782C24.0959 3.15372 23.9968 3.00609 23.7822 3.24263C22.2946 4.88187 20.7976 6.51109 19.2955 8.13462C19.125 8.3188 19.1777 8.40782 19.3212 8.56036C19.9047 9.18087 20.4746 9.81642 21.0517 10.4441C24.6672 14.3769 28.2837 18.3087 31.8971 22.2439C32.0242 22.3824 32.0966 22.4992 32.282 22.2955C33.7802 20.6482 35.2894 19.0129 36.7947 17.3733C36.8464 17.317 36.8917 17.2538 36.9506 17.1807Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M7.41812 36.4531C6.79724 36.4434 6.28884 35.8706 6.29498 35.1875C6.30111 34.5087 6.82148 33.9519 7.44666 33.9551C8.0927 33.9586 8.60354 34.5335 8.5879 35.2396C8.57287 35.9216 8.05108 36.4629 7.41812 36.4531Z"
                  fill="#1E1E1E"
                />
              </svg>
              <div className="flex items-center gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-aikyuu-dark"
                >
                  <path d="M0.550781 34.2859C0.750926 33.402 0.928469 32.51 1.34584 31.7055C2.66913 29.1548 4.66915 27.8081 7.36124 27.7014C7.79098 27.6844 8.19424 27.5645 8.56272 27.3425C10.3323 26.2769 11.6748 24.7628 12.5315 22.7595C12.6583 22.4629 12.7448 22.1342 12.7897 21.8104C12.8691 21.2383 12.7725 20.7211 12.3377 20.3042C11.5608 19.5596 10.9283 18.6932 10.6695 17.5733C10.2374 15.7035 10.6292 14.046 11.8744 12.6819C15.5966 8.60381 19.3375 4.54583 23.0748 0.484161C23.6752 -0.168326 24.3106 -0.158075 24.9104 0.495304C29.6909 5.70216 34.4703 10.9099 39.249 16.1187C39.9246 16.8551 39.9262 17.5062 39.2529 18.2403C35.5745 22.2507 31.8977 26.2629 28.2135 30.2671C26.2358 32.4168 23.4585 32.4093 21.4745 30.2665C21.4654 30.2567 21.4566 30.2466 21.4475 30.2368C20.5064 29.219 19.9645 29.0915 18.764 29.7071C16.9142 30.6559 15.5313 32.1445 14.6026 34.1282C14.4222 34.5134 14.3299 34.9266 14.3272 35.368C14.3066 38.7728 11.9634 41.8619 8.90574 42.5449C8.67287 42.597 8.42118 42.5666 8.2062 42.7097H6.6751C6.61793 42.6838 6.5627 42.6447 6.50318 42.634C3.65216 42.1233 1.78714 40.348 0.856573 37.3897C0.718915 36.9522 0.650905 36.4888 0.550781 36.0375V34.2859Z"/>
                </svg>
                <h2 className="text-aikyuu-dark font-montserrat text-2xl font-bold">
                  Add New Criteria
                </h2>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-9"></div>

            {/* Description Section */}
            <div className="mb-9">
              <label className="block text-aikyuu-dark font-montserrat text-xl font-bold mb-7">
                Description
              </label>
              <div className="bg-gray-50 rounded-[19px] px-10 py-4">
                <textarea
                  value={newCriteriaText}
                  onChange={(e) => setNewCriteriaText(e.target.value)}
                  placeholder="Type Your text"
                  rows={3}
                  className="w-full bg-transparent text-gray-500 font-montserrat text-xl border-none outline-none resize-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-20 py-6 rounded-[125px] border border-aikyuu-dark bg-white text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCriteria}
                className="px-20 py-6 rounded-[125px] bg-aikyuu-primary text-aikyuu-dark font-montserrat text-2xl font-bold hover:bg-aikyuu-primary/90 transition-colors"
              >
                Add Criteria
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg
                width="52"
                height="86"
                viewBox="0 0 53 87"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-20 fill-aikyuu-primary"
              >
                <path
                  d="M34.7183 86.5C34.2121 86.3976 34.0062 86.0288 33.7227 85.7419C26.4361 78.3638 21.2602 69.1269 18.7447 59.012C18.4475 57.5946 17.8379 56.2633 16.9614 55.1175C16.0848 53.9716 14.9639 53.0408 13.6822 52.3944C10.4153 50.571 6.96267 49.0958 3.77671 47.088C-0.610738 44.3563 -0.587117 42.4372 3.81721 39.6918C7.19217 37.5816 10.9046 36.1269 14.2796 34.0372C15.7291 33.326 16.9471 32.2098 17.7895 30.8206C18.1528 29.9007 18.4252 28.9468 18.6029 27.9727C21.2408 17.8517 26.4229 8.59367 33.6451 1.09937C34.4382 0.279853 34.8432 0.320829 35.6127 1.09937C41.0126 6.54917 46.4317 11.9705 51.8699 17.3634C52.582 18.0463 52.7238 18.4697 51.9509 19.2688C51.9509 19.2688 47.8301 25.5381 45.7005 28.6284C44.3974 30.9007 42.5555 32.8089 40.341 34.1806C36.7906 36.1269 33.014 37.6226 29.5412 39.7533C28.1 40.6343 26.2742 41.5358 26.2539 43.3592C26.2337 45.2646 28.1203 46.166 29.6019 47.0675C32.8689 49.0753 36.4025 50.5505 39.8112 52.3124C42.3643 53.8013 44.4653 55.9696 45.8861 58.5817C47.9111 61.6345 52.0555 67.675 52.0555 67.675C52.7035 68.3579 52.6023 68.6994 52.015 69.2935C46.4733 74.7843 40.9721 80.3126 35.4541 85.8239C35.228 86.0698 34.9445 86.2917 34.7183 86.5Z"
                  fill="#00EBBD"
                />
              </svg>
              <span className="text-aikyuu-primary font-poppins text-4xl md:text-6xl font-bold">
                Aikyuu
              </span>
            </div>

            {/* Copyright */}
            <p className="text-gray-300 font-poppins text-lg md:text-xl text-center">
              Copyright © Resumate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
