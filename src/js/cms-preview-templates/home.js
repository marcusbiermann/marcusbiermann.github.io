import React from 'react';

export default class PostPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;

    return (
      <div>
        <section id="home" class="section">
          <div>
            <div class="columns">
              <header class="header">
                <a
                  href={getAsset(entry.getIn(['data', 'home', 'large_photo']))}
                  target="_blank"
                >
                  <img
                    width="200"
                    src={getAsset(entry.getIn(['data', 'home', 'small_photo']))}
                    alt="Portrait: Marcus Biermann"
                  />
                </a>
              </header>

              <div>
                <h1>{entry.getIn(['data', 'home', 'title'])}</h1>
                <p>
                  <strong>
                    {entry.getIn(['data', 'home', 'intro', 'text'])}
                  </strong>
                </p>

                <h3>I am available for interviews at</h3>

                <ul>
                  {entry.getIn(['data', 'home', 'locations']).map(location => (
                    <li>{location.getIn(['text'])}</li>
                  ))}
                </ul>

                <p class="download">
                  <a
                    href={entry.getIn(['data', 'home', 'job_paper'])}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Job Market Paper
                  </a>
                </p>

                <h3>Contact</h3>
                <address>
                  email:{' '}
                  <a
                    href={
                      'mailto:' +
                      entry.getIn(['data', 'home', 'contact', 'email'])
                    }
                  >
                    {entry.getIn(['data', 'home', 'contact', 'email'])}
                  </a>
                  <br />
                  Department of Economics
                  <br />
                  London School of Economics and Political Science
                  <br />
                  Houghton Street
                  <br />
                  London WC2A 2AE
                </address>
              </div>
            </div>
          </div>
        </section>

        <section id="research" class="section">
          <div>
            <header class="header">
              <h2>
                <span>Research</span>
              </h2>
            </header>

            {entry.getIn(['data', 'papers']).map(paper => (
              <article class="paper">
                <header>
                  <h3>{paper.getIn(['headline'])}</h3>
                  <a href={paper.getIn(['link'])} target="_blank">
                    <span>{paper.getIn(['title'])}</span>
                  </a>
                  <br />
                  {paper.getIn(['subtitle'])}
                </header>
                <p>{paper.getIn(['description'])}</p>
              </article>
            ))}

            <article class="paper">
              <header>
                <h3>Work in Progress</h3>
              </header>
              {entry.getIn(['data', 'wip']).map(wip => (
                <p class="wip">{wip.getIn(['title'])}</p>
              ))}
            </article>
          </div>
        </section>

        <section id="cv" class="section">
          <div>
            <header class="header">
              <h2>
                <span>CV</span>
              </h2>
            </header>

            <p class="download">
              <a href={entry.getIn(['data', 'home', 'cv'])} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Full CV (pdf)
              </a>
            </p>

            <h3>Short CV</h3>

            <p>
              <strong>Primary Research Field:</strong>
              <br /> {entry.getIn(['data', 'cv', 'primary_research_fields'])}
              <br />
              <br />
              <strong>Secondary Research Fields:</strong>
              <br /> {entry.getIn(['data', 'cv', 'secondary_research_fields'])}
              <br />
              <br />
              <strong>Education:</strong>
              <br />{' '}
              {entry
                .getIn(['data', 'cv', 'pre_doctoral_studies'])
                .map(study => (
                  <React.Fragment>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: study.getIn(['item'])
                      }}
                    />
                    <br />
                  </React.Fragment>
                ))}
            </p>
          </div>
        </section>

        <section id="teaching" class="section">
          <div>
            <header class="header">
              <h2>
                <span>Teaching</span>
              </h2>
            </header>

            {entry.getIn(['data', 'teaching', 'tables']).map(table => (
              <React.Fragment>
                <h3>{table.getIn(['headline'])}</h3>

                <table class="timetable">
                  <tbody>
                    {table.getIn(['rows']).map(row => (
                      <tr>
                        <td>{row.getIn(['date'])}</td>
                        <td>{row.getIn(['title'])}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
