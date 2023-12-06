import React from "react";
import "@mui/material";
import "./App.css";
import "./sass/main.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import NotificationsPage from "./pages/NotificationsPage";
import MassagesPage from "./pages/MassagesPage";
import BookmarksPage from "./pages/BookmarksPage";
import ListsPage from "./pages/ListsPage";
import ProfilePage from "./pages/ProfilePage";
import MorePage from "./pages/MorePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/massages" element={<MassagesPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/lists" element={<ListsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/more" element={<MorePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
