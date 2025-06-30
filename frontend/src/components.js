import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Mock Data
const mockVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Advanced React Hooks Tutorial - Complete Guide 2025',
    thumbnail: 'https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg',
    channel: 'Tech Mastery',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    views: '2.1M',
    uploadTime: '2 days ago',
    duration: '23:45',
    description: 'Learn advanced React hooks patterns and best practices in this comprehensive tutorial. We cover useCallback, useMemo, useContext, and custom hooks.',
    likes: '45K',
    dislikes: '234',
    subscribers: '1.2M'
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Epic Gaming Setup Tour 2025 - $15000 Build!',
    thumbnail: 'https://images.pexels.com/photos/32755792/pexels-photo-32755792.jpeg',
    channel: 'Gaming Central',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    views: '856K',
    uploadTime: '1 week ago',
    duration: '15:32',
    description: 'Check out this incredible gaming setup with the latest RTX 4090, custom water cooling, and RGB everything!',
    likes: '23K',
    dislikes: '89',
    subscribers: '890K'
  },
  {
    id: 'C0DPdy98e4c',
    title: '10-Minute Home Workout - No Equipment Needed',
    thumbnail: 'https://images.pexels.com/photos/8173463/pexels-photo-8173463.jpeg',
    channel: 'FitLife Pro',
    channelAvatar: 'https://images.unsplash.com/photo-1594736797933-d0c6e2e8e7f0?w=40&h=40&fit=crop&crop=face',
    views: '1.8M',
    uploadTime: '3 days ago',
    duration: '10:15',
    description: 'Get fit at home with this quick and effective workout routine. Perfect for beginners and advanced fitness enthusiasts.',
    likes: '67K',
    dislikes: '456',
    subscribers: '2.3M'
  },
  {
    id: 'YQHsXMglC9A',
    title: 'Perfect Pasta Recipe - Italian Chef Secrets',
    thumbnail: 'https://images.pexels.com/photos/7669748/pexels-photo-7669748.jpeg',
    channel: 'Cooking Masters',
    channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    views: '423K',
    uploadTime: '5 days ago',
    duration: '18:27',
    description: 'Learn how to make authentic Italian pasta from scratch with these professional techniques passed down through generations.',
    likes: '18K',
    dislikes: '123',
    subscribers: '567K'
  },
  {
    id: 'Ks-_Mh1QhMc',
    title: 'iPhone 16 Pro Max Review - Is It Worth It?',
    thumbnail: 'https://images.unsplash.com/photo-1650228299509-8db2b10a64a4',
    channel: 'Tech Reviews Daily',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    views: '3.2M',
    uploadTime: '1 day ago',
    duration: '12:43',
    description: 'Comprehensive review of the iPhone 16 Pro Max covering camera, performance, battery life, and whether you should upgrade.',
    likes: '89K',
    dislikes: '2.1K',
    subscribers: '4.5M'
  },
  {
    id: 'kJQP7kiw5Fk',
    title: 'Learn JavaScript in 2025 - Complete Beginner Guide',
    thumbnail: 'https://images.pexels.com/photos/8100061/pexels-photo-8100061.jpeg',
    channel: 'Code Academy',
    channelAvatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=40&h=40&fit=crop&crop=face',
    views: '1.5M',
    uploadTime: '1 week ago',
    duration: '45:12',
    description: 'Master JavaScript fundamentals with this comprehensive tutorial covering variables, functions, objects, and modern ES6+ features.',
    likes: '56K',
    dislikes: '789',
    subscribers: '3.1M'
  },
  {
    id: 'PmL9yKiTmFY',
    title: 'Gaming Headset Showdown - Top 5 for 2025',
    thumbnail: 'https://images.pexels.com/photos/32755791/pexels-photo-32755791.jpeg',
    channel: 'Gaming Gear',
    channelAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face',
    views: '734K',
    uploadTime: '4 days ago',
    duration: '20:18',
    description: 'Compare the best gaming headsets of 2025. Which one offers the best value for competitive gaming and streaming?',
    likes: '28K',
    dislikes: '234',
    subscribers: '1.8M'
  },
  {
    id: 'L_jWHffIx5E',
    title: 'Travel Vlog: Tokyo Street Food Adventure',
    thumbnail: 'https://images.unsplash.com/photo-1640409084317-ada21bc20d14',
    channel: 'Wanderlust Weekly',
    channelAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
    views: '992K',
    uploadTime: '6 days ago',
    duration: '25:33',
    description: 'Join me as I explore the incredible street food scene in Tokyo, trying authentic ramen, sushi, and hidden local delicacies.',
    likes: '42K',
    dislikes: '156',
    subscribers: '2.7M'
  }
];

const mockComments = [
  {
    id: 1,
    user: 'TechEnthusiast99',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    comment: 'This is exactly what I needed! The explanation of useCallback vs useMemo was perfect.',
    likes: 156,
    time: '2 hours ago',
    replies: 12
  },
  {
    id: 2,
    user: 'CodeNewbie2025',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
    comment: 'As a beginner, this tutorial was super helpful. Can you do one on Redux Toolkit next?',
    likes: 89,
    time: '4 hours ago',
    replies: 5
  },
  {
    id: 3,
    user: 'ReactMaster',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    comment: 'Great content as always! The custom hooks section saved me hours of work.',
    likes: 234,
    time: '1 day ago',
    replies: 18
  }
];

// Icons Components
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
  </svg>
);

const SubscriptionsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"/>
  </svg>
);

const LibraryIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const ThumbUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
);

const ThumbDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
  </svg>
);

const NotificationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
  </svg>
);

const CreateIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
  </svg>
);

const DarkModeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

// Header Component
export const Header = ({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen, searchQuery, setSearchQuery, setSearchActive }) => {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchActive(true);
      navigate('/search');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <MenuIcon />
          </button>
          <div 
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="text-red-600 text-2xl font-bold">
              <svg viewBox="0 0 90 20" className="w-24 h-5">
                <path fill="currentColor" d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5701 5.35042 27.9727 3.12324Z"/>
                <path fill="white" d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"/>
                <path fill="currentColor" d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"/>
                <path fill="currentColor" d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"/>
                <path fill="currentColor" d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"/>
                <path fill="currentColor" d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"/>
                <path fill="currentColor" d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"/>
                <path fill="currentColor" d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"/>
                <path fill="currentColor" d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.4506C82.3869 16.5826 82.1094 15.2259 82.1094 13.3804V11.2988C82.1094 9.43896 82.3987 8.07991 82.9772 7.21071C83.5558 6.34151 84.5459 5.90927 85.9499 5.90927C86.9165 5.90927 87.6597 6.13541 88.1771 6.58993C88.6945 7.04446 89.0042 7.62811 89.1075 8.34326C89.2108 9.05841 89.2625 10.0304 89.2625 11.2693V13.2583H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className={`flex items-center flex-1 h-10 bg-gray-100 dark:bg-[#121212] border ${searchFocused ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'} rounded-full overflow-hidden`}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <DarkModeIcon />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <CreateIcon />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <NotificationIcon />
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
            U
          </div>
        </div>
      </div>
    </header>
  );
};

// Sidebar Component
export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Trending', icon: TrendingIcon, path: '/trending' },
    { name: 'Subscriptions', icon: SubscriptionsIcon, path: '/subscriptions' },
    { name: 'Library', icon: LibraryIcon, path: '/library' }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  return (
    <div className={`fixed left-0 top-14 bg-white dark:bg-[#0f0f0f] h-[calc(100vh-3.5rem)] transition-all duration-300 z-40 ${
      sidebarOpen ? 'w-60' : 'w-16'
    } border-r border-gray-200 dark:border-gray-800`}>
      <div className="p-3">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={`w-full flex items-center space-x-4 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              activeItem === item.name ? 'bg-gray-100 dark:bg-gray-800' : ''
            }`}
          >
            <item.icon />
            {sidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
          </button>
        ))}
        
        {sidebarOpen && (
          <>
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            <div className="space-y-2">
              <h3 className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">Subscriptions</h3>
              {['Tech Mastery', 'Gaming Central', 'FitLife Pro', 'Cooking Masters'].map((channel) => (
                <button
                  key={channel}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
                    {channel[0]}
                  </div>
                  <span className="text-sm truncate">{channel}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Video Card Component
const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  return (
    <div 
      className="cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-3">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
            <PlayIcon />
          </div>
        )}
      </div>
      <div className="flex space-x-3">
        <img
          src={video.channelAvatar}
          alt={video.channel}
          className="w-9 h-9 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm line-clamp-2 mb-1">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer">
            {video.channel}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {video.views} views • {video.uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
};

// Video Grid Component
export const VideoGrid = () => {
  return (
    <div className="pt-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

// Video Player Component
export const VideoPlayer = () => {
  const { videoId } = useParams();
  const video = mockVideos.find(v => v.id === videoId);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  if (!video) {
    return <div className="pt-20 px-6">Video not found</div>;
  }

  const relatedVideos = mockVideos.filter(v => v.id !== videoId).slice(0, 10);

  return (
    <div className="pt-16 flex gap-6 p-6">
      <div className="flex-1 max-w-4xl">
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-lg mb-4 relative">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={video.title}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div className="mb-4">
          <h1 className="text-xl font-semibold mb-2">{video.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={video.channelAvatar}
                alt={video.channel}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">{video.channel}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{video.subscribers} subscribers</p>
              </div>
              <button
                onClick={() => setSubscribed(!subscribed)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  subscribed
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full">
                <button
                  onClick={() => {
                    setLiked(!liked);
                    if (disliked) setDisliked(false);
                  }}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-l-full hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    liked ? 'text-blue-600' : ''
                  }`}
                >
                  <ThumbUpIcon />
                  <span className="text-sm">{video.likes}</span>
                </button>
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
                <button
                  onClick={() => {
                    setDisliked(!disliked);
                    if (liked) setLiked(false);
                  }}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    disliked ? 'text-red-600' : ''
                  }`}
                >
                  <ThumbDownIcon />
                  <span className="text-sm">{video.dislikes}</span>
                </button>
              </div>
              <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <ShareIcon />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>{video.views} views</span>
            <span>{video.uploadTime}</span>
          </div>
          <p className="text-sm">{video.description}</p>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Comments</h3>
          <div className="space-y-4">
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium">{comment.user}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{comment.time}</span>
                  </div>
                  <p className="text-sm mb-2">{comment.comment}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-600 dark:text-gray-400">
                    <button className="flex items-center space-x-1 hover:text-gray-900 dark:hover:text-gray-300">
                      <ThumbUpIcon />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="hover:text-gray-900 dark:hover:text-gray-300">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <div className="w-80 flex-shrink-0">
        <h3 className="text-lg font-medium mb-4">Related Videos</h3>
        <div className="space-y-4">
          {relatedVideos.map((relatedVideo) => (
            <div
              key={relatedVideo.id}
              className="flex space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg"
              onClick={() => window.location.href = `/watch/${relatedVideo.id}`}
            >
              <div className="relative">
                <img
                  src={relatedVideo.thumbnail}
                  alt={relatedVideo.title}
                  className="w-40 aspect-video object-cover rounded-lg"
                />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                  {relatedVideo.duration}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-2 mb-1">
                  {relatedVideo.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  {relatedVideo.channel}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {relatedVideo.views} views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Search Results Component
export const SearchResults = ({ searchQuery, setSearchActive }) => {
  const filteredVideos = mockVideos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    return () => setSearchActive(false);
  }, [setSearchActive]);

  return (
    <div className="pt-20 px-6">
      <h2 className="text-xl font-medium mb-6">
        Search results for "{searchQuery}"
      </h2>
      <div className="space-y-4">
        {filteredVideos.map((video) => (
          <div key={video.id} className="flex space-x-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-80 aspect-video object-cover rounded-lg"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                {video.duration}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium line-clamp-2 mb-2">
                {video.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.uploadTime}</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={video.channelAvatar}
                  alt={video.channel}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">{video.channel}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};