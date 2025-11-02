import svgPaths from "./imports/svg-9uzcopkvuf";
import decorativeSvgPaths from "./imports/svg-0egnuf5q93";
import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ChatWidget from "./components/ChatWidget";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";
import blog1Image from "./assets/blog/Weight loss blog 1.webp";
import blog2Image from "./assets/blog/Energy blog 2.webp";
import blog3Image from "./assets/blog/Blog Functional Medicine 3.webp";
import blog4Image from "./assets/blog/metabolic blog 4.jpg";
import blog5Image from "./assets/blog/blog 5.jpg";
import blog6Image from "./assets/blog/sleep blog 6.jpg";
import blog7Image from "./assets/blog/old blog 7.jpg";
import blog8Image from "./assets/blog/Metabolism blog 8.jpg";
import blog9Image from "./assets/blog/Plate blog 9.jpg";
import blog10Image from "./assets/blog/Aging blog 10.jpg";
import blog11Image from "./assets/blog/Fast food Blog 11.webp";
import blog12Image from "./assets/blog/Stress job Blog 12.jpg";
import blog13Image from "./assets/blog/Alzheimer Blog 13.jpg";
import blog14Image from "./assets/blog/Gut Health Blog 14.webp";
import blog15Image from "./assets/blog/Tea Blog 15.jpg";
import blog16Image from "./assets/blog/10 Supplements Blog 16.jpg";
import blog17Image from "./assets/blog/Hormone Disrupting Additives and Your Hormones Blog 17.jpg";
import blog18Image from "./assets/blog/6 Ways to Relieve PMS Naturally Blog 18.jpg";
import blog19Image from "./assets/blog/5 Ways to Boost Your Hormones Naturally Blog 19.jpg";
import blog20Image from "./assets/blog/5-signs you have hormone imbalance Blog 20.jpg";
import blog21Image from "./assets/blog/Infertility Blog 21.jpg";
import blog22Image from "./assets/blog/Low Lobido Blog 22.jpg";
import blog23Image from "./assets/blog/Thyroid Blog 23.jpg";
import blog24Image from "./assets/blog/Constipation Blog 24.jpg";
import blog25Image from "./assets/blog/Brain Fog Blog 25.jpg";
import blog26Image from "./assets/blog/Anxiety Blog 26.jpg";
import blog27Image from "./assets/blog/Depression Blog 27.jpg";
import blog28Image from "./assets/blog/Insomnia Blog 28.jpg";
import blog29Image from "./assets/blog/Osteoarthritis Blog 29.jpg";
import blog30Image from "./assets/blog/Leaky Gut Blog 30.jpg";
import blog31Image from "./assets/blog/Endometriosis Blog 31.jpg";
import blog32Image from "./assets/blog/Acne Blog 32.jpg";
import blog33Image from "./assets/blog/Chronic Fatigue pic Blog 33.jpg";
import blog34Image from "./assets/blog/PMS Pic Blog 34.jpg";
import blog35Image from "./assets/blog/Weigth loss Pic Blog 35.jpg";
import blog36Image from "./assets/blog/PCOS Pathway Blog 36.jpg";
import blog37Image from "./assets/blog/Age 50 Blog 37.jpg";
import blog38Image from "./assets/blog/WEight gain Blog 38.jpg";
import blog39Image from "./assets/blog/Arthrotis Blog 39.jpg";
import blog40Image from "./assets/blog/belly fat Blog 40.jpg";
import blog41Image from "./assets/blog/Chornic fatugue Blog 41.jpg";

interface BlogProps {
  navigateTo: (page: "home" | "services" | "about" | "faq" | "contact" | "blog") => void;
  onBlogClick: (blogId: number) => void;
}

export default function Blog({ navigateTo, onBlogClick }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ["All", "Hormone Health", "Weight Loss", "Nutrition", "Lifestyle", "Mental Wellness"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(() => {
      // Observe all elements with scroll-animation classes
      const animatedElements = document.querySelectorAll('.scroll-animation, .scroll-animation-fade, .scroll-animation-left, .scroll-animation-right');
      animatedElements.forEach(el => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [selectedCategory]);

  const blogPosts = [
    {
      id: 1,
      title: "Keeping Up Your Energy While You Lose Weight",
      excerpt: "Being on a diet can zap your energy while your body adjusts to eating less. Shedding fat and excess pounds will ultimately put more zip in your step. Try these suggestions for beating fatigue while you cut back on calories.",
      category: "Weight Loss",
      author: "Megan Hormazdi, NP",
      date: "April 12, 2023",
      readTime: "6 min read",
      image: blog1Image,
      featured: true,
    },
    {
      id: 2,
      title: "8 Essential Secrets to Increasing Your Energy",
      excerpt: "Many of us seem to live hectic, busy, over-scheduled lives. The idea that you can increase your energy by making a few simple changes to some behaviors or by adding healthful choices and activities is quite attractive.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 12, 2023",
      readTime: "7 min read",
      image: blog2Image,
      featured: false,
    },
    {
      id: 3,
      title: "What Everyone Ought to Know About Functional Medicine",
      excerpt: "While a typical office visit often consists of finding a drug to match a disease, functional medicine addresses the underlying causes in order to maximize overall well-being. Learn more about this new approach and how you can benefit.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 12, 2023",
      readTime: "8 min read",
      image: blog3Image,
      featured: false,
    },
    {
      id: 4,
      title: "Your Complete Guide to Metabolic Syndrome",
      excerpt: "Metabolic syndrome affects as many as one out of every four people. It refers to a group of risk factors that increase the chances of heart attacks and diabetes. The good news is that lifestyle changes are usually an effective treatment.",
      category: "Nutrition",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog4Image,
      featured: false,
    },
    {
      id: 5,
      title: "A Startling Fact About MS and Women",
      excerpt: "Women are up to 3 times more likely than men to develop MS. As cases increase worldwide, it's important to know how MS could affect your life. Take a look at this quick guide to MS and how to live with it more comfortably.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog5Image,
      featured: false,
    },
    {
      id: 6,
      title: "How to Fall Asleep Faster and Better With These 6 Tips and Tricks",
      excerpt: "Do you have trouble falling asleep at night? If so, you're not alone—millions of people worldwide deal with insomnia and other sleep-related problems. The good news is that there are ways to fall asleep faster and better.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog6Image,
      featured: false,
    },
    {
      id: 7,
      title: "10 Anti-Aging Techniques",
      excerpt: "You can do yourself a great service by taking care of your mind and body as you grow older. When you take care of yourself, it slows the aging process and you can stay fit and alert well into your senior years.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog7Image,
      featured: false,
    },
    {
      id: 8,
      title: "Coping With An Aging Metabolism",
      excerpt: "If you think weight gain is inevitable as you get older, think again. Your metabolism does slow down, but exercising and eating nutritiously can keep you fit for life. Learn more about how your body changes and how you can keep it running more efficiently.",
      category: "Weight Loss",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog8Image,
      featured: false,
    },
    {
      id: 9,
      title: "Discover the Anti-Inflammation Way of Eating",
      excerpt: "Medicine isn't the only way to fight inflammation. Your diet plays an important role too. Learn more about the health consequences of chronic inflammation, and what you can do to stay healthy.",
      category: "Nutrition",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog9Image,
      featured: false,
    },
    {
      id: 10,
      title: "Essential Tips for Aging Well",
      excerpt: "Getting older takes a toll on the body, mind, and spirit. However, you can age well and stay happy by following simple advice from experts.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog10Image,
      featured: false,
    },
    {
      id: 11,
      title: "The Link Between Diet and Stress",
      excerpt: "Do you ever think about the fact that, if you ate differently, you might be better able to handle the stress in your life? No matter which way you look at it, stress and food are related. There are many things that you can do to help deal with your stress without resorting to food as your crutch.",
      category: "Mental Wellness",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog11Image,
      featured: false,
    },
    {
      id: 12,
      title: "Effective Ways to Cope With the Stress of a New Job",
      excerpt: "Starting a new job can be an exciting time, but it can also be a stressful experience with many new and unfamiliar aspects. Equip yourself with some tools that will provide you with ways to cope with the stress of the new job.",
      category: "Mental Wellness",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog12Image,
      featured: false,
    },
    {
      id: 13,
      title: "What Women Need to Know About Alzheimer's",
      excerpt: "Women are almost twice as likely as men to develop Alzheimer's. In fact, nearly two-thirds of Americans with Alzheimer's are women. There is no cure, but there are many things you can do to lower your risk or cope with your symptoms.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog13Image,
      featured: false,
    },
    {
      id: 14,
      title: "10 Tips to Heal Your Gut",
      excerpt: "You can't be much healthier than your gut is. You have more bacteria in your body than human cells, and these bacteria are pivotal to your overall health. What you choose to eat and drink has the greatest impact on the flora in your body.",
      category: "Nutrition",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog14Image,
      featured: false,
    },
    {
      id: 15,
      title: "Safely Detox Your Body Without Cleanses!",
      excerpt: "Cleanses can be a powerful way to detox your body, but it's not necessary to do liquid-only diets or green shakes to achieve results. You can detox without the typical cleanses by reducing certain foods and adding others to strengthen your health.",
      category: "Nutrition",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog9Image,
      featured: false,
    },
    {
      id: 16,
      title: "Does Tea Help You Lose Weight and Detoxify Your Body?",
      excerpt: "Weight loss and detox diets have been popular for decades. Some of the most popular products for detox and weight loss have been certain kinds of tea. But can you really lose weight and detoxify your body by drinking tea?",
      category: "Weight Loss",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "5 min read",
      image: blog15Image,
      featured: false,
    },
    {
      id: 17,
      title: "10 Supplements All Women Should Consider Taking for Good Health",
      excerpt: "The human body requires certain vitamins and minerals to function optimally. While a well-balanced diet can reduce the need for supplementation, supplements can be a valuable addition to a healthy diet.",
      category: "Nutrition",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog16Image,
      featured: false,
    },
    {
      id: 18,
      title: "Hormone Disrupting Additives and Your Hormones",
      excerpt: "Do you know how packaged food is harming your health and hormones? More than 3000 preservatives and additives are used in different foods. Research has proved that these additives are extremely harmful for our hormones and reproductive systems.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog17Image,
      featured: false,
    },
    {
      id: 19,
      title: "6 Ways to Relieve PMS Naturally",
      excerpt: "More than 70 percent of western women experience PMS every month. Symptoms include mood swings, sugar cravings, anxiety, headache, bloating, cramps, and difficulty sleeping. Here are the most effective practical tips to relieve these symptoms naturally.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog18Image,
      featured: false,
    },
    {
      id: 20,
      title: "5 Ways to Boost Your Hormones Naturally",
      excerpt: "Do you want to avoid the painful symptoms of PMS? Hormonal imbalance can impact normal body functioning and cause several undesirable symptoms. Boost the health of your endocrine system to attain and maintain a balanced hormonal state.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog19Image,
      featured: false,
    },
    {
      id: 21,
      title: "5 Signs You Have Hormone Imbalances",
      excerpt: "Balance is the key to live a happy life. Just like everything else, your body requires a balanced hormonal state. Only then can your organs function properly. Find out whether your hormones are actually out of balance.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "5 min read",
      image: blog20Image,
      featured: false,
    },
    {
      id: 22,
      title: "Unlock Your Fertility Potential: The Path to Healthy Female Reproduction",
      excerpt: "Female fertility is a complex process involving multiple physiological and hormonal changes. Infertility affects about 15% of reproductive-aged couples globally. Learn about common causes, risk factors, and when to seek evaluation.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "9 min read",
      image: blog21Image,
      featured: false,
    },
    {
      id: 23,
      title: "Revive Your Passion: Unlocking the Secrets to Boosting Female Libido",
      excerpt: "Low libido affects approximately 7% to 12% of females. While menopause is often associated with low libido, it can also be caused by depression, anxiety, thyroid disease, and certain medications. Learn several approaches to improve sexual function.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog22Image,
      featured: false,
    },
    {
      id: 24,
      title: "Thyroid Health: Lifestyle Recommendations and Dietary Tips for Optimal Functioning",
      excerpt: "Understanding and managing thyroid health is crucial for overall well-being. The thyroid gland plays a vital role in regulating numerous body functions, including metabolism, temperature regulation, and energy production.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog23Image,
      featured: false,
    },
    {
      id: 25,
      title: "Conquer Constipation: The Ultimate Guide to Bowel Training and Healthy Digestion",
      excerpt: "Constipation is a prevalent condition that affects millions of people worldwide. There are various layers to resolving constipation, and sometimes it is a simple fix, but often there are multiple contributing factors and potentially decades of negative habits.",
      category: "Nutrition",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog24Image,
      featured: false,
    },
    {
      id: 26,
      title: "Unlocking the Secrets to Optimal Brain Health: The Key Nutrients and Lifestyle Strategies",
      excerpt: "The brain is arguably the most important organ in the body, responsible for controlling all bodily functions. Supporting brain health through targeted nutrition and supplementation may serve as an assistive strategy against cognitive decline.",
      category: "Mental Wellness",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "9 min read",
      image: blog25Image,
      featured: false,
    },
    {
      id: 27,
      title: "Uncovering the Root Cause of Anxiety: A Comprehensive Guide to Supporting Mental-Emotional Wellness",
      excerpt: "Anxiety is a common mental health issue that affects millions of people worldwide. An integrated approach to mental-emotional wellness that considers factors such as diet, nutrient deficiencies, sleep habits, and psychological stress provides comprehensive care.",
      category: "Mental Wellness",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog26Image,
      featured: false,
    },
    {
      id: 28,
      title: "Feeding Your Mood: A Nutritional Approach to Beating Depression",
      excerpt: "Depression is a mental health condition that affects millions of people worldwide. Given the multifactorial nature of depression, an integrated care model that incorporates nutritional applications and lifestyle strategies can help support mental-emotional wellness.",
      category: "Mental Wellness",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog27Image,
      featured: false,
    },
    {
      id: 29,
      title: "Sleep Better, Live Better: A Comprehensive Guide to Improving Your Sleep Quality and Overall Health",
      excerpt: "Sleep is an essential aspect of our lives that plays a crucial role in maintaining overall health and wellbeing. Disrupted sleep patterns can have negative effects on various physiological functions, including concentration, memory, and cardiovascular function.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog28Image,
      featured: false,
    },
    {
      id: 30,
      title: "Say Goodbye to Joint Pain: The Ultimate Guide to Supporting Healthy Joints and Connective Tissues!",
      excerpt: "Osteoarthritis affects millions of Americans and is the leading cause of disability among adults. This clinical protocol is designed to support joint integrity and a healthy inflammatory response in connective tissues through diet and lifestyle interventions.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog29Image,
      featured: false,
    },
    {
      id: 31,
      title: "Unlocking the Hidden Cause of Chronic Health Issues: Understanding Intestinal Permeability and How to Heal Your Gut",
      excerpt: "Intestinal permeability, also known as 'leaky gut syndrome,' is a condition in which the lining of the intestines becomes more porous, allowing bacteria, toxins, and undigested food particles to pass through the gut wall and into the bloodstream.",
      category: "Nutrition",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog30Image,
      featured: false,
    },
    {
      id: 32,
      title: "Understanding Endometriosis: Symptoms, Diagnosis, and Therapeutic Diet and Lifestyle Interventions",
      excerpt: "Endometriosis is a chronic disorder that affects an estimated 1 in 10 reproductive-age individuals. It is a condition in which endometrial-like tissue is found outside the uterine cavity, leading to chronic pelvic pain, infertility, and other associated symptoms.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "9 min read",
      image: blog31Image,
      featured: false,
    },
    {
      id: 33,
      title: "Achieve Radiant Skin: Evidence-Based Approaches to Tackling Acne",
      excerpt: "Acne is a common skin condition that affects individuals of all ages, with the majority of cases occurring during adolescence. This clinical protocol discusses evidence-based lifestyle and dietary interventions for acne to support skin health and prevent flare-ups.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog32Image,
      featured: false,
    },
    {
      id: 34,
      title: "Combat Fatigue and Support Mitochondrial Energy Production",
      excerpt: "Chronic Fatigue Syndrome is a complex illness that affects millions of people worldwide. Research has shown that oxidative stress, inflammation, and mitochondrial dysfunction may play a role in its development.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog33Image,
      featured: false,
    },
    {
      id: 35,
      title: "Premenstrual Syndrome (PMS)",
      excerpt: "Premenstrual Syndrome affects a significant portion of females of reproductive age, with approximately 80% to 90% of menstruating individuals reporting experiencing at least one PMS symptom during their life.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "6 min read",
      image: blog34Image,
      featured: false,
    },
    {
      id: 36,
      title: "Managing Weight and Comorbidities",
      excerpt: "Excess weight is associated with a variety of comorbidities, including cardiovascular disease, type 2 diabetes, certain types of cancer, and other chronic health conditions. Healthy weight management is a critical component in mitigating chronic disease.",
      category: "Weight Loss",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "7 min read",
      image: blog35Image,
      featured: false,
    },
    {
      id: 37,
      title: "PCOS No More - Your Path to Hormonal Balance and Optimal Health",
      excerpt: "Polycystic Ovary Syndrome is a common reproductive disorder that affects millions of women in the United States alone. This condition is characterized by multiple comorbidities, including insulin resistance, which can increase the risk of developing type 2 diabetes.",
      category: "Hormone Health",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "9 min read",
      image: blog36Image,
      featured: false,
    },
    {
      id: 38,
      title: "9 Health Secrets for Women Over 50",
      excerpt: "As of 2020, life expectancy for women in the United States is 80.5 years. Taking care of your health can help you to celebrate more birthdays and increase the quality of your life. Discover health secrets that women over 50 need to know.",
      category: "Lifestyle",
      author: "Megan Hormazdi, NP",
      date: "April 09, 2023",
      readTime: "8 min read",
      image: blog37Image,
      featured: false,
    },
        {
          id: 39,
          title: "What Every Woman Ought to Know About Menopausal Weight Gain",
          excerpt: "Menopausal weight gain can have consequences more serious than outgrowing your favorite pair of jeans. Find out how middle age spread affects your body and what you can do about it.",
          category: "Hormone Health",
          author: "Megan Hormazdi, NP",
          date: "April 09, 2023",
          readTime: "6 min read",
          image: blog38Image,
          featured: false,
        },
        {
          id: 40,
          title: "New Help for Natural Arthritis Pain Relief",
          excerpt: "Any progress in natural pain relief is welcome news for millions of adults who struggle with arthritis. A recent study suggests that the spice turmeric may provide some relief.",
          category: "Lifestyle",
          author: "Megan Hormazdi, NP",
          date: "July 22, 2022",
          readTime: "5 min read",
          image: blog39Image,
          featured: false,
        },
        {
      id: 41,
      title: "The Surprising Truth about Losing Weight After 40",
      excerpt: "As you grow older, it often becomes more difficult to manage your weight. However, the reasons may be different than you think. A recent study challenges the conventional wisdom about metabolism across the lifespan.",
      category: "Weight Loss",
      author: "Megan Hormazdi, NP",
      date: "July 22, 2022",
      readTime: "6 min read",
      image: blog40Image,
          featured: false,
        },
        {
          id: 42,
          title: "New Help for Chronic Fatigue Syndrome",
          excerpt: "A new diagnostic tool for chronic fatigue syndrome may help clear up common misunderstandings among the public and even some doctors. That's good news if you're one of the many patients who are tired of being told that their symptoms are imaginary.",
          category: "Mental Wellness",
          author: "Megan Hormazdi, NP",
          date: "July 22, 2022",
          readTime: "7 min read",
          image: blog41Image,
          featured: false,
        },
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = selectedCategory === "All" ? filteredPosts.find(post => post.featured) : null;
  const regularPosts = selectedCategory === "All"
    ? filteredPosts.filter(post => !post.featured)
    : filteredPosts;

  // Debug logging
  console.log('Selected Category:', selectedCategory);
  console.log('Total Blog Posts:', blogPosts.length);
  console.log('Filtered Posts:', filteredPosts.length);
  console.log('Featured Post:', featuredPost?.title || 'None');
  console.log('Regular Posts:', regularPosts.length);

  return (
    <>
      <Helmet>
        <title>Blog | Hormone Health & Wellness Tips | Expert Advice</title>
        <meta name="description" content="Expert insights on hormone health, weight loss, nutrition & holistic wellness from integrative medicine specialist Megan Hormazdi, NP. Evidence-based tips." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/blog" />

        {/* Open Graph */}
        <meta property="og:title" content="Blog | Hormone Health & Wellness Tips | Expert Advice" />
        <meta property="og:description" content="Expert insights on hormone health, weight loss, nutrition & holistic wellness from integrative medicine specialist Megan Hormazdi, NP. Evidence-based tips." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/blog" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Hormone Health & Wellness Tips | Expert Advice" />
        <meta name="twitter:description" content="Expert insights on hormone health, weight loss, nutrition & holistic wellness from integrative medicine specialist Megan Hormazdi, NP. Evidence-based tips." />
        <meta name="twitter:image" content="https://www.yourintegrativehealth.com/og-image.png" />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Blog", url: "/blog" }
          ]))}
        </script>
      </Helmet>
      <style>{`
        .scroll-animation {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animation-fade {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        .scroll-animation-fade.animate-in {
          opacity: 1;
        }
        .scroll-animation-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-animation-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-animation-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-animation-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .hover-glow {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(97, 169, 78, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
      <div className="relative min-h-screen bg-white overflow-x-hidden">
        {/* Header/Navigation */}
        <header className="bg-white h-[100px] sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          {/* Logo */}
          <button
            onClick={() => navigateTo("home")}
            className="h-[60px] md:h-[83px] w-[130px] md:w-[172px] flex-shrink-0"
            aria-label="Return to homepage"
          >
            <div className="h-full w-full overflow-hidden relative">
              <img
                alt="Your Integrative Health - Functional Medicine Clinic logo"
                className="absolute h-full left-[-34.47%] max-w-none top-0 w-[169.9%]"
                src={img65637454D738DColor3}
              />
            </div>
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex gap-12 xl:gap-[87px] items-center font-['Poppins'] text-[18px] xl:text-[20px]">
            <button
              onClick={() => navigateTo("services")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              Services
            </button>
            <span className="text-[#61a94e]">Blog</span>
            <button
              onClick={() => navigateTo("contact")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              Contacts
            </button>
            <button
              onClick={() => navigateTo("about")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigateTo("faq")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Get Started Button */}
          <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center justify-center bg-[#61a94e] text-white px-5 xl:px-6 py-2.5 rounded-[10px] font-['Poppins'] font-medium text-[18px] xl:text-[20px] hover:bg-[#549440] transition-colors flex-shrink-0">
            Get Started
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#61a94e] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-blog"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "Blog", isActive: true }
        ]}
        navigateTo={navigateTo}
      />

      {isMobileMenuOpen && (
        <div id="mobile-menu-blog" className="lg:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col py-4 px-4 md:px-8">
            <button onClick={() => { navigateTo("services"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Services</button>
            <span className="py-3 px-4 text-[#61a94e] font-['Poppins'] text-[16px] font-semibold">Blog</span>
            <button onClick={() => { navigateTo("contact"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Contacts</button>
            <button onClick={() => { navigateTo("about"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">About</button>
            <button onClick={() => { navigateTo("faq"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">FAQ</button>
            <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="mt-4 bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors text-center">Get Started</a>
          </nav>
        </div>
      )}

      <main>
      {/* Hero Section with Gradient Banner */}
      <section className="relative w-full min-h-[400px] md:min-h-[450px] lg:h-[500px] overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1584 500"
          >
            <rect
              width="1584"
              height="500"
              fill="url(#paint0_linear_blog_hero)"
              opacity="0.93"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_blog_hero"
                x1="2141"
                x2="2155.18"
                y1="1118"
                y2="-51.3335"
              >
                <stop stopColor="white" />
                <stop offset="0.383068" stopColor="#61A94E" stopOpacity="0.6" />
                <stop offset="0.75" stopColor="#236189" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute left-[-5%] top-[20%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rotate-[200deg] opacity-30 z-[1]">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-hero-left)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-hero-left"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-[-5%] bottom-[20%] w-[200px] h-[200px] md:w-[280px] md:h-[280px] rotate-[-5deg] opacity-30 z-[1]">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-hero-right)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-hero-right"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 h-full relative z-10 flex flex-col justify-center py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-['Poppins'] font-bold text-[36px] md:text-[48px] lg:text-[56px] text-white mb-6 leading-tight">
              Health & Wellness Blog
            </h1>
            <p className="font-['Poppins'] text-[18px] md:text-[20px] lg:text-[24px] text-white leading-relaxed">
              Expert insights on hormone health, weight loss, nutrition, and integrative wellness from Megan Hormazdi, NP.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section - Only show when "All" is selected */}
      {featuredPost && selectedCategory === "All" && (
        <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
          {/* Decorative Shapes */}
          <div className="absolute right-0 top-[20%] w-[80px] md:w-[160px] lg:w-[280px] h-[190px] md:h-[380px] lg:h-[665px] rotate-[345deg] opacity-30 -mr-8 md:-mr-16 lg:-mr-24 z-0">
            <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
              <path
                d={decorativeSvgPaths.p1f5cf580}
                fill="url(#gradient-featured-right)"
                opacity="0.4"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="gradient-featured-right"
                  x1="22.685"
                  x2="405.188"
                  y1="106.176"
                  y2="299.044"
                >
                  <stop stopColor="#0470B7" />
                  <stop offset="0.25" stopColor="#1D8093" />
                  <stop offset="0.58" stopColor="#3C9468" />
                  <stop offset="0.84" stopColor="#4FA04E" />
                  <stop offset="1" stopColor="#56A544" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 scroll-animation">
                <span className="inline-block bg-[#61a94e] text-white px-4 py-2 rounded-full font-['Poppins'] font-medium text-[14px] mb-4">
                  Featured Article
                </span>
                <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-[#236189]">
                  Latest Insights
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Image */}
                <div className="relative rounded-[20px] overflow-hidden shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] h-[300px] md:h-[400px] lg:h-[450px] scroll-animation-left">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover my-[0px] m-[0px]"
                    fetchpriority="high"
                    loading="eager"
                    width={600}
                    height={400}
                  />
                </div>

              {/* Content */}
              <div className="flex flex-col justify-center scroll-animation-right">
                <div className="mb-4">
                  <span className="inline-block bg-[#236189]/10 text-[#236189] px-3 py-1 rounded-full font-['Poppins'] text-[14px] mb-3">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="font-['Poppins'] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-[#236189] mb-4">
                  {featuredPost.title}
                </h3>
                <p className="font-['Poppins'] text-[17px] md:text-[18px] text-[#565d6d] leading-[30px] mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[#565d6d] font-['Poppins'] text-[14px] mb-6">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onBlogClick(featuredPost.id);
                  }}
                  className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-8 py-3 rounded-[10px] font-['Poppins'] font-medium text-[18px] hover:bg-[#549440] transition-colors flex items-center justify-center w-fit"
                >
                  Read Article
                </button>
              </div>
            </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white to-[#f6faf5] relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute left-0 top-[30%] w-[80px] md:w-[160px] lg:w-[280px] h-[190px] md:h-[380px] lg:h-[665px] rotate-[165deg] opacity-30 -ml-8 md:-ml-16 lg:-ml-24 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-posts-left)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-posts-left"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Category Filter */}
          <div className="mb-12 scroll-animation">
            <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-[#236189] mb-8 text-center">
              All Articles
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-['Poppins'] font-medium text-[15px] transition-all ${
                    selectedCategory === category
                      ? "bg-[#61a94e] text-white shadow-[0px_4px_12px_0px_rgba(97,169,78,0.3)]"
                      : "bg-white text-[#565d6d] border border-gray-200 hover:border-[#61a94e] hover:text-[#61a94e]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.length === 0 && !featuredPost ? (
              <div className="col-span-full text-center py-16">
                <p className="font-['Poppins'] text-[20px] text-[#565d6d] mb-4">
                  No articles found in this category.
                </p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors"
                >
                  View All Articles
                </button>
              </div>
            ) : (
              regularPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onBlogClick(post.id);
                }}
                className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] overflow-hidden transition-all hover:shadow-[0px_8px_30px_0px_rgba(97,169,78,0.2)] hover:-translate-y-1 scroll-animation cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={220}
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/95 text-[#236189] px-3 py-1 rounded-full font-['Poppins'] text-[13px] font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-['Poppins'] font-bold text-[20px] md:text-[22px] text-[#236189] mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="font-['Poppins'] text-[15px] text-[#565d6d] leading-[24px] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col gap-3 text-[#565d6d] font-['Poppins'] text-[13px] mb-4">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#61a94e]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#61a94e]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      onBlogClick(post.id);
                    }}
                    className="text-[#61a94e] font-['Poppins'] font-medium text-[15px] hover:text-[#549440] transition-colors flex items-center gap-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </article>
              ))
            )}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-[#61a94e] text-[#61a94e] px-8 md:px-12 py-3 rounded-[10px] font-['Poppins'] font-medium text-[18px] hover:bg-[#61a94e] hover:text-white transition-colors flex items-center justify-center mx-auto">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute right-[-3%] top-[30%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] rotate-[315deg] opacity-20 z-0">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-newsletter-right)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-newsletter-right"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#f6faf5] to-[#f3f8fc] rounded-[20px] p-8 md:p-12 text-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] scroll-animation">
              <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-[#236189] mb-8">
                Stay Informed
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[15px]"
                />
                <button className="bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors flex items-center justify-center whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="font-['Poppins'] text-[13px] text-[#565d6d] mt-4">
                Join 500+ women on their wellness journey. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 md:py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Logo Column */}
            <div>
              <div className="h-[60px] md:h-[76px] w-[125px] md:w-[157px] mb-6">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    alt="Your Integrative Health - Functional Medicine Clinic logo"
                    className="absolute h-full left-[-34.47%] max-w-none top-0 w-[169.9%]"
                    src={img65637454D738DColor3}
                  />
                </div>
              </div>
              <p className="font-['Poppins'] text-[16px] md:text-[18px] text-[#6f6c90] leading-[26px] md:leading-[30px] mb-6 max-w-[310px]">
                Empowering you to achieve optimal health through personalized integrative care and holistic wellness solutions.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-[22px] items-center">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCgJV1_oWfp7QpMeIksq3JXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[21px] h-[15px]" viewBox="0 0 21 15" fill="currentColor">
                    <path d="M20.533 2.351a2.625 2.625 0 00-1.846-1.858C17.062 0 10.5 0 10.5 0S3.938 0 2.313.493A2.625 2.625 0 00.467 2.351C0 3.984 0 7.402 0 7.402s0 3.418.467 5.051a2.625 2.625 0 001.846 1.858C3.938 15 10.5 15 10.5 15s6.562 0 8.187-.689a2.625 2.625 0 001.846-1.858c.467-1.633.467-5.051.467-5.051s0-3.418-.467-5.051zM8.4 10.548V4.256l5.467 3.146L8.4 10.548z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@mhormazdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[17px] h-[19px]" viewBox="0 0 17 19" fill="currentColor">
                    <path d="M14.59 4.69a4.83 4.83 0 01-3.77-4.25V0h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V7.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 000 18.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/Your-Integrative-Health/61579347443116/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[11px] h-[19px]" viewBox="0 0 11 19" fill="currentColor">
                    <path d="M7.31345 18.3945V10.1839H10.2081L10.6415 6.98403H7.31337V4.94106C7.31337 4.01463 7.58355 3.38332 8.97899 3.38332L10.7587 3.38252V0.520603C10.4509 0.481677 9.39435 0.394531 8.16537 0.394531C5.59935 0.394531 3.84261 1.88571 3.84261 4.62426V6.98403H0.940491V10.1839H3.84261V18.3945H7.31345V18.3945Z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/meganhormazdi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="currentColor">
                    <path d="M9.5 1.711c2.537 0 2.838.01 3.84.055.927.043 1.43.197 1.764.328.444.172.76.378 1.093.71.331.332.538.649.71 1.093.131.334.285.837.328 1.764.045 1.002.055 1.303.055 3.84s-.01 2.838-.055 3.84c-.043.927-.197 1.43-.328 1.764a2.94 2.94 0 01-.71 1.093 2.94 2.94 0 01-1.093.71c-.334.131-.837.285-1.764.328-1.002.045-1.303.055-3.84.055s-2.838-.01-3.84-.055c-.927-.043-1.43-.197-1.764-.328a2.94 2.94 0 01-1.093-.71 2.94 2.94 0 01-.71-1.093c-.131-.334-.285-.837-.328-1.764-.045-1.002-.055-1.303-.055-3.84s.01-2.838.055-3.84c.043-.927.197-1.43.328-1.764.172-.444.379-.761.71-1.093a2.94 2.94 0 011.093-.71c.334-.131.837-.285 1.764-.328 1.002-.045 1.303-.055 3.84-.055zM9.5 0C6.926 0 6.602.011 5.588.057 4.577.103 3.888.263 3.286.495a4.652 4.652 0 00-1.683 1.096A4.652 4.652 0 00.507 3.274C.275 3.876.115 4.565.069 5.576.023 6.59.012 6.914.012 9.488c0 2.574.011 2.898.057 3.912.046 1.011.206 1.7.438 2.302a4.652 4.652 0 001.096 1.683 4.652 4.652 0 001.683 1.096c.602.232 1.291.392 2.302.438 1.014.046 1.338.057 3.912.057s2.898-.011 3.912-.057c1.011-.046 1.7-.206 2.302-.438a4.652 4.652 0 001.683-1.096 4.652 4.652 0 001.096-1.683c.232-.602.392-1.291.438-2.302.046-1.014.057-1.338.057-3.912s-.011-2.898-.057-3.912c-.046-1.011-.206-1.7-.438-2.302a4.652 4.652 0 00-1.096-1.683A4.652 4.652 0 0015.702.495C15.1.263 14.411.103 13.4.057 12.386.011 12.062 0 9.488 0z" />
                    <path d="M9.5 4.622a4.866 4.866 0 100 9.732 4.866 4.866 0 000-9.732zm0 8.022a3.156 3.156 0 110-6.312 3.156 3.156 0 010 6.312zM15.692 4.424a1.137 1.137 0 11-2.274 0 1.137 1.137 0 012.274 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-black mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 font-['Poppins'] text-[#6f6c90]">
                <li>
                  <button
                    onClick={() => navigateTo("services")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("about")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("faq")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("contact")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-black mb-4">
                Contact
              </h4>
              <ul className="space-y-3 font-['Poppins'] text-[#6f6c90]">
                <li>
                  <a href="mailto:team@yourintegrativehealth.com" className="hover:text-[#61a94e] transition-colors">
                    team@yourintegrativehealth.com
                  </a>
                </li>
                <li>
                  <a href="tel:714-586-8872" className="hover:text-[#61a94e] transition-colors">
                    714-586-8872
                  </a>
                </li>
                <li>300 Regal #614<br />Irvine, CA 92620</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-black mb-4">
                Newsletter
              </h4>
              <p className="font-['Poppins'] text-[#6f6c90] mb-4">
                Subscribe to get health tips
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#61a94e] text-center"
                />
                <button className="bg-[#61a94e] text-white px-4 py-2 rounded-lg hover:bg-[#549440] transition-colors flex items-center justify-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="font-['Poppins'] text-[#6f6c90] text-[14px]">
              © 2025 Your Integrative Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>

    {/* Chat Widget - Outside overflow container */}
    <ChatWidget />
    </>
  );
}
