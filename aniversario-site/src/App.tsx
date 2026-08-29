import { useState } from 'react'
import StarsBackground from './components/StarsBackground'
import Cover from './components/Cover'
import StoryTeaser from './components/StoryTeaser'
import Story from './components/Story'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Message from './components/Message'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [storyOpen, setStoryOpen] = useState(false)

  return (
    <div className="app">
      <StarsBackground />

      <Cover onOpen={() => setOpened(true)} opened={opened} />

      {opened && (
        <>
          <StoryTeaser onOpen={() => setStoryOpen(true)} />
          <Timeline />
          <Gallery />
          <Message />
          <Footer />
          <MusicPlayer autoStart />
        </>
      )}

      <Story open={storyOpen} onClose={() => setStoryOpen(false)} />
    </div>
  )
}