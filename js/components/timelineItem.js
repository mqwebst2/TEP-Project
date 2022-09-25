class TimelineItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
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
        }
        
        .tl-img__image {
          width: 100%;

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
            <h2 class="page-h2 tl-left__date-text">'96</h2>
          </div>
        </div>

        <div class="tl-center">
          <div class="tl-center__circle"></div>
        </div>

        <div class="tl-right">
          <div class="tl-right-con">
            <div class="tl-img">
              <img
                src="./new-city-2.jpg"
                alt="New City Temp Image"
                class="tl-img__image"
              />
            </div>

            <div class="tl-right__title">
              <h3 class="page-h3 tl-title__h3">Born and Raised</h3>
            </div>
            <div class="tl-right__paragraph">
              <p class="page-p tl-paragraph">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('timeline-item', TimelineItem);
