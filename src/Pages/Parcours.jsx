// Components
import Container from "../components/Container.jsx";
import TimelineItem from "../components/TimelineItem.jsx";

function Parcours() {
  const items = [
    {
      date: "2023",
      title: "Diplôme Expert Informatique",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec cursus erat. Sed rhoncus feugiat rhoncus. Cras aliquet facilisis erat id efficitur. Integer ullamcorper ut velit at commodo. Phasellus condimentum vestibulum lacinia. In tincidunt rutrum est.",
    },
    {
      date: "2021",
      title: "Diplôme Concepteur Dévellopeur d'Application",
      text: "Praesent sagittis tristique mauris, ut iaculis velit viverra pulvinar. Morbi nec accumsan magna. Duis dictum nunc mi, in finibus metus lacinia in. Ut in libero a lorem semper lobortis. Mauris accumsan dignissim augue eu mollis. Donec auctor, urna placerat pharetra consequat, orci urna molestie nulla, eget varius lacus urna quis augue. Morbi lobortis sagittis dictum. Sed ac varius velit. Maecenas at dolor urna.",
    },
    {
      date: "2018",
      title: "Diplôme Scientifique",
      text: "Integer tempor ante eget luctus rutrum. Phasellus id ex neque. Nam non justo sed dui placerat feugiat. Aenean sed ligula efficitur, sagittis metus id, aliquam libero. Morbi a mi viverra, convallis risus et, auctor metus.",
    },
  ];

  const listItem = items.map((item, i) => (
    <TimelineItem
      id={i}
      key={i}
      date={item.date}
      title={item.title}
      text={item.text}
      end={items.length == i + 1}
    />
  ));

  return (
    <Container>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {listItem}
      </ul>
    </Container>
  );
}

export default Parcours;
