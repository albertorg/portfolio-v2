import { featured } from "@/data/featured"
import { NumberedHeading } from "@/components"
import Image from "next/image";



export const Featured = () => {
  return (
    <section>
      <NumberedHeading title="Featured Projects"/>

      <div>
        {
          featured.map((project, idx) => {
            const { title, external, techs, github, cover, descriptionHtml } = project;

            return (
              <div className="styledProject">
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{title}</h3>
                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />

                  {techs.length && (
                    <ul className="project-tech-list">
                      {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="styled project link">
                    {github && (
                      <a rel="noreferrer" target="_blank" href={github} aria-label="GitHub Link">
                        {/* <Icon name="GitHub" /> */}
                      </a>
                    )}
                    {external && (
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={external}
                        aria-label="External Link"
                      >
                        {/* <Icon name="External" /> */}
                      </a>
                    )}
                  </div>
                </div>

                <div className="styledProjectImgWrapper">
                  <a href={external || github || '#'}>
                    <div className="img-wrapper">
                      <div className="img-cont" />
                      <Image src={cover} alt={title} className="img" width={100} height={100}/>
                    </div>
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
