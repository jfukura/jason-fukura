import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

function CaseStudy(data:any) {
  const caseId = useParams().caseId;
  const selectedCase = data.data.find((c:any) => c.id === caseId)
  if ( selectedCase ) {
    return (
      <article style={{overflow: "hidden"}}>
        <header className="caseStudyHeader">
          <Link to="/jason-fukura" className="caseStudyHeader-homeLink">Home</Link>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 891 1535" className="logo">
            <path fillRule="evenodd" clipRule="evenodd" d="M817.251 780.485c-26.054 18.66-62.854 13.249-82.196-12.085L354.053 269.343c-26.991-36.029-37.891-80.919-30.67-124.837 7.294-44.36 32.457-84.119 69.687-110.783S476.921-4.594 522.849 1.65c45.983 6.25 87.513 29.958 115.174 66.19l39.655 51.939L878.333 18c29.097 57.365 6.182 127.455-51.183 156.552l-78.226 39.679 112.338 145.988c19.376 25.376 13.86 61.265-12.297 79.998-25.95 18.586-62.436 13.262-81.658-11.913L543.675 135.411c-8.666-11.351-21.858-19.039-36.95-21.09-15.149-2.059-30.954 1.76-43.77 10.939-12.815 9.178-21.216 22.695-23.622 37.327-2.392 14.547 1.312 28.986 9.94 40.326l380.131 497.915c19.342 25.334 13.901 60.998-12.153 79.657Zm14.754 301.235L95.124 117.393c-52 37.241-63.014 108.259-24.703 158.793L738.34 1150.19l.826-.59c27.314 36.26 38.82 81.49 31.995 125.88-6.881 44.76-31.834 85-69.368 111.88-37.535 26.89-84.576 38.2-130.776 31.46-46.2-6.74-87.774-30.99-115.577-67.4L171.436 979.431c-19.298-25.277-56.063-30.642-82.117-11.982-26.054 18.659-31.53 54.281-12.231 79.551l284.002 371.99c46.338 60.69 115.628 101.1 192.628 112.34 77 11.23 155.403-7.63 217.96-52.43 62.557-44.8 104.144-111.88 115.613-186.48 11.47-74.59-8.119-150.6-54.456-211.29l-.83.59Zm-206.591 195.82c-26.053 18.66-62.819 13.29-82.117-11.99L23.071 584.164C-15.526 533.61-4.573 462.375 47.534 425.056l590.112 772.924c19.298 25.28 13.822 60.9-12.232 79.56Z" fill="#35A2D7"/>
          </svg>
        </header>
        <section className="gradientSection">
          <figure
            className="caseStudyKeyImage"
            style={{height: selectedCase.images.key[1] }}
          >
              <img
                src={selectedCase.images.key[0]}
                alt={selectedCase.summary}
              />
          </figure>
          <div className="gradientSection-inner caseStudyIntro">
            <h1 className="title">{selectedCase.title}</h1>
            <ul className="pipedKeywords" style={{alignItems: "center"}}>
              {selectedCase.tags.map((tag: string) => (
                <li key={tag}><h2 className="heading-3">{tag}</h2></li>
              ))}
            </ul>
            <p className="caseStudyIntro-brief">{selectedCase.content.brief}</p>
          </div>
        </section>
        <section className="article">
          <div className="article-content">
            <h2 className="heading-1">Introduction</h2>
            <div dangerouslySetInnerHTML={{ __html: selectedCase.content.introduction }} />

            <h2 className="heading-1">Details</h2>
            <div dangerouslySetInnerHTML={{ __html: selectedCase.content.details }} />
            <ul className="screenshots">
              {selectedCase.images.details?.map((src: string) => (
                <li className="screenshots-item" key={src}>
                  <a href={src} target="_blank" className="screenshots-target">
                    <img src={src} alt="" className="screenshots-image"/>
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="heading-1">Conclusion</h2>
            <div dangerouslySetInnerHTML={{ __html: selectedCase.content.conclusion }} />
          </div>
        </section>
      </article>
    );
  } else {
    return (
      <>NOT FOUND</>
    )
  }
}

export default CaseStudy;
