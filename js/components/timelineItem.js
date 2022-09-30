class TimelineItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const date = this.getAttribute('date');
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const paragraph = this.getAttribute('paragraph');
    const quote = this.getAttribute('quote') || '';
    const quoteAuthor = this.getAttribute('author') || '';

    this.innerHTML = `
      <style>
        .tl-item {
          padding-top: 4%;
          padding-bottom: 4%;

          display: grid;
          grid-template-columns: 1fr 160px 1fr;
          grid-template-rows: auto;

          width: 100%;
          min-height: 240px;

          position: relative;
        }

        .tl-left {
          height: 100%;

          text-align: right;

          position: relative;
        }

        .tl-left__date {
          position: sticky;
          top: 50vh;
        }

        .tl-center {
          display: flex;
          justify-content: center;

          position: relative;
        }

        .tl-center__circle {
          width: 16px;
          height: 16px;

          border-radius: 100%;

          position: sticky;
          top: 50vh;

          background-color: black;
        }

        .tl-right {
          display: flex;
          flex-direction: column;

          max-width: 100%;

          overflow: hidden;
        }

        .tl-img {
          width: 100%;
          height: 240px;

          border-radius: 6px;
        }

        .tl-img__image {
          width: 100%;
          height: 100%;

          border-radius: 6px;
        }

        .tl-right__title {
          margin-top: 24px;
        }

        .tl-right__paragraph {
          margin-top: 12px;

          text-align: justify;
        }
      </style>

      <div class="tl-item">
        <div class="tl-left">
          <div class="tl-left__date">
            <h2 class="page-h2 tl-left__date-text">${date}</h2>
          </div>
        </div>

        <div class="tl-center">
          <div class="tl-center__circle"></div>
        </div>

        <div class="tl-right">
          <div class="tl-right-con">
            <div class="tl-img">
              <img
                src="${image}"
                alt="New City Temp Image"
                class="tl-img__image"
              />
            </div>

            <div class="tl-right__title">
              <h3 class="page-h3 tl-title__h3">${title}</h3>
            </div>
            <div class="tl-right__paragraph">
              <p class="page-p tl-paragraph">${paragraph}</p>
            </div>
            <div class="tl-right__quote">
              <span class="tl-right__quote-text">${quote}</span>
              <span class="tl-right__quote-author">${quoteAuthor}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('timeline-item', TimelineItem);
