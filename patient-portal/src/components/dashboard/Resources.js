import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';

// Function to randomly pick a URL from an array of articles
const getRandomPrenatalArticle = () => {
  const prenatalArticles = [
    "https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/in-depth/prenatal-care/art-20044812",
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
      title: "Verify PA Certification",
      description: "Need to verify PA certification and/or disciplinary actions issued by NCCPA? Access our easy-to-use PA Certification Verification tool.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScldcKuZ_YmoTfCeY6VkCTosUD8kfdGE1pRA&s",
      learnMoreUrl: "#verify-pa-certification"
    },
    {
      title: "NCCPA Research",
      description: "Learn more about Certified PAs by reading our latest reports and publications.",
      imageUrl: "https://static01.nyt.com/images/2020/04/24/multimedia/24parenting-DIYPregnancy/24parenting-DIYPregnancy-superJumbo.jpg",
      learnMoreUrl: "#nccpa-research"
    },
    {
      id: 1,
      title: "Forms",
      description: "Access the forms you need for the release of certification information, CME re-auditing, retirement status, CAQ attestation and more.",
      imageUrl: "data:image/jpeg;base64,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",
      learnMoreUrl: "#forms"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
      imageUrl: "https://obgyn-media.coloradowomenshealth.com/Call_the_Midwife-Understanding_a_MidwifesRole.jpg",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
      imageUrl: "https://assets.healthpartners.com/is/image/healthpartners/brand-identity/photography/stock/lifestyle/family/getty726783477-2000x666.jpg?wid=992",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
      imageUrl: "https://www.drlafollette.com/wp-content/uploads/2019/02/MODEL-13-300x300.png",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
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
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7_XIj1bbiEKS-Z88mgh75wc7CHaog6ZJZg&s",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7kPqyrUdEGNGPS0mLNBWZYPcaxpPfn3LgQ&s",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7kPqyrUdEGNGPS0mLNBWZYPcaxpPfn3LgQ&s",
      learnMoreUrl: "#policies-and-procedures"
    },
    {
      id: 1,
      title: "Policies and Procedures",
      description: "View the policies and procedures for NCCPA certification, certification maintenance and more.",
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
