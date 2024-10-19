import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';

// Function to randomly pick a URL from an array of articles
const getRandomPrenatalArticle = () => {
  const prenatalArticles = [
    "https://www.webmd.com/women/first-doctor-visit",
    "https://www.webmd.com/baby/guide/prenatal-care-what-to-expect",
    "https://www.acog.org/womens-health/faqs/prenatal-development-how-your-baby-grows-during-pregnancy",
    "https://www.cdc.gov/ncbddd/pregnancy_gateway/basics.html",
    "https://www.healthline.com/health/pregnancy/prenatal-care",
    "https://www.marchofdimes.org/find-support/topics/pregnancy/prenatal-care",
    "https://www.nichd.nih.gov/health/topics/pregnancy/conditioninfo/prenatal-care"
  ];
  const randomIndex = Math.floor(Math.random() * prenatalArticles.length);
  return prenatalArticles[randomIndex];
};

const ResourceCard = ({ title, description, imageUrl }) => (
  <Card className="mb-4">
    <CardContent className="flex items-start">
      <img src={imageUrl} alt={title} className="w-24 h-24 object-cover mr-4" />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <a 
          href={getRandomPrenatalArticle()} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm uppercase font-semibold"
        >
          Learn More
        </a>
      </div>
    </CardContent>
  </Card>
);

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: "Your First Prenatal Doctor's Visit",
      description: "Regular appointments with your health care provider throughout your pregnancy are important to ensure the health of you and your baby. In addition to medical care, prenatal care includes education on pregnancy and childbirth, plus counseling and support",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScldcKuZ_YmoTfCeY6VkCTosUD8kfdGE1pRA&s",
      learnMoreUrl: "https://www.healthpartners.com/blog/first-prenatal-appointment/#:~:text=What's%20usually%20done%20at%20the,the%20rest%20of%20your%20pregnancy."
    },
    {
      title: "Choosing the Right Midwife for Your Pregnancy",
      description: "Learn how to select a midwife who aligns with your birth plan and personal preferences for a supportive pregnancy journey",
      imageUrl: "https://static01.nyt.com/images/2020/04/24/multimedia/24parenting-DIYPregnancy/24parenting-DIYPregnancy-superJumbo.jpg",
      learnMoreUrl: "https://my.clevelandclinic.org/health/articles/22648-midwife"
    },
    {
      id: 1,
      title: "Essential Prenatal Vitamins for Expecting Mothers",
      description: "Discover the key vitamins and nutrients that are crucial for a healthy pregnancy and how they benefit both mother and baby",
      imageUrl: "https://i.ytimg.com/vi/0SlstYUI6LM/maxresdefault.jpg",
      learnMoreUrl: "#forms"
    },
    {
      id: 1,
      title: "Understanding Your Prenatal Screening Tests",
      description: "Get insights into the various prenatal screening tests available, what they entail, and how they help monitor your baby’s development",
      imageUrl: "https://obgyn-media.coloradowomenshealth.com/Call_the_Midwife-Understanding_a_MidwifesRole.jpg",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Benefits of Regular Exercise During Pregnancy",
      description: "Explore the advantages of staying active during pregnancy, including improved mood, better sleep, and easier labor",
      imageUrl: "https://assets.healthpartners.com/is/image/healthpartners/brand-identity/photography/stock/lifestyle/family/getty726783477-2000x666.jpg?wid=992",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more",
      imageUrl: "https://www.drlafollette.com/wp-content/uploads/2019/02/MODEL-13-300x300.png",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more",
      imageUrl: "https://www.shutterstock.com/shutterstock/videos/1070576338/thumb/9.jpg?ip=x480",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxb1LyWPqHuYtucDaNdefZ22TbGn_iCZllDjoFq8NPd2Ybt79-T6DtjZhciZv-60ttPk&usqp=CAU",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Forms",
      description: "Learn more about the resources of Abide Women's",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7_XIj1bbiEKS-Z88mgh75wc7CHaog6ZJZg&s",
      learnMoreUrl: "external resources"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7kPqyrUdEGNGPS0mLNBWZYPcaxpPfn3LgQ&s",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Managing Morning Sickness: Tips from Midwives",
      description: "Find effective strategies and remedies recommended by midwives to alleviate morning sickness and ensure a more comfortable pregnancy",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7kPqyrUdEGNGPS0mLNBWZYPcaxpPfn3LgQ&s",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Preparing for Labor and Delivery: What to Expect",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7kPqyrUdEGNGPS0mLNBWZYPcaxpPfn3LgQ&s",
      learnMoreUrl: "#policies-and-procedures"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          imageUrl={resource.imageUrl}
        />
      ))}
    </div>
  );
}
