# SpeakPod

## Introduction
In this project, I have developed a podcast app that allows users to browse various podcast shows, play episodes, and track their favorite episodes. This README file provides detailed information about my project, including its purpose, technology stack and user stories.

## Project Overview
The goal of my Project was to create a fully functional podcast app that meets the needs of users who want to explore, listen to, and manage their favorite podcasts. The app utilizes various technologies and frameworks, and it integrates with an external podcast API to fetch and display podcast-related data.

## Technology Stack
I had the flexibility to choose the technology stack for this project.

- Framework: Create React App (CRA)
- Language: JavaScript
- Data Source: Data is fetched from the external podcast API at https://podcast-api.netlify.app.
- Deployment: The project will be deployed to a custom Netlify URL.

## User Stories
The project aims to fulfill 50 user stories, ensuring that the app provides a fully functional podcast experience. 

For your convenience, here is a summary of the user stories:
- Deployment: The project is deployed to a custom Netlify URL.
- Mobile Responsiveness: All views in the app are responsive and display correctly on the smallest mobile device (iPhone SE).
- Favicon: Favicon information has been added correctly using a favicon generator.
- Metatags: Metatag information has been created and added for SEO purposes.
- Data Loading: Show data is fetched via a fetch call from an external podcast API.
- Individual Show Data: When viewing a specific show, data is loaded via a fetch from the individual show endpoint.
- Loading State: There are loading states to indicate when initial data is being loaded and when new data is being loaded.
- Show Details: Users can view the details of a show, including its seasons sorted by number.
- Episode Playback: Users can listen to any episode in a season of a show.
- Season-Specific View: Users can view episodes for a specific season.
- Season Toggle: Users can toggle between different seasons for the same show.
- Show List: Users can see the names of all available shows on the platform.
- Preview Images: Users see preview images of shows when browsing.
- Season Count: Users see the number of seasons per show when browsing.
- Last Updated Date: Users see a human-readable date for when a show was last updated.
- Genre Display: Users see the genres (as genre titles) associated with a show when browsing.
- Season Preview Images: Users see preview images of seasons for a specific show.
- Episode Count: Users see the number of episodes in a season.
- Navigation: Users can go back to a show view from a season-specific view.
- Favorites: Users can mark specific episodes as favorites and view them again.
- Favorites View: Users can visit a view where they see all their favorite episodes.
- Show and Season Display: Users can see the show and season of any episode in their favorites list.
- Grouping in Favorites: Episodes related by season/show are grouped in favorites.
- Remove from Favorites: Users can remove episodes from their favorites.
- Show Sorting (A-Z): Users can arrange the list of shows by title from A-Z.
- Show Sorting (Z-A): Users can arrange the list of shows by title from Z-A.
- Show Sorting (Ascending Date): Users can arrange the list of shows by date updated in ascending order.
- Show Sorting (Descending Date): Users can arrange the list of shows by date updated in descending order.
- Show Filtering (Title): Users can filter shows by title through a text input.
- Fuzzy Show Matching: Users can find shows based on fuzzy matching of strings.
- Genre Filtering: Automatically filter shows by genre when the genre label is clicked.
- Favorite Episode Timestamp: Users see the date and time that an episode was added to their favorites list.
- Favorite Sorting (A-Z): Users can arrange favorites by show titles from A-Z.
- Favorite Sorting (Z-A): Users can arrange favorites by show titles from Z-A.
- Favorite Sorting (Ascending Date): Users can arrange favorites by date updated in ascending order.
- Favorite Sorting (Descending Date): Users can arrange favorites by date updated in descending order.
- Audio Player Timestamps: The audio player shows current progress and episode length as timestamps.
- Persistent Audio Player: The audio player is always visible, allowing users to listen while browsing.
- Confirmation on Audio Close: Users are prompted to confirm when they want to close the page with audio playing.
- Playback History: The app remembers which show and episode the user last listened to when returning.
- Playback Completion: The app remembers which shows and episodes the user listened to all the way through.
- Timestamp Progress: The app remembers and shows the timestamp progress of any episode the user has started listening to.
- Reset Listening Progress: Users can "reset" all their progress, effectively removing their listening history.
- Recommendations: Users are presented with a sliding carousel of possible shows they might be interested in on the landing page.
- User Authentication: Users can log in via Supabase authentication.
- Favorite Storage: User favorites are stored in the Supabase database.
- Automatic Sync: User favorites are automatically synced when logged in, ensuring they share favorites between devices.
- Sharing Favorites: Users can share their favorites as a publicly accessible URL.



