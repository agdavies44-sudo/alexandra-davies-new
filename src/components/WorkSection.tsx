import { workSections } from "@/data/projects";
import Carousel from "./Carousel";
import WorkCard from "./WorkCard";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="bg-paper px-[2.35%] pb-[clamp(28px,4vw,56px)] pt-[clamp(16px,2.5vw,28px)]"
    >
      <div className="flex flex-col gap-[clamp(24px,3.5vw,44px)]">
        {workSections.map((section) => (
          <Carousel
            key={section.id}
            heading={section.heading}
            label={`${section.heading} carousel`}
          >
            {section.items.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </Carousel>
        ))}
      </div>
    </section>
  );
}
