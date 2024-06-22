import crowdsourceAI from "../../../assets/crowdsource-ai.png";
import localGuide from "../../../assets/local-guide.png";

const Hobbies = () => {
  return (
    <>
      <h2 className="blurb-title"> Hobbies 🐾</h2>
      <h2 className="secondary-blurb-title">Google Maps</h2>

      <div className="centered-image-container">
        <img
          src={localGuide}
          width="500"
          height="400"
          alt="dev.to trusted member nomination"
        />
      </div>
      <div className="blurb-section">
        <h4>Local Guide</h4>

        <p>
          Google Maps: I have been a Local Guide 🌍 since 2016, currently at
          Level 10. I moderate incorrect information on local business listings,
          and add photos, videos, and review content to local businesses. When I
          overcome the gravitational forces of my couch, recently I find myself
          drawn to exploring historical and small cities, helping to bring
          awareness on Maps to smaller, lesser-known cities and businesses
          there. You can read more about the Local Guides program{" "}
          <a href="https://maps.google.com/localguides/" target="_blank">
            here
          </a>
          .
        </p>

        <h4>Connect</h4>
        <p>
          Connect is Google Map's online community for Local Guides and users. I
          initially found out about it when noting a bug with points in 2019. In
          2021, when I finally reached Level 10, I decided to share my{" "}
          <a
            href="https://www.localguidesconnect.com/t5/General-Discussion/From-Level-1-to-10-Celebrating-6-years-as-a-Local-Guide/m-p/3273808#M1256154"
            target="_blank"
          >
            path
          </a>{" "}
          getting there and how Google Maps helped impact me as well. I write
          articles to highlight local points of interest that I have helped add
          content at and create informative posts on best practices for using
          Maps on my blog{" "}
          <a
            href="https://www.localguidesconnect.com/t5/user/viewprofilepage/user-id/1082631"
            target="_blank"
          >
            profile
          </a>
          . The warm reception of the community to my first article gave me the
          fuel to keep writing. Since then, I have authored articles to
          highlight local points of interest that I have helped add content at
          and create informative posts on best practices for using Maps.
        </p>

        <p>Some other highlights I've worked on include:</p>
        <ul>
          <li>
            Build training videos{" "}
            <a href="https://www.youtube.com/@explorelyonline" target="_blank">
              here
            </a>{" "}
            on Google Maps Leaderboards and Video feature
          </li>
          <li>
            Attend and cohost trivia meetups, leveraging AI to help brainstorm
            quiz questions and research article facts; example{" "}
            <a
              href="https://www.localguidesconnect.com/t5/General-Discussion/Water-by-the-1-17-ft-ai-bardchallenge/td-p/3730061"
              target="_blank"
            >
              article
            </a>{" "}
            on Arizona I-17 Water Bodies
          </li>
          <li>
            Share amateur photography and the stories behind the photos; example{" "}
            <a
              href="https://www.localguidesconnect.com/t5/General-Discussion/Encore-Encore-Mogollon-Rim/td-p/3686825"
              target="_blank"
            >
              article
            </a>{" "}
            on Mogollon Rim
          </li>
          <li>
            Map out Stairizona trail in Globe, Arizona using My Maps and share
            experience and{" "}
            <a
              href="https://www.localguidesconnect.com/t5/General-Discussion/Mapping-Out-Stairizona-with-My-Maps/td-p/3699068"
              target="_blank"
            >
              steps
            </a>{" "}
            taken to complete it
          </li>
        </ul>

        <h4>Awards</h4>
        <p>
          {" "}
          I enjoy being creative and helping others, and the Google Maps team
          was so kind to bestow me recognition.{" "}
        </p>
        <ul>
          <li>
            Google Maps Creative Guiding{" "}
            <a
              href="https://www.localguidesconnect.com/t5/custom/page/page-id/GuidingStar22?id=122935"
              target="_blank"
            >
              Star
            </a>{" "}
          </li>

          <li>
            Prolific{" "}
            <a href="https://imgbb.com/YTYh7Dk" target="_blank">
              Videographer
            </a>{" "}
            for my "video-a-day" project{" "}
            <a
              href="https://www.localguidesconnect.com/t5/General-Discussion/I-Posted-a-Video-a-Day-for-a-Year-Arizona-Local-Guide/m-p/3486004#M1297833"
              target="_blank"
            >
              here
            </a>
            .
          </li>
        </ul>

        <hr className="separate-line" />
        <h2 className="secondary-blurb-title">Google AI Crowdsource</h2>
        <div className="centered-image-container">
          <img
            src={crowdsourceAI}
            width="500"
            height="400"
            alt="dev.to trusted member nomination"
          />
        </div>
        <p>
          I have also participated in crowdsourcing content for Google AI. 🤓
          You can read more about the program{" "}
          <a href="https://crowdsource.google.com/about/" target="_blank">
            here
          </a>
          . What really drew me to the program is how the program seeks to make
          AI that is global and spans cultures by having multi-language
          activities to train the AI. Some of the activities I partook in were:
        </p>
        <ul>
          <li>Process typing samples</li>
          <li>Verify image labels</li>
          <li>Audit English and Spanish pronunciation clips</li>
          <li>Voice narrate English and Spanish phrases</li>
        </ul>
      </div>
    </>
  );
};
export default Hobbies;
