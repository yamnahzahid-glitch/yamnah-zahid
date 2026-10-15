"use client";

import { useState } from "react";
import ResumeCard from "@/components/ResumeCard";

const RESUME_FILE = "/resume.pdf";
const DOWNLOAD_NAME = "Yumnah-Zahid-Resume.pdf";

export default function ResumeViewer() {
  const [previewing, setPreviewing] = useState(false);

  return (
    <div className="resume-viewer">
      <div className={`resume-stage${previewing ? " is-previewing" : ""}`}>
        {previewing ? (
          <>
            <iframe
              className="resume-frame"
              src={`${RESUME_FILE}#view=FitH&toolbar=0&navpanes=0`}
              title="Resume of Yumnah Zahid"
            />
            <p className="resume-frame-fallback">
              Can&apos;t see the document?{" "}
              <a href={RESUME_FILE} target="_blank" rel="noopener noreferrer">Open it in a new tab</a> or{" "}
              <a href={RESUME_FILE} download={DOWNLOAD_NAME}>download the PDF</a>.
            </p>
          </>
        ) : (
          <button className="resume-trigger" type="button" onClick={() => setPreviewing(true)} data-cursor="View">
            <ResumeCard />
            <span className="resume-trigger-cue">
              <span className="resume-trigger-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
                  <circle cx="12" cy="12" r="3.2" />
                </svg>
              </span>
              Click to open the PDF preview
            </span>
          </button>
        )}
      </div>

      <div className="resume-viewer-actions">
        <a className="resume-primary" href={RESUME_FILE} download={DOWNLOAD_NAME}>
          Download PDF <span aria-hidden="true">↓</span>
        </a>
        <a className="resume-ghost" href={RESUME_FILE} target="_blank" rel="noopener noreferrer">
          Open in new tab <span aria-hidden="true">↗</span>
        </a>
        {previewing && (
          <button className="resume-ghost" type="button" onClick={() => setPreviewing(false)}>
            Close preview <span aria-hidden="true">×</span>
          </button>
        )}
      </div>
    </div>
  );
}
