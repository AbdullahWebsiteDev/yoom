// app/ClientTime.js
"use client";

import React, { useEffect, useState } from "react";

const ClientTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to update the current time
  const updateTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    // Update the time immediately
    updateTime();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000); // 1000 ms = 1 second

    // Clear the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Format the time without seconds
  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Ensure 12-hour format
  });

  return <>{time}</>; // Render just the time
};

export default ClientTime;
