import React from "react";
import { render } from "react-dom";
import ImageText from "../../src/image-text/image-text";
import slides from './slides';
import BookReview from '../../src/book-review/book-review';
import Calendar from '../../src/calendar/calendar';
import Contacts from '../../src/contacts/contacts';
import MeetingRoomSchedule from '../../src/meeting-room-schedule/meeting-room-schedule';
import Poster from '../../src/poster/poster';
import Quote from '../../src/quote/quote';
import RSS from '../../src/rss/rss';
import Slideshow from '../../src/slideshow/slideshow';
import Sparkle from '../../src/sparkle/sparkle';

const renderSlide = (slide) => {
  switch (slide.type) {
    case 'book-review':
      return <BookReview
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'calendar':
      return <Calendar
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'contacts':
      return <Contacts
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'image-text':
      return <ImageText
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'meeting-room-schedule':
      return <MeetingRoomSchedule
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'poster':
      return <Poster
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'quote':
      return <Quote
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'rss':
      return <RSS
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'slideshow':
      return <Slideshow
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
    case 'sparkle':
      return <Sparkle
        content={slide.content}
        slide={slide}
        run={true}
        slideDone={() => {}}
      />
  }
}

const styles = {
  margin: '25px',
  width: '1920px',
  height: '1080px',
}

const App = () => (
  <div>
    <h1>Examples</h1>
    {slides.map((slide, index) => <div style={styles} key={index}>{renderSlide(slide)}</div>)}
  </div>
);
render(<App />, document.getElementById("root"));
