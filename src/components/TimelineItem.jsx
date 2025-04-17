import { IconCheckMark } from "./Icon.jsx";

function TimelineItem({ id, date, title, text, end = false }) {
  return (
    <li>
      <div className="timeline-middle">
        <IconCheckMark />
      </div>
      <div
        className={
          (id % 2 ? "timeline-end" : "timeline-start md:text-end ") +
          " md:mb-10"
        }
      >
        <time className="font-mono italic">{date}</time>
        <div className="text-lg font-black">{title}</div>
        {text}
      </div>
      {!end && <hr />}
    </li>
  );
}

export default TimelineItem;
