import React, { useEffect, useState } from 'react'
import WebDevCard from '../pages/WebDevCard'
import Axios from 'axios';

export default function TechCardComp(props) {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get("http://localhost:5000/getData");
        setCards(response.data);
        console.log(cards);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
    // const cards = [
    //     {
    //         srNo: 1,
    //       type: 'HTML',
    //       title: 'title1',
    //       description: 'description',
    //       links: [['title1', 'link1'], ['title2', 'link2'], ['title3', 'link3']],
    //       codeLinks: [['CodeTitle1', 'codelink1'], ['CodeTitle2', 'codelink2'], ['CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 2,
    //       type: 'HTML',
    //       title: 'title2',
    //       description: 'description',
    //       links: [['title1', 'link1'], ['title2', 'link2'], ['title3', 'link3']],
    //       codeLinks: [['CodeTitle1', 'codelink1'], ['CodeTitle2', 'codelink2'], ['CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 4,
    //       type: 'HTML',
    //       title: 'title3',
    //       description: 'description',
    //       links: [['title1', 'link1'], ['title2', 'link2'], ['title3', 'link3']],
    //       codeLinks: [['CodeTitle1', 'codelink1'], ['CodeTitle2', 'codelink2'], ['CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 3,
    //       type: 'HTML',
    //       title: 'title4',
    //       description: 'description',
    //       links: [['title1', 'link1'], ['title2', 'link2'], ['title3', 'link3']],
    //       codeLinks: [['CodeTitle1', 'codelink1'], ['CodeTitle2', 'codelink2'], ['CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 5,
    //       type: 'HTML',
    //       title: 'title5',
    //       description: 'description',
    //       links: [['title1', 'link1'], ['title2', 'link2'], ['title3', 'link3']],
    //       codeLinks: [['CodeTitle1', 'codelink1'], ['CodeTitle2', 'codelink2'], ['CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 1,
    //       type: 'CSS',
    //       title: 'CSS title1',
    //       description: 'CSS description',
    //       links: [['CSS link1', 'link1'], ['CSS link2', 'link2'], ['CSS link3', 'link3']],
    //       codeLinks: [['CSS CodeTitle1', 'codelink1'], ['CSS CodeTitle2', 'codelink2'], ['CSS CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 1,
    //       type: 'ReactJs',
    //       title: 'ReactJs title1',
    //       description: 'ReactJs description',
    //       links: [['ReactJs link1', 'link1'], ['ReactJs link2', 'link2'], ['ReactJs link3', 'link3']],
    //       codeLinks: [['ReactJs CodeTitle1', 'codelink1'], ['ReactJs CodeTitle2', 'codelink2'], ['ReactJs CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 2,
    //       type: 'CSS',
    //       title: 'CSS title2',
    //       description: 'CSS description',
    //       links: [['CSS link1', 'link1'], ['CSS link2', 'link2'], ['CSS link3', 'link3']],
    //       codeLinks: [['CSS CodeTitle1', 'codelink1'], ['CSS CodeTitle2', 'codelink2'], ['CSS CodeTitle3', 'codelink3']]
    //     },
    //     {
    //         srNo: 2,
    //       type: 'ReactJs',
    //       title: 'ReactJs title2',
    //       description: 'ReactJs description',
    //       links: [['ReactJs link1', 'link1'], ['ReactJs link2', 'link2'], ['ReactJs link3', 'link3']],
    //       codeLinks: [['ReactJs CodeTitle1', 'codelink1'], ['ReactJs CodeTitle2', 'codelink2'], ['ReactJs CodeTitle3', 'codelink3']]
    //     }
    //   ];
      
  
    return (
    <div>
      <h1>{props.type}</h1>
        {cards.map((card, index) => (
  <WebDevCard
    key={index}
    title={card.title}
    links={card.links}
    description={card.description}
    codeLinks={card.codeLinks}
  />
))}
    </div>
  )
}
