import React from "react";
import AudioRecorder from "../components/AudioRecorder";

type Props = {};

function Summary({}: Props) {
  return (
    <>
      <AudioRecorder />
      This page takes a recording of an audio out on the users pc the output is
      then transcribed into text. the text is then fed into chatgpt and
      summarised.
      <br></br>
      The summarised meeting/dialogue will then be add to a list of items on
      this page for sorted by date/time allowing the user to quickly catch up on
      where the current work is.
    </>
  );
}

export default Summary;
