import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from '../Components/Navbar';

const useStyles = makeStyles((theme) => ({
  singleCards: {
    width: "90%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
      marginBottom: theme.spacing(4)
    },
    margin: theme.spacing(4)
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }
}));

function Blogs() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.cards}>
        <Card className={classes.singleCards}>
          <CardContent>
            <Typography variant="h6">
              Blog 1
            </Typography>
            <hr></hr>
            
            <Typography variant="p">
            In today’s world, we have heard about PCO/PCOS/PCOD, at least once in our lives. PCO or PCOD or PCOS is one of the most commonly searched women health topics. Polycystic Ovarian Syndrome, also known as PCOS, is an extremely common hormonal disorder. In India, almost two in every ten females suffer from PCOS. Fairly enough, PCOS is referred to as the new gynecological epidemic. It is evident that awareness of PCOS or PCOD is increasing among the masses, But are we actually aware of this disease?

INTRODUCTION:
PCO- Polycystic Ovary or PCOS- Polycystic Ovarian Syndrome or PCOD- Polycystic ovarian disease are one and the same thing on a primary level. When disease is just limited to the ovaries its called PCO or Polycystic Ovary, but when it starts showing its effect on other body-parts in terms of hypertension, high blood sugar, obesity, sleep apnea and many more then it is called as PCOS or Polycystic Ovarian Syndrome. 
50% of PCOS patients go undiagnosed. 50% of PCOS patients are at high risk of type2 diabetes. These are very alarming statistics and we need to understand PCOS and treat the disease well!

SYMPTOMS:
Certain symptoms of PCOS are well-heard of, let’s take a deeper look into these:
IRREGULAR PERIOD CYCLE: This is one of the major symptoms of PCO. Patients might experience irregular periods, delayed periods or early periods, scanty periods or prolonged periods.
WEIGHT MANAGEMENT PROBLEMS: Patients finding difficulty in gaining or losing weight. This signifies male pattern hormone excess in their body
SIGNS OF MALE PATTERN HORMONE EXCESS: Excess facial hair, scalp hair loss, increased body hair, more fat accumulation near the stomach, husky voice, acne.
INFERTILITY: Some of the females suffering from PCO are not able to conceive naturally.
SLEEP DISTURBANCES: Some patients find trouble falling asleep at night. They might show symptoms of sleep apnea. They find it difficult to sleep at times. They might wake up in the middle of the night and might face day-time sleepiness. 
MOOD SWINGS: Studies show that females having PCO also show signs of mood swings, anxiety, depression.


Females showing any 2 or 3 of the symptoms should get in touch with their Gynecologist. Early identification of PCO along with right knowledge can decrease the risk of many other problems.

CAUSES:
PCO is a lifestyle disorder. Knowing the causes of PCO and prevention of it can reduce the chances of risks.
 
INSULIN RESISTANCE: The main culprit among all causes is Insulin resistance. Insulin is a hormone secreted by the pancreas. The purpose of insulin is to pick glucose from the blood and use it in the form of energy in the various parts of the body. 
In pco patients, somehow insulin is not able to do its job, the cells are not able to pick the glucose from the blood. In compensation to this, the body produces more and more insulin which leads to high insulin levels in the body. These high insulin levels then in turn stimulate the ovaries to become bulkier and produce abnormal hormones, leading to these problems in the body.
SEDENTARY LIFESTYLE: Humans were not supposed to have a sedentary lifestyle, having an active lifestyle with at least 30 minutes of movement or 150 min of workout per week is essential for a human body in general.
DIETS: One of the important factors is food. In today’s world people eat food to satisfy their taste buds, not their nutritional requirement.
STRESS: Stress plays an important role in the period cycle. Great amount of stress can also be one of the reasons for delayed periods.
SLEEP CYCLE: As we all know that PCO is a hormonal issue. We should know that hormones are regulated by our body cycle. 8 hours of sleep plays an important role in the well-being of a person.

            </Typography>

            
          </CardContent>

          

        </Card>
        <Card className={classes.singleCards}>
          <CardContent>
            <Typography variant="h6">
              Blog 2
            </Typography>
            <hr></hr>
            <Typography variant="body2">
            PREVENTIONAL STEPS/LIFESTYLE CHANGES:


DIET: It is the entire approach and the philosophy around diet, which is important to achieve good health. Once you learn what to eat, how much to eat, when to eat, how to cook, the food starts to work for you . So think long term, invest in learning the philosophy around the food, not just a single diet.  As they say, "Eat your food as medicine otherwise, you will have to eat medicines as food". 
EXERCISE: Food and exercise go hand in hand. Being physically active is the best thing you can do for reversing PCOD.  It keeps your body strong and mind happy and resilient. Exercise can be in any form, either yoga or high intensity interval training or cardio- anything that you find sustainable in the long term.
SLEEP: We already know that 30% of PCOD patients have difficulties in sleeping. It can either be sleeping problems that cause PCOD or PCOD that causes sleeping problems.  A good night's sleep is now scientifically proven to improve endocrine function, especially PCOD. We should not compromise our sleep and work consciously towards improving the sleep quality.

            </Typography>

          </CardContent>

        

        </Card>
        <Card className={classes.singleCards}>
          <CardContent>
            <Typography variant="h6">
              Blog 3
            </Typography>
            <hr></hr>
            <Typography variant="body2">
            Talking about FIRST PERIODS, it might come as a surprise to someone, especially those who are not addressed with a proper period talk.
Periods are a sign of the end of puberty. It is the first step of womanhood. 

WHAT IS A PERIOD?
Period is the release of blood and tissues from a female’s uterus, out through the vagina. This process is called menstruation.

WHAT CAUSES PERIODS?
A period happens because of hormonal changes in the body. Hormones are chemical messengers. The ovaries release the female hormones estrogen and progesterone  These hormones cause the lining of the uterus (or womb) to build up.
Every month a woman's body goes through in preparation for the possibility of pregnancy. If there is no fertilized egg, the lining breaks down and bleeds. If the egg is fertilized by a sperm cell, it attaches to the wall of the uterus, where over time it develops into a baby. If the egg is not fertilized, the uterus lining breaks down and bleeds, causing a period.
Then the same process happens all over again. This is also called the menstrual cycle.


WHEN DO MOST GIRLS GET THEIR PERIOD?
Most girls start their periods when they are 12. They can get from age of 10 to 15 years. Every girl's body has its own schedule.

HOW LONG DOES PERIOD LAST?
Periods usually last about 5 days. But a period can be shorter or last longer depending on person to person and their menstrual cycle.

Should I Use a Pad, Tampon, or Menstrual Cup?
Females have choices to deal with period blood. You may need to experiment a bit to find which works best for you. Some girls use only one method and others switch between different methods.

Most girls use pads when they first get their period. Pads are made of cotton and come in lots of different sizes and shapes. They have sticky strips that attach to the underwear.
Many girls find tampons more convenient than pads, especially when playing sports or swimming. A tampon is a cotton plug that a girl puts into her vagina. Most tampons come with an applicator that guides the tampon into place. The tampon absorbs the blood. Don't leave a tampon in for more than 8 hours because this can increase your risk of a serious infection called toxic shock syndrome.
Some girls prefer a menstrual cup. Most menstrual cups are made of silicone. To use a menstrual cup, a girl inserts it into her vagina. It holds the blood until she empties it.

            </Typography>

          </CardContent>

        

        </Card>
      </div>
    </div>
  )
}

export default Blogs;