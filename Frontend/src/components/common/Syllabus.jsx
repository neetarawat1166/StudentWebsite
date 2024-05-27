import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { FaStar } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import BgImage from '../../images/wavii2.jpg';

const Syllabus = ({ topics, courseHeading }) => { // Accepting 'topics' as props
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [selectedSubtopic, setSelectedSubtopic] = useState("");
  const [selectedSubtopics, setSelectedSubtopics] = useState([]);

  const handleFeedbackClick = (clickedTopic) => {
    setSelectedTopic(clickedTopic);
    setShowFeedback(!showFeedback);
  };

  const handleDropdownChange = (event) => {
    setSelectedSubtopic(event.target.value);
    if (event.target.value && !selectedSubtopics.includes(event.target.value)) {
      setSelectedSubtopics([...selectedSubtopics, event.target.value]);
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    setSelectedSubtopics(selectedSubtopics.filter(option => option !== optionToRemove));
  };

  const handleSubmit = () => {
    if (!selectedTopic || selectedSubtopics.length === 0 || comment.trim() === "" || rating === 0) {
      toast.error("Please fill all the fields.");
      return;
    }
    console.log("Selected Subtopics:", selectedSubtopics);
    console.log("Comment:", comment);
    console.log("Rating:", rating);
    setSelectedTopic(null);
    setSelectedSubtopic("");
    setSelectedSubtopics([]);
    setComment("");
    setRating(0);
    setShowFeedback(false);
    toast.success("Feedback submitted successfully!");
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleCrossClick = () => {
    setShowFeedback(false);
    setSelectedTopic(null);
    setSelectedSubtopic("");
    setSelectedSubtopics([]);
    setComment("");
    setRating(0);
  };

  return (
    <>
      <section className='py-8'>
        <div className='container mx-auto px-[80px] pb-10 flex flex-col items-center'>
          <h1 className='text-[38px] md:text-[50px] font-bold pb-6 text-[#003366]'>{courseHeading}</h1>
          <div className='flex bg-[#faead8] border-2 border-[#003366] shadow-lg shadow-[#003366] rounded-xl flex-wrap w-full items-center justify-center py-8'>
            {topics.map((topic, index) => (
              <div key={index} className='flex flex-col md:flex-row w-[90%] justify-end py-2'>
                <div className='w-full md:w-[70%]'>
                  <h2 className="text-2xl font-bold pb-2 md:pb-0">{topic.heading}</h2>
                  <div className="flex flex-col md:flex-row flex-wrap pb-5 items-center">
                    {topic.subtopics.map((subtopic, subIndex) => (
                      <div key={subIndex} className='w-full md:w-[50%] flex gap-2 items-center'>
                        <div className=''>
                          <VscDebugBreakpointLog className="mr-[2px]" />
                        </div>
                        <div>
                          <h3>{subtopic}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-[20%] text-center flex flex-col md:flex-row items-center justify-start">
                  <button className='bg-[#003366] text-white font-semibold p-4 text-lg rounded-xl' onClick={() => handleFeedbackClick(topic)}>Feedback</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showFeedback && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={handleCrossClick}></div>
          <div className="bg-white w-[35%] relative rounded-md py-4 px-8 max-h-[80vh] overflow-auto" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <button className="absolute top-[2%] right-2 text-black" onClick={handleCrossClick}>
              <ImCross />
            </button>
            <label className="block font-bold pb-2">Please specify the areas in which you're encountering difficulties:</label>
            <div className="pb-2">
              <label className="block font-bold pb-2">Choose the subtopic:</label>
              <div className="relative">
                <select
                  className="w-full px-3 py-2 border rounded-md"
                  value={selectedSubtopic}
                  onChange={handleDropdownChange}
                >
                  <option value="">Choose the subtopic</option>
                  {selectedTopic && selectedTopic.subtopics.map((subtopic, index) => (
                    <option key={index} value={subtopic}>{subtopic}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='addOptions'>
              {selectedSubtopics.map((option, index) => (
                <div key={index} className="relative flex items-center bg-gray-200 my-1 px-2 py-1 rounded-md pr-1 pb-1">
                  <span className="pr-2">{option}</span>
                  <ImCross className="absolute cursor-pointer right-1" onClick={() => handleRemoveOption(option)} />
                </div>
              ))}
            </div>
            <div className="py-4">
              <label className="block font-bold pb-2">Rate this topic:</label>
              <div className='flex items-center'>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < rating ? "text-yellow-400 text-[30px] cursor-pointer mx-2" : "text-gray-400 mx-2 cursor-pointer text-[30px]"}
                    onClick={() => handleStarClick(index + 1)}
                  />
                ))}
              </div>
            </div>
            <div className="pb-4">
              <label htmlFor="comment" className="block font-bold pb-2">Please provide any comments or suggestions to help us improve your understanding:</label>
              <textarea id="comment" rows="4" className="w-full px-3 py-2 border rounded-md" value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            <div className='text-center pb-2'>
              <button className="bg-[#65bc7b] font-semibold text-white px-6 py-3 rounded-md" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
    </>
  );
};

export default Syllabus;
8