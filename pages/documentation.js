import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Grid from  '@mui/material/Grid';



const figure1 = ({ src, width, quality }) => {
  return `https://i.imgur.com/np0Cgo4.png`;
};
const figure2 = ({ src, width, quality }) => {
  return `https://i.imgur.com/hRswSlN.png`;
};
export default function documentation() {
  return (
    <div>
      <Header />
      <div className="flex flex-row p-10 ">
      <div className="w-full relative top-0 "> <Sidebar /></div>
     
      <div className="">
        <h1 className="font-bold text-2xl">A holistic model for Gamification</h1>
        <div>
          Several researchers on gamification unanimously agree that
          gamification design should follow a holistic and standard procedure
          (Fitz-Walter, 2015; Martì-Parreno et al., 2016; Morschheuser et al.,
          2017). Although several models have been proposed, none of them
          provide a method to increase the statistical rigor. This draft
          introduces a brief definition of a general model for the designing
          phase of gamified software. The graphic representation can be seen in
          Figure 1. This model will be associated with a peer-reviewed analysis
          of the design phase, in order to give constructive feedback from the
          scientific community before the development. Moreover, this model will
          provide a transparent and open access data collection of gamification
          elements in different domains. Finally, this model will provide
          several standardized methodologies for the following analysis.
        </div>
        <div className="justify-center items-center flex"><Image
              loader={figure1}
              src="image-src"
              alt="GamiDoc"
              width={1202/2}
              height={784/2}
 
            /></div>
        
        <div id="context">
        <h1 className="font-bold">
        Context </h1>
        This model is composed of a first part related to the context information, such as
        target users, the aim of the development, application domain, and
        encouraged behaviors. According to Morschheuser and colleagues (2017),
        it is a crucial part of the design phase: indeed most of the
        gamification design models have a part related to the user context.  <br/> <br/>
        </div>
        <div id="domain"><h1 className="font-bold">
        1.1 Domain </h1>
         
        The domain is an important feature since gamification elements
        work differently in relation to context and user differences (Zahedi,
        2021). Koivisto e Hamari find 22 different application domains:
        1.Education / Learning 
        2. Health / Exercise 
        3. Crowdsourcing (includes information gathering, knowledge sharing, and citizen science)
        4. Social behavior / networking / sharing 
        5. Software development/design 
        6. Business and Management 
        7. Ecological / environmental behavior 
        8. eCommerce / eServices 
        9. Software engineering 
        10. Marketing / Consumer behavior 
        11. Citizen / public engagement / activity 
        12. Entertainment (includes gaming, watching TV, media capturing) 
        13. Innovation 
        14. Transportation and Mobility 
        15. Culture and Tourism 
        16. Architecture
        17. Communication 
        18. Emergency planning 
        19. Politics 
        20. Welfare / city / human / public services 
        21. Work 
        22. Theory 
        
        In this section, we ask
        designers to identify the possible application domain. i.e. Application
        of the software for promoting environmental behaviors. <br/> <br/>
        </div>
        
        <div id="aim">
        <h1 className="font-bold">
        1.2 Aim </h1>
        
        This model describes a top-down design. The development starts from the
        identification of the final purpose. Hence, in this section, we ask
        designers to list the aims of the future software. i.e. The aim of the
        software is to promote behaviors to reduce pollution and respect nature.<br/> <br/>
        </div> <div id="behaviors">
        <h1 className="font-bold">
        1.3 Behaviors to be encouraged </h1>
         
        At the same time, it is essential to
        focus on the different behaviors we want to encourage and on the
        different behaviors we want users to avoid to reach the goal. Thus, we
        ask designers to list the possible behaviors that have to be encouraged
        and which ones should be avoided to reach the goal. i.e. Users are
        encouraged to participate actively and continuously. We want users to
        use thoughtful approaches, avoiding trial and error methods.<br/> <br/>
        </div> <div id="target">
        <h1 className="font-bold">
        1.4 Target </h1>
        
        user At the beginning of the design, it’s essential to have in mind the
        target user. In this way, it is possible to think about motivational
        needs and issues concerning different users. In this part, we ask
        designers to list all the possible target users, reporting all the
        relevant information (age range, specific categories, etc). i.e. Middle
        school and high school students. <br/> <br/>
        </div> <div id="technology">
        <h1 className="font-bold">
        2 Technology </h1>
         
        At this point, the selection of the technology we want to use is closely related to the
        selection of game mechanics, dynamics, and gamification elements. In
        this section, designers should list hardware, software, input and output
        devices, and any other technological component is involved in the
        software development. i.e. The software will be developed for computers
        (Windows, Linux, and MacOs). The used engine will be Unity2D. Text input
        devices will be mouse and keyboards. <br/> <br/>
        </div> <div id="core">
        <h1 className="font-bold">
        3 Core </h1>
         
        The core part refers to the center of the software design. It consists of the description of the
        game behavior using game mechanics, game progression, game rules, and
        its graphical representation through the game loop, the description of
        gamification elements used, and feedback choices. <br/> <br/>
        </div> <div id="gamebehavior">
        <h1 className="font-bold">
        3.1 Game behavior  </h1>
        
        The game behavior section contains the description of game rules, game
        mechanics, game progression, and the game loop. <br/> <br/>
        </div> <div id="gamerules">
        <h1 className="font-bold">
        3.1.1 Game rules </h1>
         
        Rules define how the game should be played, and how a player can win or not
        (Salen and Zimmerman, 2003). In this part, designers should define the
        game rules, highlighting which part of them refers to core and secondary
        mechanics, and game progression. Then, game rules should be graphically
        represented in the game loop. i.e. Environmental game rules: 
        1. Players have to answer questions about positive behaviors towards the environment by choosing one of 4 different options. 
        2. Right answers give 10 points. Wrong answers subtract 5 points. 
        3. Obtained points are added to the existing ones 
        4. Answering within a certain time gives bonus points. 
        5. Players can use bonus points to buy one-time power-ups in the in-game shop. 
        6. One-time power-ups help players by providing useful information for the selected question. 
        7. Repetition of the learned behaviors in a real context gives an extra 50 points. 
        8. After 150 points, players level up. 
        9. The difficulty of the questions is related to the players’ level. 
        10. Players &apos; score is shown in a level-locked leaderboard.<br/> <br/>
        </div> <div id="mechanics">
        <h1 className="font-bold">
        3.1.2 Game mechanics </h1>
        
        Rules and how users can
        act within them are described through the game mechanics (Schell, 2014).
        Mechanics can be divided into core mechanics and secondary mechanics.
        Core mechanics act as the essential activity moment by moment of the
        user; instead, secondary mechanics are types of mechanics that are
        available occasionally or that exist only in the interaction with the
        core ones. i.e. Players have to answer questions about positive
        behaviors towards the environment by choosing one of 4 different
        options. Right answers give 10 points. Wrong answers subtract 5 points
        (core mechanics) Answering within a certain time gives bonus points.
        Players can use bonus points to buy one-time power-ups (secondary
        mechanics). <br/> <br/>
        </div> <div id="progression">
        <h1 className="font-bold">
        3.1.3 Game progression </h1>
         The game progression is composed by a
        set of game mechanics and is used to define how the game evolves, in
        particular how the players move forward in the game. Game progression is
        defined within the rules. i.e. After 150 points, players level up. The
        difficulty of the questions is related to the players’ level
        (progression mechanics). <br/> <br/>
        </div> <div id="gamerules">
        <h1 className="font-bold">
        3.1.4 Overall game rules representation </h1>
         
        In this section, we present a simple example of game rules representation,
        taking into account game mechanics and progression. i.e. 
        1. Players have to answer questions about positive behaviors towards the environment by
        choosing one of 4 different options (core mechanics). 
        2. Right answers give 10 points. Wrong answers subtract 5 points (core mechanics). 
        3. Obtained points are added to the existing ones (secondary mechanics). 
        4. Answering within a certain time gives bonus points (secondary
        mechanics). 
        5. Players can use bonus points to buy one-time power-ups in the in-game shop (secondary mechanics). 
        6. One-time power-ups help players by providing useful information for the selected question (secondary mechanics). 
        7. Repetition of the learned behaviors in a real context gives an extra 50 points (core mechanics). 
        8. After 150 points, players level up (progression mechanics). 
        9. The difficulty of the questions is related to the players’ level (progression mechanics). 
        10. Players&apos; score is shown in a level-locked leaderboard (secondary mechanics).<br/> <br/>
        </div> <div id="gameloop">
        <h1 className="font-bold">
        3.2 Game Loop </h1>
        
        The game loop is a graphical representation of
        game rules. It describes recurrent player activities and the mechanics
        that make them possible. Game loops can be planned according to
        different ways: (1) an overall game loop diagram, (2) a game loop
        diagram for each recurrent component. Figure 2 shows an overall game
        loop diagram. <br/> <br/>
        
        <div className="justify-center items-center flex"><Image
              loader={figure2}
              src="image-src"
              alt="GamiDoc"
              width={1202/2}
              height={784/2}
 
            /></div>
        </div> <div >
        <h1 className="font-bold">
        3.3 Game </h1>
        
        Dynamics With regards to Game Dynamics, there is not a unique
        definition. Some authors suggest that game dynamics are interactions
        between users and mechanics or other game elements, hence different
        patterns and behavioral strategies that are more complex than the sum of
        their parts. Thus, most of a game is experienced through its dynamics
        instead of its mechanics (Salen and Zimmerman, 2003). Other authors
        suggest that the dynamics are user replies to the mechanics (Marczewski,
        2013). According to Bohyum (2014), dynamics are seen by developers as
        game design principles for the interaction between users and mechanics.
        Anyway, a complete definition of dynamics is not possible, due to its
        complexity. Hence, dynamics should be considered as predictable runtime
        behaviors that emerge from the interaction between users and mechanics
        (Junior and Silva, 2021). Overall, dynamics can’t be fully defined
        during the design phase, but they will emerge after a certain number of
        runs.During the design phase, it is possible to define some dynamics
        that will possibly emerge in order to have more control over the
        process. Moreover, we suggest integrating a memorization system to track
        user actions and progress. These data should be analyzed to understand
        and modify mechanics and rules. <br/> <br/>
        
        </div> <div id="gamificationelement">
        <h1 className="font-bold">
        3.4 Gamification Elements </h1>
         To create the
        gamification part, we rely on the gamification elements. Several
        taxonomies try to identify what are the gamification elements and what
        is their division (Koivisto e Hamari, 2019; Toda et al., 2019). We base
        our model on the work of Koivisto and Hamari (2019): in their survey,
        they identify 47 different gamification elements, divided according to
        their type into 5 categories:
        Achievements / Progression: points, XP,
        badge, achievements, leaderboard, timer, challenges, quests, missions,
        tasks, medals, trophies, ranking, levels, status bar, progress, skill
        tree, quizzes, questions, speed, increasing difficulty. 
        Social:
        cooperation, competition, peer-rating, multiplayer, social network
        features, teams, customization. 
        Immersion: avatar, character,
        storytelling, narrative, narration, virtual identity, dialogues, theme,
        virtual world, game world, in-game rewards, role play. 
        Real-world:
        external reward, external interactive items, financial reward, motion
        tracking, physical card, physical playboard, physical dice, location
        data, physical objects as game resources. 
        Miscellaneous: penalties, full game, virtual currency, virtual helpers, cues, notification, reminders,
        retries, health, HP, onboarding, adaptive difficulty, warnings, virtual
        pets, game slogan, funny movies, virtual object as augmented reality,
        suggestions. <br/> <br/>
        </div> <div id="feedback">
        <h1 className="font-bold">
       3.5 Feedback  </h1>
         
        In addition to these, we decided to emphasize
        feedback, because they have a crucial significance within some domains
        (i.e. learning environment), placing them in a separated category than
        the gamification elements, as assumed by Koivisto and Hamari. In this
        way, we want to give more weight to the different ways in which the
        result of different exercises or game components is reported to users. <br/> <br/>
        </div> <div id="personalization">
        <h1 className="font-bold">
        4 Personalization </h1>
         
        All the gamification elements are picked out based on
        purposes and behaviors to be encouraged, mechanics and dynamics, and
        optionally based on the user&apos;s individual differences. In literature,
        there are several elements to identify any differences between users
        (Bartle et al., 1996; Caillois, 2001; Kotsopoulos et al., 2018; Manero
        et al., 2016; Nacke et al., 2011; Tondello et al., 2016). In this model,
        it’s possible to personalize user experience through the selection of a
        game profile based on the HEXAD gaming scale (Tondello et al., 2016) and
        feedback preferences. When personalization elements are applied, it’s
        important to recall that these individual preferences for the
        gamification elements are inconstant and they can change during the game
        (Santos et al., 2021). It is useful to use an online control procedure.<br/> <br/>
        </div> <div id="game">
        <h1 className="font-bold">
        5 Game </h1>
         
        Aesthetics The aesthetics component is a crucial aspect in
        designing gamified software: aesthetics has a direct relationship with
        the users’ experience: the more beautiful the aesthetic part is, the
        more interesting and compelling the users will find it. The aesthetic
        part must be taken into account to enhance emotional and subjective
        responses. This leads to better levels of motivation and engagement
        (Schall, 2007). <br/> <br/>
        
        </div> 
      </div>
      
      </div>
      <Footer />
    </div>
  );
}
