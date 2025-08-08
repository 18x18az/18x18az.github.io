import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import HomePage from './componets/HomePage/HomePage';
import AboutUsPage from './componets/AboutUsPage/AboutUsPage';
import ErrorPage from './componets/ErrorPage/ErrorPage';
import HostEventPage from './componets/HostEventPage/HostEventPage';
import VolunteerPage from './componets/VolunteerPage/VolunteerPage';

export default function ReactRouter() {
  return (
    <BrowserRouter basename="/websiteV2">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="hostevent" element={<HostEventPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}