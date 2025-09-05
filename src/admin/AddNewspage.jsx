import React, { useState } from 'react';

export const AddNewspage = () => {
  const [newsData, setNewsData] = useState({
    newsTitle: '',
    newsContent: '',
    newsImage: '',
    newsDate: '',
    newsTime: '',
    newsLocation: '',
    newsAdmissionFee: '',
    newsMonthlyFee: '',
    newsContactInfo: '',
    newsDescription: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewsData({
      ...newsData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log('Add News Article:', newsData);
    alert('News Article Added! (Check console)');
    // Reset form after successful submission
    setNewsData({
      newsTitle: '',
      newsContent: '',
      newsImage: '',
      newsDate: '',
      newsTime: '',
      newsLocation: '',
      newsAdmissionFee: '',
      newsMonthlyFee: '',
      newsContactInfo: '',
      newsDescription: '',
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Update News Article:', newsData);
    alert('News Article Updated! (Check console)');
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this news article?')) {
      console.log('Delete News Article:', newsData.newsTitle);
      alert('News Article Deleted! (Check console)');
      // Reset form after deletion
      setNewsData({
        newsTitle: '',
        newsContent: '',
        newsImage: '',
        newsDate: '',
        newsTime: '',
        newsLocation: '',
        newsAdmissionFee: '',
        newsMonthlyFee: '',
        newsContactInfo: '',
        newsDescription: '',
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage News Articles</h1>
      <form onSubmit={handleAdd} className="space-y-4">
        {/* News Title */}
        <div>
          <label htmlFor="newsTitle" className="block text-sm font-medium text-gray-700 mb-1">News Title</label>
          <input
            type="text"
            id="newsTitle"
            name="newsTitle"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter news title"
            value={newsData.newsTitle}
            onChange={handleChange}
            required
          />
        </div>

        {/* News Image */}
        <div>
          <label htmlFor="newsImage" className="block text-sm font-medium text-gray-700 mb-1">News Image</label>
          <input
            type="file"
            id="newsImage"
            name="newsImage"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            onChange={handleChange}
          />
          {newsData.newsImage && typeof newsData.newsImage === 'object' && (
            <p className="text-sm text-gray-500 mt-1">Selected: {newsData.newsImage.name}</p>
          )}
        </div>

        {/* News Description */}
        <div>
          <label htmlFor="newsDescription" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="newsDescription"
            name="newsDescription"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a short description of the news"
            value={newsData.newsDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* News Content */}
        <div>
          <label htmlFor="newsContent" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            id="newsContent"
            name="newsContent"
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write the full news content here..."
            value={newsData.newsContent}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Date, Time, and Location (in a flex container) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="newsDate" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              id="newsDate"
              name="newsDate"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={newsData.newsDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="newsTime" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input
              type="time"
              id="newsTime"
              name="newsTime"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={newsData.newsTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="newsLocation" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              id="newsLocation"
              name="newsLocation"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Main Hall"
              value={newsData.newsLocation}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Admission, Monthly Fee, and Contact Info (in a flex container) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="newsAdmissionFee" className="block text-sm font-medium text-gray-700 mb-1">Admission Fee</label>
            <input
              type="text"
              id="newsAdmissionFee"
              name="newsAdmissionFee"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., $50"
              value={newsData.newsAdmissionFee}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="newsMonthlyFee" className="block text-sm font-medium text-gray-700 mb-1">Monthly Fee</label>
            <input
              type="text"
              id="newsMonthlyFee"
              name="newsMonthlyFee"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., $30"
              value={newsData.newsMonthlyFee}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="newsContactInfo" className="block text-sm font-medium text-gray-700 mb-1">Contact Info</label>
            <input
              type="text"
              id="newsContactInfo"
              name="newsContactInfo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., +1234567890"
              value={newsData.newsContactInfo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out font-semibold"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleUpdate}
            className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out font-semibold"
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out font-semibold"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};