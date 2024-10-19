import { Card, CardContent } from "../ui/Card";

export default function SpotlightGrid() {
  const articles = [
    {
      title: "How I Became a Midwife",
      img: "https://via.placeholder.com/300x200?text=Sample+Image+1",
      url: "http://www.divinebirthmidwifery.com/blog/how-i-became-a-midwife",
    },
    {
      title: "How I Became a Midwife",
      img: "https://via.placeholder.com/300x200?text=Sample+Image+2",
      url: "http://www.divinebirthmidwifery.com/blog/how-i-became-a-midwife",
    },
    {
      title: "How I Became a Midwife",
      img: "https://via.placeholder.com/300x200?text=Sample+Image+3",
      url: "http://www.divinebirthmidwifery.com/blog/how-i-became-a-midwife",
    },
    {
      title: "How I Became a Midwife",
      img: "https://via.placeholder.com/300x200?text=Sample+Image+4",
      url: "http://www.divinebirthmidwifery.com/blog/how-i-became-a-midwife",
    },
    {
      title: "How I Became a Midwife",
      img: "https://via.placeholder.com/300x200?text=Sample+Image+5",
      url: "http://www.divinebirthmidwifery.com/blog/how-i-became-a-midwife",
    },
    {
      title: "How I Became a Midwife",
      img: "https://via.placeholder.com/300x200?text=Sample+Image+6",
      url: "http://www.divinebirthmidwifery.com/blog/how-i-became-a-midwife",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <Card key={index} className="text-center">
          <CardContent>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-auto"
              />
            </a>
            <p className="mt-2">{article.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
