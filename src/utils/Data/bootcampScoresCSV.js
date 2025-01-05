export const bootcampScores = [
  {
    week: 1,
    weekOf: "02/12/2024",
    topic: "Terminal, Github, HTML/CSS",
    gaScore: "Yellow",
    gaComments: `The main reason you are yellow is due to confidence level. They like that you ask a lot of clarifying questions about bug fixes and process walkthroughs. Their interpretation is that you are second guessing yourself but expect that to improve as you get more familiar with your lessons. It's noted that you are consistent with homework.
  
  Suggested Action: Inject positivity into your learning, verbally and through Slack.`,
    mentorScore: "--",
    mentorComments: "--"
  },
  {
    week: 2,
    weekOf: "02/19/2024",
    topic: "JavaScript: Data Types, Arrays, and Functions",
    gaScore: "Green",
    gaComments: `Up to date on deliverables, great quality to them.
  Full attendance, consistent with exit tickets.
  Highly communicative in class and chat, and asks many questions.`,
    mentorScore: 3,
    mentorComments: `Comments in Slack: Chad Collins
  Np! You’re making good progress, all this syntax stuff will be easier as we keep going.`
  },
  {
    week: 3,
    weekOf: "02/26/2024",
    topic: "JavaScript: Event Listeners and Fetch API",
    gaScore: "Blue",
    gaComments: `Up to date on deliverables. Based on lab work and questions, student is progressing very well.
  Still very active in class. Has overcome confidence issues!`,
    mentorScore: 4,
    mentorComments: "--"
  },
  {
    week: 4,
    weekOf: "03/4/2024",
    topic: "Project 1: Refer-All Job Social Media Site",
    gaScore: "Blue",
    gaComments: `Excellent project and presentation, shows a clear understanding of her code and how it's put together. Asked for help many times. Incredible note taking.`,
    mentorScore: 4,
    mentorComments: `Great work this week! This week was a sort of synthesis of everything we've learned so far. By themselves, things like array operations and DOM manipulation aren't too crazy, but when we start combining them is where the trouble begins. I think Ashley did a good job at focusing on the hard stuff this week and diving into the complexity, and has come out the other end with a good foundation for future work.`
  },
  {
    week: 5,
    weekOf: "03/11/2024",
    topic: "Java: Intro, Methods, Arrays, OOP + Inheritance/Polymorphism",
    gaScore: "Blue",
    gaComments: `They recognize that you're learning through asking questions.
  They see you teach back the concepts in your own words.
  You learn quickly and code well.
  You reach out to Asha when you have questions or need clarification.`,
    mentorScore: 4,
    mentorComments: `Ashley has shown lots of initiative in learning new things about the subject for this week, namely programming in Java. There were a number of important concepts covered this week which did not bear much similarity previously covered material, and I think Ashley is picking up the new material well.`
  },
  {
    week: 6,
    weekOf: "03/18/2024",
    topic: "Java: Exception Handling, File IO, Stream API, final keyword, garbage collector",
    gaScore: "Blue",
    gaComments: "--",
    mentorScore: 4,
    mentorComments: `Ashley has done a great job transitioning to a Java mindset. Lots of new things covered this week and she has picked them up without too much trouble. She gave herself a hard time on a tough problem, but I'm hoping she learned through that process that it's okay not to fully "get it" on the first try, and that true learning comes from failing and the following refinement.
  
I would like to see Ashley focus more on the abstract reasoning aspect of programming, asking not just "how do I do this in Java", but "how can I approach this problem in general? What are the steps my code will need to do? Do I understand all the requirements and have a design which meets them?" all before writing the first method of the assignment. This will be crucial in the upcoming project.`
  },
  {
    week: 7,
    weekOf: "03/25/2024",
    topic: "Project 2: Sassy CLI Dictionary + Intro to Java",
    gaScore: "Blue",
    gaComments: `Ashley meticulously planned every single aspect of her project, created a UML diagram, and made sure to consider every OOP principle that we taught when making every single function or class.
    
    Comments from program team (Dom):
    Asha mentioned that you are so good at your project planning skills that she sees you can grow into roles where you are more a part of the product planning and not just the development process. I agree. You are always in project planning mode and have the strong technical skills, I think the combination will really take you places.`,
    mentorScore: 4,
    mentorComments: `Great job completing the project! There were many elements which had to come together in the right way to satisfy the requirements, e.g. reading/writing from/to files, scanning for user input, arraylist methods, and putting all of that together is not a simple task. I encourage you to think about the flow and structure of data within your program; having one instance of scanner works, but how robust is this to future changes in the code? Reading the list of words from the dictionary repeatedly works because the on-disk dictionary remains up-to-date, but do we have to read it every iteration? Could we instead maintain one instance of the list and update it as we go just like the file?`
  },
  {
    week: 8,
    weekOf: "04/1/2024",
    topic: "SQL, Relationship & Entity Mapping, noSQL",
    gaScore : "Attendance 100%, Engagement 100%, Homework submission 100%",
    gaComments: `Seems to have the hang of SQL. She has a very effective learning system of note taking and asking questions.`,
    mentorScore: 4,
    mentorComments: `Great job this week picking up SQL! I think it's great that you slowed down and made sure you understood why different queries had different results even though they seemed similar, as well as focusing on some errors which can come up when querying (e.g. the functional dependency issue).`
  },
  {
    week: 9,
    weekOf: "04/8/2024",
    topic: "Springboot, REST API, Spring Data JPA (O2M) & Entity Relationships",
    gaScore : "Attendance 100%, Engagement 100%, Homework submission 100%",
    gaComments: `Spring is harder for her learning style, but she's made up for it by asking many questions and making sure she understands concepts. As always, great student.`,
    mentorScore: 5,
    mentorComments: `Great job this week as always! This week was a great example of making sure you're understanding what's happening in class during the code alongs; I like that when you don't understand something, you either note it for research later or ask in the class. It's important to understand not only the bigger picture "why" questions but also the "how", and I think you did well in approaching both types this week.`
  },
  {
    week: 10,
    weekOf: "04/15/2024",
    topic: "JPA (O2O + M2M), git branches, + League App (pair project)",
    gaScore : "Attendance 100%, Engagement 100%, Homework submission 100%",
    gaComments: `Working with Erica on group project. They've come to me very frequently with a mix of code questions and git anxiety/problems. Majority of said problems were Git related and were caused by missing a step in the workflow and were resolved fairly rapidly. They've gotten a better understanding of what Git actually is and how it works through the process.`,
    mentorScore: 5,
    mentorComments: `Great job this week! This week was an opportunity to gain hands-on collaboration experience in git and I think you nailed it. Though it was challenging at times, just know it gets much easier to work with as it becomes a daily tool.
    I’m glad that you took the time to really internalize and understand the various database relationships such as One to Many and Many To Many, and the impacts of these relationships on the design of the database. You can always look up the specific implementation details in spring JPA or whatever other database technology, but the fundamental database structure is important to understand, and I think you’ve done well on that so far.
    Keep it up!`
  },
  {
    week: 11,
    weekOf: "04/22/2024",
    topic: "Microservices, JUnit, Mockito",
    gaScore : "Attendance 100%, Engagement 100%, Homework submission 100%",
    gaComments: `Has been working very hard to keep up with the new concepts and the resulting code looks very good. As always, her frequent questions in class are appreciated.`,
    mentorScore: 5,
    mentorComments: `Great job picking up the testing concepts this week! It’s hard to go from writing standard application code to actually testing the code; thinking about various edge cases which can occur and testing those out is hard but also essential. Pair that with the concept of “mocking” and bundle it with Spring complexities and you’ve got a complicated mess to sort through. Your focus on understanding the fundamentals served you well this week and I think you did well in understanding how everything links together.`
  },
  {
    week: 12,
    weekOf: "04/29/2024",
    topic: "Spring Backend MVC + Microservice Refer-All Project",
    gaScore : "Attendance 100%, Engagement 100%, Homework submission 100%",
    gaComments: `Has used instructors like a rubber duck many times throughout the project, for purposes mainly ranging from minor debugging to small design clarifications. Certain she could manage entirely on her own and be fine, but glad she's them as a learning tool to get feedback.`,
    mentorScore: 5,
    mentorComments: `Great job this week! This is a complicated project blending most of the concepts we’ve learned so far, along with the relatively new notion of unit testing. I’m glad you’re getting experience working on multiple microservices and connecting them, as that is very typical work for backend devs at Indeed. Great job continuing to focus on the fundamental “why” questions, this will continue to serve you well in your learning journey.
    I would encourage you to think about what you knew before embarking on this bootcamp and realize how much you’ve learned and done so far. Finish strong!`
  },
  {
    week: 13,
    weekOf: "05/06/2024",
    topic: "React: Basics, Components, State Management & Hooks",
    gaScore: "Attendance 100%, Engagement 100%, Homework submission 100%",
    gaComments: `Great job finishing off the spring/microservices project! This was a complex project involving linking two microservices, including database connection and, of course, unit testing. Your methodical approach to planning the implementation served you well. This is a good process to keep up. Eventually, you'll be able to plan things of this scale without having to write everything down (or with writing less down), but this kind of organization will be crucial in a SWE position.`,
    mentorScore: 5,
    mentorComments: `Good job absorbing the new React material on such a tight schedule this week. It was a shortened week, but you were able to focus on the important takeaways for each lesson and not get too overwhelmed.`
  },
  {
    week: 14,
    weekOf: "05/13/2024",
    topic: "React: Lifting State, Router, and Use Effect",
    gaScore: "Attendance 100%, Engagement 100%, Homework submission 100%",
    gaComments: `Continues to be a hard worker. Still working on homework past the due date to finish bonus questions and ensure that she understands everything she can about React. Has been the primary student asking important in-class questions throughout the course and has not stopped up to the finish line. Overall, one of the best students I've taught from sheer drive to learn.`,
    mentorScore: 5,
    mentorComments: `Good job absorbing the new React material on such a tight schedule this week. It was a shortened week, but you were able to focus on the important takeaways for each lesson and not get too overwhelmed.`
  },
  {
    week: 15,
    weekOf: "05/20/2024",
    topic: "Capstone Week 1",
    gaScore: "Attendance 100%, Engagement 100%",
    gaComments: `Uses Asha extensively as a rubber duck. Primarily needs to slow down and approach errors more methodically—currently seems to be jumping around from anxious energy. Project on track for completion.`,
    mentorScore: 5,
    mentorComments: `From Chad (5/24): Nice! And kudos back to Ashley. It was really just a couple of small bugs that a second set of eyes can help out with. The logic was all there!`
  }
]