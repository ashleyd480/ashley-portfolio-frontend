import Accordion from "react-bootstrap/Accordion";

const MyStory = () => {
  return (
    <>
   
      <div className="blurb-section">
        <p>
          Below, you can unfurl the accordion sections to read more about me, to
          read about my journey, why software development first attracted me,
          and why I chose this BOOST program, what interests me, what I’ve
          worked on, if I’m still in love with software development 😉, and
          acknowledgements.
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>My Prior Career Journey</Accordion.Header>
            <Accordion.Body>
              <p>
                🖼️ The art style that captures my journey: Pointillism. Events
                as random dots connected to shape me.
              </p>

              <p>
                My passion for cultures and writing intersected in my college
                studies. Concurrently, I volunteered as an ESL instructor,
                finding my weekly ray of sunshine there. That, along with
                seasonal retail jobs, shed my shyness.
              </p>

              <p>
                I went on to work as a field interviewer, engaging with
                individuals from diverse socio-economic backgrounds to gather
                qualitative data for a research study. Afterwards, I took on
                roles in B2B sales, particularly enjoying onboarding calls where
                I could help clients learn.
              </p>

              <p>
                I found my interest in tech at Indeed in 2018 when I
                transitioned to a customer support role. Outside, I’ve
                volunteered as a bilingual tax screener for low-income Arizona
                residents. Since 2016, I have served as a Google Maps Local
                Guide, and my latest project was making information on
                Leaderboards more accessible to visual learners with video.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Initial Attraction to Software Development
            </Accordion.Header>
            <Accordion.Body>
              <p>
                My journey into software development kicked off with a genuine
                love for troubleshooting and problem-solving, which I got to
                enjoy every day in my client support (CS) role at Indeed. Fixing
                bugs brought me so much satisfaction as I dove deep to find
                solutions to help clients. This hands-on problem-solving aspect
                of SWE is super exciting to me and also speaks to my
                detail-oriented, investigative nature.
              </p>

              <p>
                Shadowing with SWEs like Heidi, Zack, and Aysun (fellow
                Indeedians) made me even more interested. Seeing how they
                creatively tackled challenges and made a real impact on job
                seeker and employer experiences at Indeed was really inspiring.
                For example, I also got to be a mentee to a research engineer (Sayori),
                learning about her work at a high-level while sharing my
                front-end knowledge on the search quality tools she coded.
                Further, my love for languages (I studied Spanish and dabbled in
                Portuguese) makes learning coding languages feel like a natural
                fit for me.
              </p>

              <p>
                I knew I wanted something more technical since I learned about
                and felt attracted to the technical realm in my client work.
                Over the last almost 6 years, I tried to transition into
                technical roles but faced many closed doors. Yet, with each
                closed door, I continued to remain resilient, continuing to find
                ways I could improve my technical and product skills, i.e.
                building troubleshooting how-to material and even taking a
                4-hour intro to SQL course and Indeed Skill Academy 4-hour long
                HTML/Programming intro class with Russell (and applying that knowledge troubleshooting
                basic ATS issues), and also helping others to do basic
                troubleshooting on Slack channels. Even though the journey to
                get a chance took so long, those technical tasks brought me joy
                and gave me the strength to keep going. I knew that if something
                was meant for me, a door would open.
              </p>

              <p>
                Then BOOST came along. When Laurie (program manager) interviewed
                me, she told me she could see me working outside of CS where my
                skills and interests could get a chance to grow and flourish.. I
                remember almost tearing up, thinking, "Finally, someone sees
                something in me." Since then, I have been so grateful they gave
                me a chance.
              </p>

              <p>
                I’m not flattering when I say this, I love you BOOST. Thank you,
                thank you for giving me this chance.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Reasons I joined BOOST</Accordion.Header>
            <Accordion.Body>
              <p>
                The apprenticeship program is a perfect match for my passion for
                tech problem-solving and inclusion. Indeed was the first time I
                learned about career development and internal mobility in my
                life, opening my eyes to a world outside of sales. I found I
                particularly enjoyed the technical troubleshooting aspect of my
                day-to-day work in customer support. Getting to the root of an
                issue, identifying trending problems, and working closely with
                Product to test and provide feedback before a launch were all
                incredibly fulfilling for me.
              </p>

              <p>
                Here are some highlights of things I’ve worked on in the
                technical realm:
              </p>
              <ul>
                <li>
                  Surfaced trending client feedback to Product in biweekly
                  advocacy groups
                </li>
                <li>
                  Queried data in logged cases and tickets to advocate for
                  larger process and product changes
                </li>
                <li>
                  Identified issues to be fixed before the full rollout of new
                  product features
                </li>
                <li>
                  Participated in UAT testing by manually replicating steps and
                  checking for bugs
                </li>
              </ul>

              <p>
                Diversity and inclusion are also close to my heart due to my own
                personal experiences. I have advocated for fair solutions
                through data, like ensuring equitable SLA for Spanish-speaking
                clients through a better response process. As a steering member
                in Women Gender Coder, I bring the CS/ non-traditional tech
                background perspective to discussions by presenting what CS does
                and our tools and more. Inclusion also means leaving no one
                behind, and I've trained 10+ new hire classes, including the
                now-sunset SDL 2 team, tailoring training to different learning
                styles.
              </p>

              <p>
                I approached this program not expecting a title, certificate, or
                big paycheck, but because I truly find this stuff interesting
                from my heart. I know that even if it's only a one-year program,
                it will be the intellectually toughest but also the happiest
                year of my life. I am so happy and humbly grateful to learn each day. I mean these words
                from my heart.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Frontend or Backend</Accordion.Header>
            <Accordion.Body>
              <p>
                I find both frontend and backend development equally
                captivating. Unlike favoring one over the other, I see them as
                partners in a beautiful dance. The backend manages data and
                creates endpoints that the frontend utilizes, akin to
                choreographing steps in a tango.
              </p>

              <p>
                In my capstone{" "}
                <a href="https://github.com/ashleyd480/access-map-app-capstone">
                  project
                </a>
                , I approached coding my frontend and backend in tandem. For
                instance, first, I wireframed the Explore geolocation page,
                determining the necessary backend data and endpoint design.
                After testing these interactions locally on Postman, I worked on
                how to present his data in a user-friendly manner on the
                frontend. When implementing features like user reviews, I
                deliberated on how best to gather and transmit data back to the
                backend.
              </p>

              <p>
                After the bootcamp, I've challenged myself to develop my
                portfolio as a full-stack project, blending my affection for
                both frontend and backend. This integration allows me to
                orchestrate a dance between writing my bootcamp scores and
                project data to the backend and displaying them on the frontend.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Reasons I Love Software Development
            </Accordion.Header>
            <Accordion.Body>
              <p>
                My time in BOOST has made me fall even more in love with
                software development. (I still humbly call myself a developer
                not an engineer, because I know I have just touched the tip of
                the iceberg and I know I have so much more to learn). Though
                software is by no means an easy mountain to climb and many days
                I’ve sweat and cried, I care so much and find such innate
                interest in tech that it keeps me going. As I’m doing this
                program, I see even more things in software that draw me into
                this field.
              </p>

              <p>
                <u>Curious Learner</u>
                <br></br>
                Firstly, I’m a really curious person and being able to learn new
                things each day (which is the bread and butter of a software
                career and the ever evolving field) - that is something that
                drives me each day and lights a fire in my heart. Even on the
                stormy bootcamp days when it didn’t seem like land was nowhere
                near or on days that I’m battling bugs that stubbornly don’t
                show signs of giving up, being able to learn a new concept or
                research something new that I hadn’t known before or learn
                something from debugging. One particularly tough homework was
                the file reader in Java, and I was so curious about the nextLine
                syntax, and instead of just taking it for granted - I took some
                time after homework was done the next evening to research and
                understand it and created a {" "}
                <a href="https://youtu.be/ZkShZR57bA8?si=MHHKIfbs5aXjVpfG">
                video 
                </a>{" "} like when my mentor and I deep dived
                to share my research with my mentor. Even with bugs, I have
                found a lot of my biggest learnings come from bugs, and I even
                write in my blog about some debugging experiences and {" "}
                <a href="https://dev.to/ashleyd480/capstone-debugging-learnings-3495">
                learnings
                </a>{" "}
                I walked away from (with the added hope that this also
                encourages others to find the silver lining from bugs).
              </p>

              <p>
                I know too that in software, we have to be quick to apply new
                concepts; we saw that in bootcamp where we had to learn
                something new daily and immediately execute it in our homework.
                In one of my shadows, I heard how a backend SWE had to research
                JDBC for interacting with databases and the next day implement
                it. I find it fun to try to add something new and see it in
                action. When we were assigned to do a to-do app for our React
                homework, instead of thinking of it as another ho-hum
                assignment, my love for my creativity made me want to humanize
                the {" "}
                <a href="https://github.com/ashleyd480/emojified-react-todo-app">
                app
                </a>{" "}
                and have a way for React to “change mood” based on the number of
                to-do’s, and I had to research useEffect hook to get that to
                work. It was really neat when it worked and I was so stoked to
                have learned something in the process.
              </p>

              <p>
                <u>Code Deep Diver</u>
                <br></br>I also enjoy getting into the code and talking through
                it and understanding the why/how behind it. This speaks to my
                detail-oriented nature. After each class, instead of just
                hurrying to finish the homework to get it over with and move on
                to the next, it really mattered to me to understand the
                mechanics behind the code, plus that stuff fascinates me. Often,
                I would take time to marinate the concepts and create {" "}
                <a href="https://youtu.be/yA2RyRNSu7E?si=Ca-gjP7_AtiZLYYR">
                teachbacks
                </a>{" "}some of which I would share to the class
                to help out as well to better break down trending concepts that
                were tougher such as {" "}
                <a href="https://youtu.be/b0j0T8_MHoo?si=785nZI4x0UUFuJIb">
                upcasting/downcasting
                </a>
                .
              </p>

              <p>
                In my learning process too in bootcamp, I also took the time to
                figure out when code wasn’t working, analyzing each line instead
                of just immediately jumping to chatGPT for the answer. Even when
                I did use chatGPT on bootcamp homework, time-provided, I used it
                to also help coach me through untangling a bug.
              </p>

              <p>
                During project {" "}
                <a href="https://www.youtube.com/watch?v=rflr2XKJkzg">
                presentations
                </a>
                , I enjoy being able to talk through my code and share how it
                ties together to power my app. There’s just something so
                beautiful to me that I can’t put words to, but to be able to see
                lines of code come together and meld to make a computer do
                something is just wow to me- I love that feeling. Even with
                whiteboarding- though it can be nerve wracking and yes that is
                something I’m working on and I humbly know I’m not the most
                wizardly on them, I like when I get to collaboratively talk
                through my thought process on them. For example, in this
                practice office {" "}
                <a href="https://youtu.be/evPV9s3cXEw">
                hour
                </a>
                - I was able to discuss my approach and also talk through my
                thoughts behind debugging and the whys behind code failing
                tests- with this discussion fruitfully leading me closer and
                closer to a solved solution.
              </p>

              <p>
                That aforementioned is also why I have such a blast meeting with
                my mentor too. I love our meetings together where I get to share
                my learnings on code, even the small stuff like when I learned
                how .put can be used on a hashmap to not only insert key-value
                pairs but to also update the value of an existing key. And I
                approach problems with my mentor as a team where we can look
                through it together instead of me just leaning on him for the
                answer, and I like digging and researching after too, i.e. when
                he recommended a priority queue approach.
              </p>

              <p>
                <u>Collaborative 360</u>
                <br></br>
                Through my shadow, I see how software development is also being
                able to work well with others. Prior to BOOST, I worked in many
                team-based projects and also even cross-functionally, such as
                through my work with UX on surfacing call logging pain points
                and various other product focus groups. Collaboration means
                sharing with others but also being open to feedback too—hence
                the 360 in the title.
              </p>

              <p>
                In terms of being open to feedback, my awesome mentor often
                gives me ideas or different ways of looking at stuff—and I
                treasure his words so I always go back, research, and implement.
                After some projects, I proactively did retros with him to learn
                better approaches. In our dictionary Java project, I used my
                mentor's feedback from our retro afterward and the teacher's
                feedback to make {" "}
                <a href="https://dev.to/ashleyd480/wk7-java-cli-app-retro-5ecj">
                improvements
                </a>
                .
              </p>

              <p>
                I also found continued joy in helping others in the technical
                space—something that brought me light during the tough days of
                bootcamp. During the capstone project, I frequently debugged
                together with my classmates, sharing tips and tricks to solve
                issues, especially when connecting the frontend and backend. For
                instance, when we had trouble connecting our React frontend with
                the Java Spring Boot backend, we collaborated to troubleshoot
                and fix the CORS errors, ensuring smooth data flow between the
                two.
              </p>

              <p>
                Additionally, I created one-sheeters to help my classmates
                better breakdown concepts quickly. One example was a one-sheeter
                on sql vs noSQL, which I shared with my peers to better
                differentiate syntax between the two.
              </p>

              <p>
                Moreover, I observed how another part of collaboration in
                software is writing good documentation, which can help others
                better understand the code or implementation. For example, while
                deploying the backend of my portfolio page on Heroku, I
                documented each step and the reasons behind certain choices,
                making it easier for others to follow the process and learn from
                it. This documentation also addressed the lack of resources
                online, much less beginner friendly ones.
              </p>

              <p>
                <u>tl;dr</u>
                <br></br>
                This combination of being a curious learner, a code deep diver,
                and embracing a collaborative 360 approach - and being able to
                to apply those technically throughout my bootcamp and
                apprenticeship thus far has made me fall more in love with
                software development. Even on days when it rains, being able to
                learn, deep dive into code and collaborate fill my cup each day.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Acknowledgments</Accordion.Header>
            <Accordion.Body>
              <p>
                The support from everyone in the BOOST program has been
                invaluable. When I first joined, I was incredibly insecure and
                feared being kicked out after the first month, however I was
                floored by the kindness of those in the program and I couldn't
                have made it this far without all of you.
              </p>

              <p>
                Firstly, I want to express my heartfelt gratitude to Chad, my
                mentor, whose impact on my learning journey has been profound.
                Chad, you are truly a superstar. I feel like I won the mentor
                lottery with you. You are the most human, genuine,
                down-to-earth, and helpful mentor I could have asked for. Your
                receptiveness to my ramblings and technical questions, and your
                encouragement during tough moments like the capstone week, have
                made a significant difference. Your calming presence and
                invaluable advice, especially on mapping things out and
                debugging, have not only eased my anxieties but also shaped my
                approach to projects. Your generosity in accommodating ad-hoc
                meetings and your genius solutions to complex problems like
                mapping tags in my accessibility project have inspired me
                deeply. Thank you for your unwavering support, teaching prowess,
                and for simply being there to guide me through the ups and downs
                of this bootcamp journey.
              </p>

              <p>
                And Erica, my amazing classmate and friend, your presence has
                made this journey so much better. From our first day as desk
                buddies, you've been a constant source of encouragement and
                positivity. Your dedication, empathy, and incredible work ethic
                inspire me every day. Thanks for all the laughs, late-night
                homework sessions, and for just being you.
              </p>

              <p>
                Amy and the rest of the BOOST program team, your dedication and
                hard work behind the scenes for the Boost program have been
                incredible. You've been a beacon of support, always ready with
                answers and making sure the program is inclusive and equitable.
                Your kindness and understanding, especially during our off-site
                in Austin, made me feel welcome and at ease. Thank you for
                everything you do.
              </p>

              <p>
                Dom, your passion for the Boost program shines through in every
                detail. Your timely updates, thorough information sessions, and
                dedication to making the hiring process fair and inclusive have
                been remarkable. Your empathy and support, from individual
                check-ins to making sure our feedback is heard, have made a
                world of difference. You're an amazing leader, and I'm so
                grateful for your guidance.
              </p>

              <p>
                Shoutout also to my amazing instructors, Bereket and Asha, whose
                dedication and expertise have been instrumental in my journey.
                Bereket, your profound industry knowledge, teaching prowess, and
                genuine kindness have turned our cohort of coding novices into
                well-rounded developers in just four months. Your ability to
                break down complex concepts and your patience in answering
                questions have created a welcoming learning environment. Your
                support during office hours and your dedication, shown through
                supplemental videos and personal check-ins, have been
                invaluable. Asha, your meticulous preparation, attention to
                detail, and dedication have greatly enhanced our learning
                experience. Your encouraging presence during homework reviews
                and office hours, along with your expertise in debugging, have
                built my confidence and understanding of software engineering.
                Both of you have not only imparted technical knowledge but have
                also been sources of inspiration and confidence. Thank you for
                everything you do!
              </p>

              <p>
                The BOOST program has been a transformative journey for me,
                enabling personal growth as well. Despite the long hours and
                tough days, there's a saying that you're at your happiest when
                you are your truest self. It's like a breath of fresh air after
                feeling stuck in a stressful phone job. Participating in BOOST
                has reignited my passion and brought back a sense of happiness.
                It's more than just learning technical skills; it's about
                rediscovering my true self and rebuilding my confidence. My
                journey through BOOST has taught me resilience and the
                importance of perseverance. Debugging and overcoming challenges
                in creating and mapping databases in Postgres through Spring
                Boot were arduous tasks, but they were also pivotal moments that
                boosted my confidence and determination. BOOST has not only
                equipped me with technical skills but has also shown me the
                importance of taking risks and pushing through difficulties.
                It's a journey that has transformed me into a stronger, more
                capable individual, ready to tackle new challenges in my career.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default MyStory;
