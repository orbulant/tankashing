import React, { useState, useEffect } from "react"
import { Button, Heading, Card, Image, Text, Box, Divider } from "theme-ui"
import QuestionSelector from "./QuestionSelector"

const Quiz = () => {
  const [state, setState] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [dateDest, setDateDest] = useState({})
  const [final, setFinal] = useState(21)

  const answers = {
    1: 0,
    2: 1,
    3: 0,
    4: 2,
    5: 1,
    6: 7,
    7: 1,
    8: 1,
    9: 1,
    10: 3,
    11: 3,
    12: 4,
    13: 0,
    14: 0,
    15: 0,
    16: 3,
  }

  const prevState = () => {
    if (state === 0) return
    setState(prevState => prevState - 1)
  }

  const nextState = () => {
    setState(prevState => prevState + 1)
  }

  useEffect(() => {
    console.log(selectedAnswers)
  }, [selectedAnswers])

  useEffect(() => {
    console.log(dateDest)
  }, [dateDest])

  return (
    <div>
      {state === 0 && (
        <div>
          <Heading padding={10}>Hi, my beautiful Chanie.</Heading>
          <Heading as="h2" padding={10}>
            You're always such an amazing person to me.
          </Heading>
          <Heading as="h2" padding={10}>
            But do you think you can pass this test?
          </Heading>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Box>
              <Card
                sx={{
                  maxWidth: 256,
                  maxHeight: 480,
                  padding: 2,
                  borderRadius: 4,
                  boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                  background: "white",
                }}
              >
                <Image src={`../../parkimage.jpeg`} />
                <Text color="black">Our day at the park</Text>
              </Card>
            </Box>
          </div>
        </div>
      )}
      {state === 1 && (
        <div>
          <Heading>Let's proceed..........</Heading>
          <div style={{ height: 30 }} />
          <Text>
            If you can answer this with more than 80% correct, then....
          </Text>
        </div>
      )}
      {state === 2 && (
        <div>
          <Heading>I'll bring you to a very nice date :) Next week...</Heading>
          <div style={{ height: 30 }} />
          <Text>Otherwise.....</Text>
        </div>
      )}
      {state === 3 && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Box>
              <Card
                sx={{
                  maxWidth: 256,
                  maxHeight: 480,
                  padding: 2,
                  borderRadius: 4,
                  boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                  background: "white",
                }}
              >
                <Image src={`../../angrychanie.jpeg`} />
                <Text color="black">I'll be angry like this</Text>
              </Card>
            </Box>
          </div>
        </div>
      )}
      {state === 4 && (
        <div>
          <Heading>First question. Easy.</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"What is my name?"}
            answers={[
              "Tan Ka-Shing",
              "Tan Ka Shing",
              "Tan Kah Shing",
              "Gnish-aK naT",
            ]}
            questionIndex={1}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 5 && (
        <div>
          <Heading>Question Two.</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"Why did I wanted to pursue you at first?"}
            answers={[
              "Your looks, charms, and the way you carried yourself.",
              "Your looks, charms, the way you carried yourself and your online personality.",
              "Your tits, ass, face, and sexy looks.",
              "Just trying my luck.",
              "Cause you look lonely.",
              "Cause I wanted to see your cats.",
            ]}
            questionIndex={2}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 6 && (
        <div>
          <Heading>Question Three</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"What's my favourite physical trait about you?"}
            answers={[
              "Dear god, everything.",
              "Your tits lah! - every tiktok person",
              "Your nose, lips.",
              "Your hair, nose, lips.",
              "Your lips, cheeks.",
              "Your face, tits, ass.",
              "Your toes ONLY.",
            ]}
            questionIndex={3}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 7 && (
        <div>
          <Heading>Fourth Question</Heading>
          <div style={{ height: 10 }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Card
              sx={{
                maxWidth: 256,
                maxHeight: 480,
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                background: "white",
              }}
            >
              <Image src={`../../sparkclub.JPG`} />
              <Text color="black">Huai as fuck???</Text>
            </Card>
          </Box>
          <QuestionSelector
            question={"Who took this picture?"}
            answers={[
              "Lim Fried Chicken",
              "Wei, Shi Wei",
              "Shi Wei",
              "Chiam Chloe",
              "Howard",
              "Random Uncle from Spark",
              "One of your tiktok fans",
            ]}
            questionIndex={4}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 8 && (
        <div>
          <Heading>Fifth Queston</Heading>
          <div style={{ height: 10 }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Card
              sx={{
                maxWidth: 256,
                maxHeight: 480,
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                background: "white",
              }}
            >
              <Image src={`../../genting20dec.PNG`} />
              <Text color="black">Us at Half-Genting</Text>
            </Card>
          </Box>
          <QuestionSelector
            question={"When did we go here?"}
            answers={["19th December", "20th December"]}
            questionIndex={5}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 9 && (
        <div>
          <Heading>Fifth Question. HARDER LIAO</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"Why did we go here?"}
            answers={[
              "Because your exams just ended and we felt like it!",
              "Because we wanted to go gambling but got lazy and went back down to eat.",
              "Because we wanted to eat.",
              "Because we wanted to experience some cold air.",
              "Because we said we wanted to go on a genting date a week before.",
              "All of the above except for answer number 2 and 3.",
              "All of the above except for answer number 2.",
              "All of the above except for answer number 2 and 5.",
            ]}
            questionIndex={6}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 10 && (
        <div>
          <Heading>Sixth Question.</Heading>
          <div style={{ height: 10 }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Card
              sx={{
                maxWidth: 256,
                maxHeight: 480,
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                background: "white",
              }}
            >
              <Image src={`../../fake3rdperson.jpeg`} />
              <Text color="black">hehehhe</Text>
            </Card>
          </Box>
          <QuestionSelector
            question={"What is the name of this Restaurant?"}
            answers={[
              "Vacas Meat",
              "Uma Meat",
              "Umam Meat",
              "Mei by Fat Spoon",
              "Meat the Second Chapter",
            ]}
            questionIndex={7}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 11 && (
        <div>
          <Heading>Seventh Question.</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"Why did we take this picture?"}
            answers={[
              "Because we thought it'd be cute.",
              "Because Brandon wanted a fake pic of us in 3rd person to lie to chloe.",
              "Because Chloe wanted a fake pic of us in 3rd person to lie to Chif.",
              "Because, we wanted a couple pic of us.",
            ]}
            questionIndex={8}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 12 && (
        <div>
          <Heading>Eighth Question.</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"What did the person whom took our picture looked like?"}
            answers={[
              "Malay Male, With Long Hair and Beanie",
              "Malay Male, Bald, Wearing a Shirt",
              "Indian Male, Bald, Wearing a Shirt",
              "Chinese Male, Short Hair, Wearing Glasses",
              "Malay Female, Long Hair, Grey Shirt",
            ]}
            questionIndex={9}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 13 && (
        <div>
          <Heading>Ninth Question.</Heading>
          <div style={{ height: 10 }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Card
              sx={{
                maxWidth: 256,
                maxHeight: 480,
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                background: "white",
              }}
            >
              <Image src={`../../sucktoes.JPG`} />
              <Text color="black">some prince sucking a princess's toes</Text>
            </Card>
          </Box>
          <QuestionSelector
            question={"Am I the kind of boyfriend who would do this to you?"}
            answers={[
              "Won't do, only if someone paid me to.",
              "Won't do, ever.",
              "Say only, but actually won't do.",
              "Will do, no hesitation.",
              "I will do everything, but not suck toes.",
              "I will do everything even this but only if the toes are clean.",
            ]}
            questionIndex={10}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 14 && (
        <div>
          <Heading>Tenth Question.</Heading>
          <div style={{ height: 10 }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Card
              sx={{
                maxWidth: 256,
                maxHeight: 480,
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                background: "white",
              }}
            >
              <Image src={`../../afterexamscelebration.jpeg`} />
              <Text color="black">Ahhhh..... you're so gorgeous</Text>
            </Card>
          </Box>
          <QuestionSelector
            question={"What was the name of this restaurant?"}
            answers={[
              "Pier 12 Seafood Tavern",
              "Pampas Steakhouse at Old Malaya",
              "Poblano KL",
              "Luce Osteria Contemporanea",
            ]}
            questionIndex={11}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 15 && (
        <div>
          <Heading>Eleventh Question.</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"Why did we come here?"}
            answers={[
              "Cause we bout that life xxxdddssss!",
              "Cause we celebrate your after exams and our final date of 2022!",
              "Cause we wanna act rich for the IG reels.",
              "Cause I wanted to eat some good Italian Food.",
              "All the above except 1 & 3",
            ]}
            questionIndex={12}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 16 && (
        <div>
          <Heading>Twelveth Question.</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"How many exes did you meet today?"}
            answers={["2", "1"]}
            questionIndex={13}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 17 && (
        <div>
          <Heading>Thirteenth Question.</Heading>
          <div style={{ height: 10 }} />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Card
              sx={{
                maxWidth: 256,
                maxHeight: 580,
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                background: "white",
              }}
            >
              <Image src={`../../postop.jpg`} />
              <Text color="black">
                After my post-operation surgery on Friday (13th January)
              </Text>
            </Card>
          </Box>
          <QuestionSelector
            question={"How many times was I rude til' it hurted your feelings?"}
            answers={["2", "1"]}
            questionIndex={14}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 18 && (
        <div>
          <Heading>Coincidence?????</Heading>
          <Heading as="h2">I think not.</Heading>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Card
              sx={{
                maxWidth: 256,
                maxHeight: 480,
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                background: "white",
              }}
            >
              <Image src={`../../drowsy.jpeg`} />
              <Text color="black">
                2 times i hurt you and then you met 2 exes HAHAHA
              </Text>
            </Card>
          </Box>
        </div>
      )}
      {state === 19 && (
        <div>
          <Heading>
            I'm just kidding baby, just thought of the funny coincidence.
          </Heading>
          <div style={{ height: 10 }} />
          <Text>Speaking of 2,</Text>
          <QuestionSelector
            question={"Which of the follow numbers are my favourite numbers?"}
            answers={["2, 8", "1, 2", "2, 3", "5, 7", "8"]}
            questionIndex={15}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 20 && (
        <div>
          <Heading>Fifthteenth Question.</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"Since I hurted you, what do you think of me now?"}
            answers={[
              "Run, this guy has severe red-flags!",
              "Run, this guy has temperament issues until will be fussy with you, who knows what will happen in the future?",
              "Run, because i DO NOT tolerate a single mistake!!",
              "Stay because this guy knows his flaws and is working on it, and this is among one of this flaws which he can be fussy at times, but he's really trying to knock that out because he doesn't wanna hurt you anymore. He also wishes that you are treated well without any rudeness because he doesn't want the \"honeymoon\" phase to stop just because he started being rude once when he's usually nice.",
              "Stay because I'm scared of leaving the relationship after all we've been through.",
              "Stay because I LOVE being treated badly!",
            ]}
            questionIndex={16}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
          />
        </div>
      )}
      {state === 21 && (
        <div>
          <Heading>Last Question....</Heading>
          <div style={{ height: 10 }} />
          <QuestionSelector
            question={"Pick a number."}
            answers={["1", "2", "3", "4", "5"]}
            questionIndex={1}
            selectedAnswers={dateDest}
            setSelectedAnswers={setDateDest}
          />
        </div>
      )}
      {state === 22 && (
        <div>
          <Heading>
            {JSON.stringify(selectedAnswers) == JSON.stringify(answers)
              ? "Congratulations YOU GOT IT!"
              : "Oh no baby, try again!"}
          </Heading>
          <div style={{ height: 30 }} />
          {JSON.stringify(selectedAnswers) == JSON.stringify(answers) && (
            <Text>Yay Baby!</Text>
          )}
          <div style={{ height: 30 }} />
          <Text>
            {JSON.stringify(selectedAnswers) == JSON.stringify(answers) &&
              dateDest[1] === 0 &&
              "You chose to go on a date a V88!"}
            {JSON.stringify(selectedAnswers) == JSON.stringify(answers) &&
              dateDest[1] === 1 &&
              "You chose to go on a date a CaoCao Grilled Lamb! & Movies!"}
            {JSON.stringify(selectedAnswers) == JSON.stringify(answers) &&
              dateDest[1] === 2 &&
              "You chose to go on a date at Triptyk!"}
            {JSON.stringify(selectedAnswers) == JSON.stringify(answers) &&
              dateDest[1] === 3 &&
              "You chose to go on a date at AhMaJia & Movies!"}
            {JSON.stringify(selectedAnswers) == JSON.stringify(answers) &&
              dateDest[1] === 4 &&
              "You chose to go on a date at Teppan Sakaba!"}
          </Text>
        </div>
      )}
      {/*BUTTON SECTION*/}
      <div
        style={{
          display: "flex",
          marginTop: "60px",
          marginBottom: "40px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          minWidth: "360px",
        }}
      >
        <Button onClick={prevState} color="black" sx={{ width: "100px" }}>
          Back
        </Button>
        {state <= final && (
          <Button onClick={nextState} color="black" sx={{ width: "100px" }}>
            {state === final ? "Finish" : "Next"}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Quiz
