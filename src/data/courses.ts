export type CourseData = {
  code: string
  title: string
  semester: string
  university: string
  universityFull: string
  description: string
  logistics: {
    schedule: string
    location: string
  }
  instructors: Array<{
    role: string
    name: string
    email: string
    office: string
    hours: string
  }>
  objectives: string[]
  schedule: Array<{
    week: number
    dates: string
    sessions: Array<{
      day: string
      type: string
      topic: string
      readings?: Array<{
        title: string
        url: string
      }>
    }>
  }>
  textbooks: {
    required: Array<{
      title: string
      author: string
      publisher: string
    }>
    recommended?: Array<{
      title: string
      author: string
      publisher: string
    }>
  }
}

export const courseData: Record<string, CourseData> = {
  "j677-data-analysis": {
    code: "J677",
    title: "Concepts and Tools for Data Analysis and Visualization",
    semester: "Spring 2025",
    university: "University of Wisconsin-Madison",
    universityFull: "University of Wisconsin-Madison School of Journalism and Mass Communication",
    description: "Like no other time, our world is recorded in digital formats through social networks, online news platforms, mobile devices, and more. This constant flow of information has given rise to new possibilities for understanding social phenomena, communicating insights, and driving data-informed decisions in fields like journalism, strategic communication, and beyond.",
    logistics: {
      schedule: "Monday & Wednesday 2:30\u20133:45 PM",
      location: "Vilas 5145"
    },
    instructors: [
      {
        role: "Instructor",
        name: "Ross Dahlke, PhD",
        email: "ross.dahlke@wisc.edu",
        office: "5166 Vilas Hall",
        hours: "Monday 3:45\u20134:45 PM"
      },
      {
        role: "Teaching Assistant",
        name: "Wil M. Dubree, MA",
        email: "dubree@wisc.edu",
        office: "5165 Vilas Hall",
        hours: "Wednesday 1:30\u20132:30 PM or by appointment"
      }
    ],
    objectives: [
      "Identify and address the practical, ethical, and inclusive challenges of data collection, management, analysis, and presentation, ensuring responsible use and communication of digital media data.",
      "Demonstrate a solid understanding of the grammar and principles of data visualization, applying them to create clear, engaging, and contextually relevant data narratives for diverse audiences.",
      "Attain proficiency with industry-relevant tools, including R, tidyverse, and generative AI, to effectively prepare, explore, and visualize data in real-world media and communication settings.",
      "Develop the capacity to handle and visualize diverse data types, integrating these skills into compelling, data-driven storytelling projects."
    ],
    schedule: [
      {
        week: 1,
        dates: "January 22, 2025",
        sessions: [
          {
            day: "Wednesday",
            type: "Lecture",
            topic: "Syllabus and Intro to Data Visualization",
            readings: [
              {
                title: "R4DS: Welcome & Chapter 1 (Welcome - Introduction)",
                url: "https://r4ds.had.co.nz/introduction.html"
              },
              {
                title: "Healy: Chapter 1 (Look at Data)",
                url: "https://jwmason.org/wp-content/uploads/2021/08/Kieran-Healy-Data-Visualization_-A-Practical-Introduction-Princeton-University-Press-2019.pdf"
              }
            ]
          }
        ]
      },
      {
        week: 2,
        dates: "January 27\u201329, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Intro to R, RStudio, & Tidyverse",
            readings: [
              {
                title: "R4DS: Chapter 2 (Explore - Introduction)",
                url: "https://r4ds.had.co.nz/explore-intro.html"
              },
              {
                title: "R4DS: Chapter 4 (Basics)",
                url: "https://r4ds.had.co.nz/workflow-basics.html"
              },
              {
                title: "Healy: Chapter 2 (Get Started)",
                url: "https://jwmason.org/wp-content/uploads/2021/08/Kieran-Healy-Data-Visualization_-A-Practical-Introduction-Princeton-University-Press-2019.pdf"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Lecture",
            topic: "Intro to Data & Data Structures",
            readings: [
              {
                title: "R4DS: Chapter 6 (Scripts)",
                url: "https://r4ds.had.co.nz/workflow-scripts.html"
              },
              {
                title: "RGC: Chapter 1 (R Basics)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          }
        ]
      },
      {
        week: 3,
        dates: "February 3\u20135, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "More R & Tidyverse",
            readings: [
              {
                title: "R4DS: Chapter 5 (Data Transformation)",
                url: "https://r4ds.had.co.nz/transform.html"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Lecture",
            topic: "Intro to ggplot & Univariate Visualization",
            readings: [
              {
                title: "R4DS: Chapter 3 (Data Visualization)",
                url: "https://r4ds.had.co.nz/data-visualisation.html"
              },
              {
                title: "Healy: Chapter 3 (Make a Plot)",
                url: "https://jwmason.org/wp-content/uploads/2021/08/Kieran-Healy-Data-Visualization_-A-Practical-Introduction-Princeton-University-Press-2019.pdf"
              },
              {
                title: "RGC: Chapter 2 (Quickly Exploring Data)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          }
        ]
      },
      {
        week: 4,
        dates: "February 10\u201312, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Bivariate Analysis",
            readings: [
              {
                title: "R4DS: Chapter 7 (Exploratory Data Visualization)",
                url: "https://r4ds.had.co.nz/exploratory-data-analysis.html"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Lecture",
            topic: "Bivariate Visualization",
            readings: [
              {
                title: "Healy: Chapter 4 (Show the Right Numbers)",
                url: "https://jwmason.org/wp-content/uploads/2021/08/Kieran-Healy-Data-Visualization_-A-Practical-Introduction-Princeton-University-Press-2019.pdf"
              },
              {
                title: "RGC: Chapter 5 (Scatter Plots)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          }
        ]
      },
      {
        week: 5,
        dates: "February 17\u201319, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Data Sources",
            readings: [
              {
                title: "R4DS: Chapter 9 (Introduction to Wrangle)",
                url: "https://r4ds.had.co.nz/wrangle-intro.html"
              },
              {
                title: "R4DS: Chapter 10 (Tibbles)",
                url: "https://r4ds.had.co.nz/tibbles.html"
              },
              {
                title: "R4DS: Chapter 11 (Data Import)",
                url: "https://r4ds.had.co.nz/data-import.html"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Final Project",
            topic: "Idea Pitch",
            readings: []
          }
        ]
      },
      {
        week: 6,
        dates: "February 24\u201326, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Data Cleaning",
            readings: [
              {
                title: "R4DS: Chapter 12 (Tidy Data)",
                url: "https://r4ds.had.co.nz/tidy-data.html"
              },
              {
                title: "R4DS: Chapter 13 (Relational Data)",
                url: "https://r4ds.had.co.nz/relational-data.html"
              },
              {
                title: "R4DS: Chapter 14 (Strings)",
                url: "https://r4ds.had.co.nz/strings.html"
              },
              {
                title: "R4DS: Chapter 15 (Factors)",
                url: "https://r4ds.had.co.nz/factors.html"
              },
              {
                title: "R4DS: Chapter 16 (Dates and Times)",
                url: "https://r4ds.had.co.nz/dates-and-times.html"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Group Assignment",
            topic: "The Best and Worst of Data Visualization",
            readings: []
          }
        ]
      },
      {
        week: 7,
        dates: "March 3\u20135, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Themes, Facets, & Combining Graphs",
            readings: [
              {
                title: "RGC: Chapter 9 (Controlling the Overall Appearance of Graphs)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              },
              {
                title: "RGC: Chapter 11 (Facets)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Final Project",
            topic: "Cleaned Dataset & Dictionary",
            readings: []
          }
        ]
      },
      {
        week: 8,
        dates: "March 10\u201312, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Plot Axes",
            readings: [
              {
                title: "RGC: Chapter 8 (Axes)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Group Assignment",
            topic: "Tabular Data Visualization",
            readings: []
          }
        ]
      },
      {
        week: 9,
        dates: "March 17\u201319, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Color, Color Theory, & Accessibility",
            readings: [
              {
                title: "Healy: Chapter 8 (Refine Your Plots)",
                url: "https://jwmason.org/wp-content/uploads/2021/08/Kieran-Healy-Data-Visualization_-A-Practical-Introduction-Princeton-University-Press-2019.pdf"
              },
              {
                title: "RGC: Chapter 12 (Using Colors in Plots)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Final Project",
            topic: "Instagram Post",
            readings: []
          }
        ]
      },
      {
        week: 10,
        dates: "March 31\u2013April 2, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Visualizing Uncertainty",
            readings: [
              {
                title: "RGC: Chapter 6 (Summarized Data Distributions)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Group Assignment",
            topic: "AI Client Simulation",
            readings: []
          }
        ]
      },
      {
        week: 11,
        dates: "April 7\u20139, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Visual Focus",
            readings: [
              {
                title: "R4DS: Chapter 28 (Graphics for Communication)",
                url: "https://r4ds.had.co.nz/graphics-for-communication.html"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Final Project",
            topic: "Infographic",
            readings: []
          }
        ]
      },
      {
        week: 12,
        dates: "April 14\u201316, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Lecture",
            topic: "Annotations, Labels, Legends, & Guides",
            readings: [
              {
                title: "Healy: Chapter 5 (Graph Tables, Add Labels, Make Notes)",
                url: "https://jwmason.org/wp-content/uploads/2021/08/Kieran-Healy-Data-Visualization_-A-Practical-Introduction-Princeton-University-Press-2019.pdf"
              },
              {
                title: "RGC: Chapter 7 (Annotations)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              },
              {
                title: "RGC: Chapter 10 (Legends)",
                url: "https://osctr.ouhsc.edu/sites/default/files/2020-02/rcourse/3/RGraphicsCookbook.pdf"
              }
            ]
          },
          {
            day: "Wednesday",
            type: "Final Project",
            topic: "Final Project AI Role Playing",
            readings: []
          }
        ]
      },
      {
        week: 13,
        dates: "April 21\u201323, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Final Project",
            topic: "Final Project Peer Feedback",
            readings: []
          },
          {
            day: "Wednesday",
            type: "Lecture",
            topic: "Writing Center (Resume)",
            readings: []
          }
        ]
      },
      {
        week: 14,
        dates: "April 28\u201330, 2025",
        sessions: [
          {
            day: "Monday",
            type: "Final Project",
            topic: "Final Project Instructor Feedback",
            readings: []
          },
          {
            day: "Wednesday",
            type: "Final Project",
            topic: "Poster Presentations",
            readings: []
          }
        ]
      }
    ],
    textbooks: {
      required: [
        {
          title: "R Graphics Cookbook: Practical Recipes for Visualizing Data, 2nd Edition",
          author: "Chang, W.",
          publisher: "O'Reilly Media (2018)"
        },
        {
          title: "Data Visualization: A Practical Introduction",
          author: "Healy, K.",
          publisher: "Princeton University Press (2018)"
        },
        {
          title: "R for Data Science, 2nd Edition",
          author: "Wickham, H., \u00c7etinkaya-Rundel, M., & Grolemund, G.",
          publisher: "O'Reilly Media (2023)"
        }
      ],
      recommended: [
        {
          title: "Good Charts: The HBR Guide to Making Smarter, More Persuasive Data Visualizations",
          author: "Berinato, S.",
          publisher: "Harvard Business Press (2016)"
        },
        {
          title: "The Functional Art",
          author: "Cairo, A.",
          publisher: "New Riders (2012)"
        },
        {
          title: "How Charts Lie: Getting Smarter About Visual Information",
          author: "Cairo, A.",
          publisher: "W.W. Norton & Company (2019)"
        }
      ]
    }
  }
}
