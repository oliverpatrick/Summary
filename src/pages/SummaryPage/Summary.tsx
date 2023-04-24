import React from "react";
import AudioRecorder from "../../components/AudioRecorder";
import ContentNavigator from "../../components/ContentBrowser/ContentBrowser";

import "./SummaryPage.scss";

type Props = {};

function Summary({}: Props) {
  return (
    <div className="summary-page-container">
      <ContentNavigator />
      <div>
        <AudioRecorder />
        This page takes a recording of an audio out on the users pc the output
        is then transcribed into text. the text is then fed into chatgpt and
        summarised.
        <br></br>
        The summarised meeting/dialogue will then be add to a list of items on
        this page for sorted by date/time allowing the user to quickly catch up
        on where the current work is.
      </div>
    </div>
  );
}

export default Summary;
