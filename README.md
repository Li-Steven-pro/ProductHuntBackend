# ProductHuntBackend
 Back-end which handles product hunt API.

## Prerequisites

### Installation

1. Clone the repo
  ```sh
  git clone https://github.com/Li-Steven-pro/ProductHuntBackend.git
  ```
2. Install NPM packages
  ```sh
  npm install
  ```
 
### Environment variable (development purposes)
Before launching the server, set the environment variable in .env as described below.

#### .env Structure
 ```ascii
 .env
 └── TOKEN
    ├── Your Product Hunt developer token
 └── PORT (optional)
    ├── The porrt to listen on, if not specified, it will listen in 8080 
 ```
### Launch the server 

Command line : 
 ```sh
  node index.js
 ```

## Endpoint

### Get products using date

/api/rest/:date

Returns products info by retrieving products in the Product Hunt API using date (format : "YYYY-MM-DD")

Example output: 

/api/rest/2021-01-01

```json
{
    "status": 200,
    "response": {
        "date": "2021-1-1",
        "results": [
            {
                "name": "Everyday 2.0",
                "tagline": "Simple & beautiful habit tracker for the Web, iOS & Android",
                "topics": [
                    {
                        "name": "Android"
                    },
                    {
                        "name": "iPhone"
                    },
                    {
                        "name": "Apple Watch"
                    },
                    {
                        "name": "Mac"
                    },
                    {
                        "name": "Web App"
                    },
                    {
                        "name": "Health and Fitness"
                    },
                    {
                        "name": "Quantified Self"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/748783c9-4cb4-467b-b74c-365b0661e6c0.gif?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "#90DaysOfProse",
                "tagline": "Make writing a habit",
                "topics": [
                    {
                        "name": "Productivity"
                    },
                    {
                        "name": "Twitter"
                    },
                    {
                        "name": "Education"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/3f23949e-94ce-425a-88af-42ee59bf50e9.gif?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "Remotelane 3.0",
                "tagline": "Remote Jobs for Everyone with the most simple ux and search",
                "topics": [
                    {
                        "name": "Web App"
                    },
                    {
                        "name": "Hiring and Recruiting"
                    },
                    {
                        "name": "Nomad Lifestyle"
                    },
                    {
                        "name": "Tech"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/024dec6d-0140-4acb-ac0f-78d9fb8111b2.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "HistoricalMe",
                "tagline": "Diarise, organise and realise.",
                "topics": [
                    {
                        "name": "Productivity"
                    },
                    {
                        "name": "Tech"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/2b17fbbf-02e4-4c9e-b3f6-acca14162f7c.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "Elza Browser",
                "tagline": "Fast, private, and minimal web browser.",
                "topics": [
                    {
                        "name": "PC"
                    },
                    {
                        "name": "Linux"
                    },
                    {
                        "name": "Windows"
                    },
                    {
                        "name": "Mac"
                    },
                    {
                        "name": "Productivity"
                    },
                    {
                        "name": "Anonymous"
                    },
                    {
                        "name": "Privacy"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/fa6e6996-8d5a-4dae-9ed2-28e19bfc4fec.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "AKKO 3068 Silent Bluetooth 5.0",
                "tagline": "Bluetooth 5.0 wireless & wired dual mode mechanical keyboard",
                "topics": [],
                "thumbnail": "https://ph-files.imgix.net/e79d0689-a3ae-4082-85d8-21e401a70a69.jpeg?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "GaaS",
                "tagline": "Greetings as a Service",
                "topics": [
                    {
                        "name": "Funny"
                    },
                    {
                        "name": "Social Media Tools"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/faadd5c4-e846-4636-8e14-0669a67780ef.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "Metrics",
                "tagline": "Activities and health tracker",
                "topics": [
                    {
                        "name": "iPhone"
                    },
                    {
                        "name": "Health and Fitness"
                    },
                    {
                        "name": "Productivity"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/6e0cf0ef-f37d-4b6e-9319-aacee8db8cd2.gif?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "School Buddy",
                "tagline": "Grades & assignment tracker",
                "topics": [
                    {
                        "name": "iPhone"
                    },
                    {
                        "name": "iPad"
                    },
                    {
                        "name": "Web App"
                    },
                    {
                        "name": "Social Media Tools"
                    },
                    {
                        "name": "Education"
                    },
                    {
                        "name": "Calendar and Scheduling"
                    },
                    {
                        "name": "Tech"
                    },
                    {
                        "name": "Apple"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/40cc041b-a383-40c1-b0bf-b2e8cbc529be.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "Procurelist",
                "tagline": "Take effective control over your acquisitions",
                "topics": [
                    {
                        "name": "Web App"
                    },
                    {
                        "name": "Productivity"
                    },
                    {
                        "name": "SaaS"
                    },
                    {
                        "name": "Tech"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/5d625efe-3c71-4ddc-9080-08256489d01c.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "downloadsound.cloud",
                "tagline": "Download SoundCloud tracks & playlists into a ZIP file.",
                "topics": [
                    {
                        "name": "Productivity"
                    },
                    {
                        "name": "Audio and Voice "
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/8894b117-8afd-4dab-a2a9-23d62dd7ed0c.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "apocha",
                "tagline": "Expense tracker with receipt scanner and item categorization",
                "topics": [
                    {
                        "name": "Fintech"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/04bcb42b-8034-490b-a985-3d71d09faed1.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "Code Joh",
                "tagline": "MVC source code and web application generator",
                "topics": [
                    {
                        "name": "Web App"
                    },
                    {
                        "name": "Productivity"
                    },
                    {
                        "name": "Freelance"
                    },
                    {
                        "name": "Prototyping"
                    },
                    {
                        "name": "Software Engineering"
                    },
                    {
                        "name": "Developer Tools"
                    },
                    {
                        "name": "Tech"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/1a56902b-0070-4456-b4db-81b449740cc7.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            },
            {
                "name": "Kalebotic",
                "tagline": "The solution to expensive Smoothies.",
                "topics": [
                    {
                        "name": "Health and Fitness"
                    },
                    {
                        "name": "Robots"
                    },
                    {
                        "name": "Internet of Things"
                    },
                    {
                        "name": "Tech"
                    }
                ],
                "thumbnail": "https://ph-files.imgix.net/737960ba-c793-46b4-9489-c8d6eb16e953.png?auto=format&fit=crop&h=570&w=430",
                "day": "2021-01-01"
            }
        ]
    }
}
```

## Docker 

After the setting of .env file you can build your docker image
```
docker build -t producthunt-api .
```

then push on docker hub. [link](https://docs.docker.com/engine/reference/commandline/push/)



## Packages

List of packages I used for the server : 
1. express
2. axios
3. cors 
4. dotenv 

  
